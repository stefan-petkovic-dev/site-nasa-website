'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Plus } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface Props {
  items: FaqItem[];
  /** Extra class on the outer <div class="faq-list">. */
  className?: string;
  /** Index of the item that should be open on first render. Default: none. */
  defaultOpenIndex?: number;
}

/**
 * Accessible FAQ accordion with AnimatePresence height animation.
 *
 * Usage:
 *   <FaqAccordion items={[{ question: "…", answer: "…" }, …]} />
 *
 * Styling comes from the deterministic `.faq-*` classes in modern-ui.css.
 * Respects `prefers-reduced-motion`: animation collapses to an instant
 * open/close while preserving the interactive behaviour.
 */
export default function FaqAccordion({ items, className = '', defaultOpenIndex }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    typeof defaultOpenIndex === 'number' ? defaultOpenIndex : null,
  );
  const reduce = useReducedMotion();

  const toggle = (i: number): void => {
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <div className={`faq-list ${className}`.trim()}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={i} className="faq-item" data-open={isOpen ? 'true' : 'false'}>
            <button
              id={buttonId}
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>
              <Plus className="faq-icon" size={20} aria-hidden="true" />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-answer-wrap"
                  initial={reduce ? { height: 'auto' } : { height: 0, opacity: 0 }}
                  animate={reduce ? { height: 'auto' } : { height: 'auto', opacity: 1 }}
                  exit={reduce ? { height: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="faq-answer">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
