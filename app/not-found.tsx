import type { Metadata } from 'next';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    "The page you're looking for doesn't exist. Return to NASA's homepage to continue exploring.",
};

export default function NotFound() {
  return (
    <section
      className="section section-dark"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="starfield" />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <span className="section-eyebrow">Error 404</span>
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            color: '#fff',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          Signal lost.
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 'var(--text-lg)',
            maxWidth: 520,
            marginInline: 'auto',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          The page you&apos;re looking for isn&apos;t in our current mission
          archive. Return to base and we&apos;ll get you back on course.
        </p>
        <a href="/" className="btn btn-primary">
          <Home size={18} aria-hidden="true" />
          <span>Return to Homepage</span>
        </a>
      </div>
    </section>
  );
}
