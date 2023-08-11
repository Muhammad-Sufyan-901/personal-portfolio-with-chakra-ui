import * as React from "react";

export function useIntersectionObserver(callback: Function): void {
  React.useEffect((): VoidFunction => {
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");

    const observerOptions: IntersectionObserverInit = {
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer: IntersectionObserver = new IntersectionObserver((enteries: IntersectionObserverEntry[]): void => {
      enteries.forEach(({ target, isIntersecting }: IntersectionObserverEntry): void => {
        if (isIntersecting) {
          callback(target);
        }
      });
    }, observerOptions);

    sections.forEach((section): void => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section): void => {
        observer.unobserve(section);
      });
    };
  }, [callback]);
}
