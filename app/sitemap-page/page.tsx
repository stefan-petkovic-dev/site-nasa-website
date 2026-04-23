import type { Metadata } from 'next';
import MotionReveal from '../../components/MotionReveal';

export const metadata: Metadata = {
  title: 'Sitemap',
  description:
    'Browse all pages and mission-area anchors on the NASA website.',
};

const primary = [
  { name: 'Home', href: '/' },
  { name: 'Work — Mission Spotlight', href: '/#work' },
  { name: 'Products — Core Programs', href: '/#products' },
  { name: 'Pricing — Why NASA', href: '/#pricing' },
  { name: 'Services — Mission Domains', href: '/#services' },
  { name: 'Our Process — Exploration Framework', href: '/#process' },
  { name: 'Testimonials — Latest Stories', href: '/#testimonials' },
  { name: 'Newsletter — Stay Connected', href: '/#newsletter' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function SitemapPage() {
  return (
    <>
      <section
        className="section section-dark"
        style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}
      >
        <div className="container">
          <span className="section-eyebrow">All Pages</span>
          <h1 style={{ color: '#fff' }}>Sitemap</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 720 }}>
            A human-readable map of every page and major section on nasa.gov.
          </p>
        </div>
      </section>

      <MotionReveal as="section" className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <h2>Primary pages</h2>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {primary.map((link) => (
              <li key={link.href} style={{ marginBottom: '12px' }}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <h2 style={{ marginTop: 'var(--spacing-xl)' }}>Legal</h2>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {legal.map((link) => (
              <li key={link.href} style={{ marginBottom: '12px' }}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </MotionReveal>
    </>
  );
}
