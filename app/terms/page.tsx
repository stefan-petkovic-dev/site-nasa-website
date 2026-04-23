import type { Metadata } from 'next';
import MotionReveal from '../../components/MotionReveal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    "NASA's Terms of Service govern use of nasa.gov. Content is public domain unless otherwise noted.",
};

export default function TermsPage() {
  return (
    <>
      <section
        className="section section-dark"
        style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}
      >
        <div className="container">
          <span className="section-eyebrow">Legal</span>
          <h1 style={{ color: '#fff' }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 720 }}>
            These terms govern your use of nasa.gov and related public-facing
            NASA services.
          </p>
        </div>
      </section>

      <MotionReveal as="section" className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <h2>Public domain content</h2>
          <p>
            Unless specifically noted, information presented on nasa.gov is
            considered public information and may be distributed or copied.
            Use of appropriate credit is requested. NASA is generally able to
            grant permission for use of materials such as images, audio, and
            video for nonprofit and educational purposes.
          </p>

          <h2>Third-party material</h2>
          <p>
            Some material on nasa.gov is provided by or used with permission
            from third parties. You are responsible for securing permission
            from the rights holder before reusing any material so marked.
          </p>

          <h2>Disclaimer</h2>
          <p>
            NASA provides nasa.gov on an &quot;as is&quot; basis without
            warranties of any kind. While we make every effort to ensure the
            accuracy of information on this site, NASA does not guarantee the
            accuracy, completeness, or timeliness of any content.
          </p>

          <h2>Acceptable use</h2>
          <p>
            Users are expected to access NASA web resources in a manner
            consistent with applicable laws. Attempts to upload or change
            information on this site, or to otherwise cause damage to the
            site, are strictly prohibited and may be punishable under
            applicable federal law.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            NASA may update these terms from time to time. Continued use of
            nasa.gov after any revision constitutes acceptance of the updated
            terms.
          </p>

          <p style={{ marginTop: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>
            Effective April 23, 2026.
          </p>
        </div>
      </MotionReveal>
    </>
  );
}
