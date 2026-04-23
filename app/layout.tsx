import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ClientEnhancements from '../components/ClientEnhancements';

export const metadata: Metadata = {
  title: {
    default: 'NASA: Space Exploration, Science & Technology',
    template: '%s | NASA',
  },
  description:
    "Explore NASA's missions to the Moon, Mars, and beyond. Discover the latest space science, technology, and discoveries from America's space agency.",
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'NASA: Space Exploration, Science & Technology',
    description:
      "Explore NASA's missions to the Moon, Mars, and beyond. Discover the latest space science, technology, and discoveries from America's space agency.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <header>
          <Nav />
        </header>
        <main id="main">{children}</main>
        <Footer />
        <ClientEnhancements />
      </body>
    </html>
  );
}
