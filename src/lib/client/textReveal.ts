import { getMotionSystem } from "./motion";

type RevealMode = "lines" | "fade";

const REVEAL_DURATION_MULTIPLIER = 1.15;
const REVEAL_DELAY_MULTIPLIER = 1.12;
const REVEAL_STAGGER_MULTIPLIER = 1.12;

export interface TextRevealTarget {
  selector: string;
  mode?: RevealMode;
  delay?: number;
  scroll?: boolean;
  start?: string;
  duration?: number;
  stagger?: number;
  y?: number;
}

let stylesInjected = false;

function injectStyles() {
  if (stylesInjected || typeof document === "undefined") return;

  const style = document.createElement("style");
  style.id = "text-reveal-styles";
  style.textContent = `
    .copy-line[class*="-mask"] {
      display: block;
      padding: 0.08em 0.06em 0.2em;
      margin: -0.08em -0.06em -0.2em;
    }

    .copy-line:not([class*="-mask"]) {
      display: block;
      will-change: transform;
      transform: translateZ(0);
    }
  `;

  document.head.appendChild(style);
  stylesInjected = true;
}

export async function initTextReveal(
  scope: ParentNode,
  targets: TextRevealTarget[],
) {
  const { gsap, ScrollTrigger, reducedMotion } = await getMotionSystem();

  if (reducedMotion) return () => {};

  const { default: SplitText } = await import("gsap/SplitText");

  gsap.registerPlugin(ScrollTrigger, SplitText);
  injectStyles();

  const cleanups: Array<() => void> = [];
  let initializedCount = 0;

  targets.forEach((target) => {
    scope.querySelectorAll(target.selector).forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (node.dataset.copyRevealReady === "true") return;
      if (node.dataset.copyIgnore === "true") return;
      if (!node.textContent?.trim()) return;

      node.style.visibility = "visible";

      const mode = target.mode ?? "lines";
      const delay = (target.delay ?? 0) * REVEAL_DELAY_MULTIPLIER;
      const animateOnScroll = target.scroll !== false;
      const start =
        target.start ?? (mode === "lines" ? "top 82%" : "top 86%");

      if (mode === "lines") {
        const split = SplitText.create(node, {
          type: "lines",
          mask: "lines",
          linesClass: "copy-line++",
          lineThreshold: 0.1,
        });

        const lines = split.lines.filter(
          (line): line is HTMLElement => line instanceof HTMLElement,
        );

        if (!lines.length) {
          split.revert();
          return;
        }

        const textIndent = window.getComputedStyle(node).textIndent;
        if (textIndent && textIndent !== "0px" && lines[0]) {
          lines[0].style.paddingLeft = textIndent;
          node.style.textIndent = "0";
        }

        gsap.set(lines, { yPercent: 108, force3D: true });

        const tweenConfig = {
          yPercent: 0,
          duration:
            (target.duration ?? 0.9) * REVEAL_DURATION_MULTIPLIER,
          stagger:
            (target.stagger ?? 0.08) * REVEAL_STAGGER_MULTIPLIER,
          ease: "power3.out",
          delay,
          overwrite: "auto" as const,
        };

        if (animateOnScroll) {
          const tween = gsap.to(lines, {
            ...tweenConfig,
            scrollTrigger: {
              trigger: node,
              start,
              once: true,
            },
          });

          cleanups.push(() => {
            tween.scrollTrigger?.kill();
            split.revert();
            delete node.dataset.copyRevealReady;
          });
        } else {
          gsap.to(lines, tweenConfig);

          cleanups.push(() => {
            split.revert();
            delete node.dataset.copyRevealReady;
          });
        }
      } else {
        gsap.set(node, {
          y: target.y ?? 22,
          opacity: 0,
          force3D: true,
          willChange: "transform,opacity",
        });

        const tweenConfig = {
          y: 0,
          opacity: 1,
          duration:
            (target.duration ?? 0.72) * REVEAL_DURATION_MULTIPLIER,
          ease: "power2.out",
          delay,
          overwrite: "auto" as const,
        };

        if (animateOnScroll) {
          const tween = gsap.to(node, {
            ...tweenConfig,
            scrollTrigger: {
              trigger: node,
              start,
              once: true,
            },
          });

          cleanups.push(() => {
            tween.scrollTrigger?.kill();
            gsap.killTweensOf(node);
            gsap.set(node, { clearProps: "transform,opacity,will-change" });
            delete node.dataset.copyRevealReady;
          });
        } else {
          gsap.to(node, tweenConfig);

          cleanups.push(() => {
            gsap.killTweensOf(node);
            gsap.set(node, { clearProps: "transform,opacity,will-change" });
            delete node.dataset.copyRevealReady;
          });
        }
      }

      node.dataset.copyRevealReady = "true";
      initializedCount += 1;
    });
  });

  if (initializedCount > 0) {
    ScrollTrigger.refresh();
  }

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
