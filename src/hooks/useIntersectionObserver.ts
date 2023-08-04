import * as React from "react";

export function useIntersectionObserver(callback: Function): void {
  React.useEffect((): (() => void) => {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");
    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer: IntersectionObserver = new IntersectionObserver((enteries: IntersectionObserverEntry[]) => {
      enteries.forEach(({ target, isIntersecting }: IntersectionObserverEntry) => {
        if (isIntersecting) {
          callback(target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [callback]);
}
