import { useEffect, useState, type RefObject } from 'react';

/**
 * Tracks how far a target element has scrolled through the viewport.
 * Returns a value from 0 (element's top at viewport top) to 1
 * (element's bottom at viewport bottom). Updates on scroll/resize,
 * throttled to one update per animation frame.
 */
export function useScrollProgress(ref: RefObject<HTMLElement>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = rect.height - viewport;

      const next =
        scrollable > 0
          ? -rect.top / scrollable
          : rect.top < viewport
          ? 1
          : 0;

      setProgress(Math.min(1, Math.max(0, next)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}
