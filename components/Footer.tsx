
const currentYear = new Date().getFullYear();

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'Our Process', href: '/#process' },
];

const resourceLinks = [
  { name: 'Products', href: '/#products' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Newsletter', href: '/#newsletter' },
];

const legalLinks = [
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
  { name: 'Sitemap', href: '/sitemap-page' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="/images/logo/001_nasa-logo_2x.png"
              alt="NASA logo"
              width={180}
              height={56}
            />
            <p className="footer-tagline">
              Exploring the unknown in air and space, innovating for the benefit
              of humanity, and inspiring the world through discovery. Founded 1958.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} National Aeronautics and Space Administration.</span>
          <ul className="footer-bottom-links">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
