'use client';

import { useEffect, useState } from 'react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          ZIM<em>.</em>DEVS
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contact" className="nav-cta">Start a Project</a></li>
        </ul>
        <button
          className="hamburger"
          id="hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <button className="mobile-menu-close" onClick={close}>✕ Close</button>
        <a href="#services" onClick={close}>Services</a>
        <a href="#process"  onClick={close}>Process</a>
        <a href="#stack"    onClick={close}>Stack</a>
        <a href="#contact"  onClick={close}>Contact</a>
      </div>
    </>
  );
}
