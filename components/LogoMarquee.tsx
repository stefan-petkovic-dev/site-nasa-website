'use client';

import { Children, isValidElement, cloneElement } from 'react';
import type { ReactNode, ReactElement } from 'react';
import { useReducedMotion } from 'motion/react';

interface Props {
  /** Marquee items — each item should have `className="logo-marquee-item"`. */
  children: ReactNode;
  /** Accessible label for the region. */
  ariaLabel?: string;
  /** Pause the loop when the mouse enters the track (default true). */
  pauseOnHover?: boolean;
  /** Extra class on the outer <div class="logo-marquee">. */
  className?: string;
}

/**
 * Infinite horizontal auto-scrolling strip. Children are rendered twice inside
 * .logo-marquee-track so the CSS keyframe can translate -50% and the loop
 * reads as seamless regardless of how many items you pass.
 *
 * Usage (partner / client / integration / certification / press strip):
 *
 *   <LogoMarquee ariaLabel="Our partners">
 *     <div className="logo-marquee-item"><img src="/images/partners/acme.svg" alt="Acme" /></div>
 *     <div className="logo-marquee-item">
 *       <span className="logo-marquee-item-text">Brand</span>
 *     </div>
 *     …
 *   </LogoMarquee>
 *
 * Respects `prefers-reduced-motion`: stops the animation and lets the row
 * simply overflow (the gradient mask hides the cut-offs), so motion-sensitive
 * users still see every brand rather than a frozen translated row.
 */
export default function LogoMarquee({
  children,
  ariaLabel = 'Scrolling logos',
  pauseOnHover = true,
  className = '',
}: Props) {
  const reduce = useReducedMotion();

  const items = Children.toArray(children);
  // Clone the array so React has unique keys on the duplicated pass —
  // otherwise the reconciler warns about repeated keys.
  const duplicated = items.map((child, i) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<Record<string, unknown>>, { key: `dup-${i}`, 'aria-hidden': 'true' } as Record<string, unknown>);
    }
    return child;
  });

  return (
    <div
      className={`logo-marquee ${className}`.trim()}
      role="region"
      aria-label={ariaLabel}
      data-pause-on-hover={pauseOnHover ? 'true' : 'false'}
      data-reduced-motion={reduce ? 'true' : 'false'}
    >
      <div className="logo-marquee-track" style={reduce ? { animation: 'none' } : undefined}>
        {items}
        {duplicated}
      </div>
    </div>
  );
}
