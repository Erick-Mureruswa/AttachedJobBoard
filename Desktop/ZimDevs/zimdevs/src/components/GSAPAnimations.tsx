'use client';

import { useEffect } from 'react';

export function GSAPAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup: (() => void) | undefined;

    const init = async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Hero entrance
      gsap.set('.hero-eyebrow',      { opacity: 0, y: 28 });
      gsap.set('.hero-headline',     { opacity: 0, y: 64 });
      gsap.set('.hero-sub',          { opacity: 0, y: 32 });
      gsap.set('.hero-actions .btn', { opacity: 0, y: 24 });
      gsap.set('.hero-stat',         { opacity: 0, y: 30 });
      gsap.set('.hero-scroll-hint',  { opacity: 0 });

      const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTL
        .to('.hero-eyebrow',      { opacity: 1, y: 0, duration: 0.85 }, 0.15)
        .to('.hero-headline',     { opacity: 1, y: 0, duration: 1.1  }, 0.35)
        .to('.hero-sub',          { opacity: 1, y: 0, duration: 0.9  }, 0.65)
        .to('.hero-actions .btn', { opacity: 1, y: 0, duration: 0.7, stagger: 0.13 }, 0.9)
        .to('.hero-stat',         { opacity: 1, y: 0, duration: 0.7, stagger: 0.09 }, 1.05)
        .to('.hero-scroll-hint',  { opacity: 1, duration: 0.6 }, 1.5);

      // Services
      gsap.set('#svc-header', { opacity: 0, y: 28 });
      gsap.to('#svc-header', {
        scrollTrigger: { trigger: '#svc-header', start: 'top 88%', once: true },
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      });
      gsap.set('.svc', { opacity: 0, y: 52 });
      gsap.to('.svc', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 80%', once: true },
        opacity: 1, y: 0, duration: 0.9,
        stagger: { amount: 0.45, from: 'start' },
        ease: 'power3.out',
      });

      // Process header
      gsap.set('.process-section-hdr', { opacity: 0, y: 24 });
      gsap.to('.process-section-hdr', {
        scrollTrigger: { trigger: '.process-outer', start: 'top 85%', once: true },
        opacity: 1, y: 0, duration: 0.85, ease: 'power2.out',
      });

      // Stack
      gsap.set('#stack-header', { opacity: 0, y: 28 });
      gsap.to('#stack-header', {
        scrollTrigger: { trigger: '#stack-header', start: 'top 88%', once: true },
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
      });
      gsap.set('#ticker', { opacity: 0 });
      gsap.to('#ticker', {
        scrollTrigger: { trigger: '#ticker', start: 'top 90%', once: true },
        opacity: 1, duration: 0.9, ease: 'power2.out',
      });
      gsap.set('.stack-cat', { opacity: 0, y: 40 });
      gsap.to('.stack-cat', {
        scrollTrigger: { trigger: '#stack-grid', start: 'top 82%', once: true },
        opacity: 1, y: 0, duration: 0.85,
        stagger: { amount: 0.35, from: 'start' },
        ease: 'power2.out',
      });

      // Contact
      gsap.set('.contact-headline', { opacity: 0, x: -40 });
      gsap.set('.contact-sub',      { opacity: 0, x: -24 });
      gsap.set('.contact-links',    { opacity: 0, x: -24 });
      gsap.set('.contact-form',     { opacity: 0, x:  40 });

      const contactTrigger = { trigger: '#contact', start: 'top 78%', once: true };
      gsap.to('.contact-headline', { scrollTrigger: contactTrigger, opacity: 1, x: 0, duration: 1.0, ease: 'power3.out' });
      gsap.to('.contact-sub',      { scrollTrigger: contactTrigger, opacity: 1, x: 0, duration: 0.85, ease: 'power2.out', delay: 0.15 });
      gsap.to('.contact-links',    { scrollTrigger: contactTrigger, opacity: 1, x: 0, duration: 0.85, ease: 'power2.out', delay: 0.28 });
      gsap.to('.contact-form',     { scrollTrigger: contactTrigger, opacity: 1, x: 0, duration: 0.95, ease: 'power3.out', delay: 0.1 });

      gsap.set('.contact-link', { opacity: 0, y: 14 });
      gsap.to('.contact-link', {
        scrollTrigger: { trigger: '.contact-links', start: 'top 82%', once: true },
        opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power2.out', delay: 0.3,
      });

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    };

    init();
    return () => cleanup?.();
  }, []);

  return null;
}
