let motionPromise:
  | Promise<{
      gsap: typeof import("gsap").default;
      ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
      lenis: InstanceType<typeof import("lenis").default> | null;
      reducedMotion: boolean;
    }>
  | undefined;

declare global {
  interface Window {
    __portfolioMotionBooted?: boolean;
  }
}

export function getMotionSystem() {
  if (!motionPromise) {
    motionPromise = (async () => {
      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      if (typeof window === "undefined" || reducedMotion) {
        return { gsap, ScrollTrigger, lenis: null, reducedMotion };
      }

      const existing = (
        window as typeof window & {
          __portfolioLenis?: InstanceType<typeof import("lenis").default>;
          __portfolioLenisBound?: boolean;
        }
      );

      if (!existing.__portfolioLenis) {
        const { default: Lenis } = await import("lenis");
        existing.__portfolioLenis = new Lenis({
          autoRaf: false,
        });
      }

      if (!existing.__portfolioLenisBound) {
        existing.__portfolioLenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          existing.__portfolioLenis?.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
        existing.__portfolioLenisBound = true;
      }

      return {
        gsap,
        ScrollTrigger,
        lenis: existing.__portfolioLenis ?? null,
        reducedMotion,
      };
    })();
  }

  return motionPromise;
}

export function initGlobalMotionSystem() {
  if (typeof window === "undefined" || window.__portfolioMotionBooted) return;

  window.__portfolioMotionBooted = true;
  void getMotionSystem().catch((error) => {
    console.error("[motion] failed to initialize global motion system", error);
    window.__portfolioMotionBooted = false;
  });
}
