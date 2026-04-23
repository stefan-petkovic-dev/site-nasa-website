'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  /** Row items — typically a list of cards. */
  children: ReactNode;
  /** Extra class on the outer wrapper. */
  className?: string;
  /** Accessible label for the scroll region. */
  ariaLabel?: string;
  /** Page-width fraction to scroll per arrow click (default 0.8). */
  step?: number;
}

/**
 * Horizontally scrollable row with CSS scroll-snap, prev/next arrows, and
 * keyboard navigation. Used for carousels, service strips, testimonial rows,
 * logo strips — any section the design spec calls "scrollable" or "carousel".
 *
 * Expected child structure:
 *   <HorizontalScroller ariaLabel="Our services">
 *     <article className="service-card">…</article>
 *     <article className="service-card">…</article>
 *     …
 *   </HorizontalScroller>
 *
 * The wrapper renders:
 *   <div class="scroll-row-wrap">
 *     <button class="scroll-row-btn scroll-row-btn-left" />
 *     <div class="scroll-row" tabindex="0" role="region">{children}</div>
 *     <button class="scroll-row-btn scroll-row-btn-right" />
 *   </div>
 *
 * Arrow buttons auto-hide when the content fits or the user reaches an end.
 */
export default function HorizontalScroller({
  children,
  className = '',
  ariaLabel = 'Scrollable content',
  step = 0.8,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = (): void => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 2);
      setCanScrollRight(el.scrollLeft < max - 2);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    ro?.observe(el);
    window.addEventListener('resize', update);

    return () => {
      el.removeEventListener('scroll', update);
      ro?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollByFraction = (direction: 1 | -1): void => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * step, behavior: 'smooth' });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByFraction(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByFraction(-1);
    }
  };

  return (
    <div className={`scroll-row-wrap ${className}`.trim()}>
      <button
        type="button"
        className="scroll-row-btn scroll-row-btn-left"
        aria-label="Scroll left"
        onClick={() => scrollByFraction(-1)}
        hidden={!canScrollLeft}
        disabled={!canScrollLeft}
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>
      <div
        ref={scrollerRef}
        className="scroll-row"
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
      <button
        type="button"
        className="scroll-row-btn scroll-row-btn-right"
        aria-label="Scroll right"
        onClick={() => scrollByFraction(1)}
        hidden={!canScrollRight}
        disabled={!canScrollRight}
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
