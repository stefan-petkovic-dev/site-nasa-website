'use client';

import { useEffect } from 'react';

/**
 * Site-wide client-side enhancements. Mount once in app/layout.tsx.
 * - Adds `data-scrolled="true"` to the document when the page has scrolled
 *   so the nav can shrink / gain a shadow via CSS (`[data-scrolled] .nav { ... }`).
 *
 * Scroll-reveal animations are handled by Motion (`motion/react`) — either
 * via the `MotionReveal` wrapper (for server components) or via
 * `<motion.div whileInView={…}>` inline (for client components). This
 * component is intentionally minimal so it doesn't compete with Motion's
 * IntersectionObserver lifecycle.
 */
export default function ClientEnhancements(): null {
  useEffect(() => {
    const onScroll = (): void => {
      if (window.scrollY > 8) {
        document.documentElement.setAttribute('data-scrolled', 'true');
      } else {
        document.documentElement.removeAttribute('data-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
