'use client';

import { motion, useReducedMotion } from 'motion/react';
import { createElement } from 'react';
import type { ReactNode } from 'react';

type Tag = 'div' | 'section' | 'article' | 'li' | 'header' | 'aside';

interface Props {
  children: ReactNode;
  /** Extra class on the wrapping element. */
  className?: string;
  /** id attribute for anchor navigation. */
  id?: string;
  /** Render a different element than <div>. */
  as?: Tag;
  /** Seconds to delay the animation after the element enters view. */
  delay?: number;
  /** Animation duration in seconds (default 0.6). */
  duration?: number;
  /** Pixels of Y-offset to start from (default 24). Negative = animate down. */
  y?: number;
  /** IntersectionObserver rootMargin (default triggers 80px before entry). */
  rootMargin?: string;
  /** Animate only on first entry (default true). Set false to replay. */
  once?: boolean;
}

const MOTION_TAG = {
  div:     motion.div,
  section: motion.section,
  article: motion.article,
  li:      motion.li,
  header:  motion.header,
  aside:   motion.aside,
} as const;

/**
 * Drop-in scroll-reveal wrapper built on Motion (motion.dev).
 *
 * Use inside Server Components without flipping the whole page to 'use client':
 *
 *   import MotionReveal from '../components/MotionReveal';
 *
 *   <MotionReveal as="section" className="features-section">
 *     <h2>Our Services</h2>
 *     …
 *   </MotionReveal>
 *
 * Stagger children by increasing the `delay` prop on each sibling
 * (0, 0.08, 0.16, 0.24 …) or by composing `motion.div` directly with
 * `variants` + `staggerChildren` on the parent.
 *
 * Respects `prefers-reduced-motion`: the animation collapses to a static
 * element so motion-sensitive users see content instantly at final position.
 */
export default function MotionReveal({
  children,
  className,
  id,
  as = 'div',
  delay = 0,
  duration = 0.6,
  y = 24,
  rootMargin = '0px 0px -80px 0px',
  once = true,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return createElement(as, { className, id }, children);
  }

  const Tag = MOTION_TAG[as];

  return (
    <Tag
      className={className}
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: rootMargin }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
