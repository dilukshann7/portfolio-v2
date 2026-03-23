type PageCleanup = () => void;

interface PageScriptContext {
  signal: AbortSignal;
  onCleanup: (cleanup?: PageCleanup | void) => void;
}

declare global {
  interface Window {
    __portfolioPageScriptCleanups?: Map<string, PageCleanup[]>;
  }
}

function getRegistry() {
  if (typeof window === "undefined") {
    return new Map<string, PageCleanup[]>();
  }

  window.__portfolioPageScriptCleanups ??= new Map<string, PageCleanup[]>();
  return window.__portfolioPageScriptCleanups;
}

export function cleanupPageScript(key: string) {
  if (typeof window === "undefined") return;

  const registry = getRegistry();
  const cleanups = registry.get(key);

  if (!cleanups) return;

  registry.delete(key);

  for (const cleanup of [...cleanups].reverse()) {
    try {
      cleanup();
    } catch (error) {
      console.error(`[spa] cleanup failed for "${key}"`, error);
    }
  }
}

export function runPageScript(
  key: string,
  setup: (context: PageScriptContext) => void | PageCleanup | Promise<void | PageCleanup>,
) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  cleanupPageScript(key);

  const registry = getRegistry();
  const controller = new AbortController();
  const cleanups: PageCleanup[] = [() => controller.abort()];

  registry.set(key, cleanups);

  const onCleanup = (cleanup?: PageCleanup | void) => {
    if (!cleanup) return;
    cleanups.push(cleanup);
  };

  const handleBeforeSwap = () => {
    cleanupPageScript(key);
  };

  document.addEventListener("astro:before-swap", handleBeforeSwap, {
    once: true,
  });

  onCleanup(() => {
    document.removeEventListener("astro:before-swap", handleBeforeSwap);
  });

  void Promise.resolve(setup({ signal: controller.signal, onCleanup }))
    .then((cleanup) => {
      if (!registry.has(key)) {
        cleanup?.();
        return;
      }

      onCleanup(cleanup);
    })
    .catch((error) => {
      console.error(`[spa] setup failed for "${key}"`, error);
    });
}
