import type { Metadata } from 'next';
import MotionReveal from '../../components/MotionReveal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'NASA is committed to protecting your privacy. Learn how we collect, use, and safeguard information on nasa.gov.',
};

export default function PrivacyPage() {
  return (
    <>
      <section
        className="section section-dark"
        style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}
      >
        <div className="container">
          <span className="section-eyebrow">Legal</span>
          <h1 style={{ color: '#fff' }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 720 }}>
            NASA is committed to protecting the privacy of visitors to our
            public-facing websites.
          </p>
        </div>
      </section>

      <MotionReveal as="section" className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <h2>Information we collect</h2>
          <p>
            When you visit nasa.gov, our web server automatically collects and
            temporarily stores information about your visit — your IP address,
            the date and time of your visit, the pages you visited, and the
            type of browser and operating system you are using. This
            information is used for aggregate traffic analysis and to improve
            the user experience. It is not used to identify you personally.
          </p>

          <h2>Information you voluntarily provide</h2>
          <p>
            If you sign up for a newsletter, submit a form, or otherwise send
            us personally identifying information (such as your name or email
            address), we will use that information only for the purpose you
            provided it. NASA will never sell or share your personal
            information with third parties for marketing purposes.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            NASA uses session cookies to maintain a consistent experience
            across pages. We also use aggregate, anonymized analytics tools to
            understand how visitors use our site. You can disable cookies in
            your browser settings at any time without losing access to NASA
            content.
          </p>

          <h2>Your rights</h2>
          <p>
            You have the right to access, correct, or delete any personally
            identifying information you have provided. To exercise these rights
            or to ask questions about this policy, contact NASA Help.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this privacy policy can be directed to the NASA
            Privacy Office. This policy may be updated periodically; the
            current version is always available at this URL.
          </p>

          <p style={{ marginTop: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>
            Effective April 23, 2026.
          </p>
        </div>
      </MotionReveal>
    </>
  );
}
