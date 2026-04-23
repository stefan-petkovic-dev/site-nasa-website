'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Rocket } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/#work' },
  { name: 'Products', href: '/#products' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Services', href: '/#services' },
  { name: 'Our Process', href: '/#process' },
  { name: 'Testimonials', href: '/#testimonials' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const drawer = (
    <>
      <div
        className="nav-drawer-backdrop"
        data-open={open ? 'true' : 'false'}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-nav-drawer"
        className="nav-drawer"
        data-open={open ? 'true' : 'false'}
        aria-label="Mobile navigation"
      >
        <div className="nav-drawer-inner">
          <button
            type="button"
            className="nav-drawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-drawer-link"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/#newsletter"
            className="btn btn-primary nav-drawer-cta"
            onClick={() => setOpen(false)}
          >
            <Rocket size={16} aria-hidden="true" />
            <span>Explore Our Missions</span>
          </a>
        </div>
      </aside>
    </>
  );

  return (
    <div className="nav-wrap">
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="NASA home" data-logo-native>
          <img
            src="/images/logo/001_nasa-logo_2x.png"
            alt="NASA logo"
            width={160}
            height={40}
          />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="/#newsletter" className="btn btn-primary">
            <Rocket size={16} aria-hidden="true" />
            <span>Explore Our Missions</span>
          </a>
        </div>

        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav-drawer"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </div>
      {mounted ? createPortal(drawer, document.body) : null}
    </div>
  );
}
