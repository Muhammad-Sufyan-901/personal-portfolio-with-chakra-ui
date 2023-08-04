export function useWindowOnEvent(event: keyof WindowEventMap, callback: () => void): void {
  if (typeof window === "undefined") return;

  window.addEventListener(event, callback);
}
