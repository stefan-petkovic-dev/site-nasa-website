'use client';

import { motion } from 'motion/react';
import { Rocket, Check, ArrowRight } from 'lucide-react';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export default function HomeHero() {
  return (
    <section className="hero hero--dark-gradient">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.35,
          zIndex: 0,
          mixBlendMode: 'screen',
        }}
      >
        <source src="/videos/video-1-hero-ambient-loop.mp4" type="video/mp4" />
      </video>
      <div className="starfield" />
      <div className="hero-inner">
        <motion.span className="hero-eyebrow" {...fadeUp(0)}>
          NASA Space Exploration
        </motion.span>
        <motion.h1 className="hero-title" {...fadeUp(0.08)}>
          Exploring the Unknown for the Benefit of All Humankind
        </motion.h1>
        <motion.p className="hero-subtitle" {...fadeUp(0.16)}>
          NASA leads humanity&apos;s space exploration, advances the science
          that protects our planet, and shares everything it discovers with
          the world.
        </motion.p>
        <motion.ul className="hero-bullets" {...fadeUp(0.24)}>
          <li>
            <Check size={18} aria-hidden="true" />
            <span>Returning humans to the Moon with Artemis</span>
          </li>
          <li>
            <Check size={18} aria-hidden="true" />
            <span>Operating the International Space Station 24/7</span>
          </li>
          <li>
            <Check size={18} aria-hidden="true" />
            <span>Robotic explorers active across the solar system</span>
          </li>
        </motion.ul>
        <motion.div className="hero-cta-row" {...fadeUp(0.32)}>
          <motion.a
            href="#services"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket size={18} aria-hidden="true" />
            <span>Explore Our Missions</span>
          </motion.a>
          <motion.a
            href="#process"
            className="btn btn-ghost"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>How We Explore</span>
            <ArrowRight size={18} aria-hidden="true" />
          </motion.a>
        </motion.div>
        <motion.p className="hero-caption" {...fadeUp(0.42)}>
          Artemis I · November 16, 2022 · Kennedy Space Center, Florida
        </motion.p>
      </div>
    </section>
  );
}
