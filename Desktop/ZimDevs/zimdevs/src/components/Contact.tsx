'use client';

import { useRef, useState } from 'react';

const EMAILJS_PUBLIC_KEY = 'MTCdwaT-rY7tekbz_';
const EMAILJS_SERVICE    = 'service_vir9big';
const EMAILJS_TEMPLATE   = 'template_49fc4nf';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const emailVal = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    if (!emailVal || !emailVal.includes('@')) {
      (form.elements.namedItem('email') as HTMLInputElement).focus();
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const emailjs = await import('@emailjs/browser');
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

      const firstName = (form.elements.namedItem('fname') as HTMLInputElement).value.trim();
      const lastName  = (form.elements.namedItem('lname') as HTMLInputElement).value.trim();
      const fullName  = [firstName, lastName].filter(Boolean).join(' ') || 'Website visitor';

      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        from_name:    fullName,
        from_email:   emailVal,
        reply_to:     emailVal,
        service_type: (form.elements.namedItem('service') as HTMLSelectElement).value || 'Not specified',
        message:      (form.elements.namedItem('brief') as HTMLTextAreaElement).value || '(no message)',
        to_email:     'erickmureruswa@gmail.com',
      });

      setStatus('success');
    } catch (err: unknown) {
      const detail = err instanceof Error ? err.message : JSON.stringify(err);
      setErrorMsg(`✕ ERROR: ${detail}`);
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div>
            <span className="section-num" style={{ display: 'block', marginBottom: 'var(--sp-md)' }}>
              04 — LET&apos;S BUILD
            </span>
            <h2 className="contact-headline">
              Ready<br />to <em>ship</em>?
            </h2>
            <p className="contact-sub">
              Tell us what you&apos;re building.<br />
              We&apos;ll tell you exactly how fast<br />
              we can deliver it.
            </p>
            <div className="contact-links">
              <a
                href="https://mail.google.com/mail/?view=cm&to=erickmureruswa@gmail.com&su=Project+Enquiry+from+ZimDevs"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>erickmureruswa@gmail.com</span>
                <span className="cl-arrow">↗</span>
              </a>
              <a
                href="https://wa.me/263771465624"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>WhatsApp: +263 77 146 5624</span>
                <span className="cl-arrow">↗</span>
              </a>
              <a
                href="https://instagram.com/zim_young_devs"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>Instagram: @zim_young_devs</span>
                <span className="cl-arrow">↗</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=erickmureruswa@gmail.com&su=Book+a+30-min+call+with+ZimDevs"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span>Book a 30-min call</span>
                <span className="cl-arrow">↗</span>
              </a>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <p className="form-success" style={{ display: 'block' }}>
                ✓ BRIEF RECEIVED — WE&apos;LL RESPOND WITHIN 24 HOURS
              </p>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="fname" placeholder="Alex" autoComplete="given-name" />
                  </div>
                  <div className="field">
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" placeholder="Chen" autoComplete="family-name" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="email">Work email *</label>
                  <input type="email" id="email" name="email" placeholder="alex@company.com" autoComplete="email" required />
                </div>
                <div className="field">
                  <label htmlFor="service">What do you need?</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Custom web development</option>
                    <option>AI integrations</option>
                    <option>API design &amp; backend</option>
                    <option>Workflow automation</option>
                    <option>Full-stack + automation</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="brief">Project brief</label>
                  <textarea
                    id="brief"
                    name="brief"
                    placeholder="Describe what you're building, your timeline, and any technical constraints…"
                  />
                </div>
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Brief →'}
                </button>
                {status === 'error' && (
                  <p className="form-error" style={{ display: 'block' }}>{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
