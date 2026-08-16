import type { Action } from 'svelte/action';

export interface RevealOptions {
  delay?: number;
  duration?: number;
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (
  node,
  { delay = 0, duration = 700 } = {}
) => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    node.style.opacity = '1';
    return {};
  }

  node.style.opacity = '0';
  node.style.transition = `opacity ${duration}ms ease ${delay}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        observer.unobserve(node);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
};