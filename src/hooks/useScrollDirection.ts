import { useEffect, useRef, useState } from 'react';

/**
 * Reports whether the user is *actively scrolling down*. Returns true while
 * downward scrolling is happening and flips back to false shortly after the
 * page goes idle (or when scrolling up). Useful for play/pause-on-scroll UI.
 */
export function useScrollDirection(idleDelay = 150): boolean {
  const [scrollingDown, setScrollingDown] = useState(false);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    let idle: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      const y = window.scrollY;
      setScrollingDown(y > lastY.current);
      lastY.current = y;

      clearTimeout(idle);
      idle = setTimeout(() => setScrollingDown(false), idleDelay);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(idle);
    };
  }, [idleDelay]);

  return scrollingDown;
}
