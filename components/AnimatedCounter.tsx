'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';

interface Props {
  /** Final number to count up to. */
  value: number;
  /** Optional prefix rendered before the digits (e.g. "$"). */
  prefix?: string;
  /** Optional suffix rendered after the digits (e.g. "+", "%", "k"). */
  suffix?: string;
  /** Animation duration in milliseconds (default 1800). */
  duration?: number;
  /** Decimal places to preserve (default 0). */
  decimals?: number;
  /** Extra class on the wrapping <span class="counter">. */
  className?: string;
}

/**
 * Count-up-on-view number. Animates from 0 to `value` when the element
 * scrolls into view, then stops. Final value is also used as the fallback
 * for `prefers-reduced-motion` users so they see the correct static number
 * instantly.
 *
 * Usage inside the stats band:
 *   <span className="stats-band-value">
 *     <AnimatedCounter value={10000} suffix="+" />
 *   </span>
 *
 * Uses requestAnimationFrame with an eased curve so the digits don't tick
 * linearly — they decelerate into place, which reads as more premium.
 */
export default function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  decimals = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<number>(0);
  const hasAnimated = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const animate = (): void => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const start = performance.now();
      const tick = (now: number): void => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      animate();
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animate();
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, reduce]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={`counter ${className}`.trim()}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
