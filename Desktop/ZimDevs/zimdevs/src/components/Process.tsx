'use client';

import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    n: '01',
    title: <>Discovery &amp;<br />Requirements</>,
    desc: 'We map your current state, constraints, and goals in a single structured sprint. No bloated requirements docs — just a clear technical brief and delivery scope, signed off before a line of code is written.',
    terminal: (
      <>
        <span className="t-prompt">$ </span><span className="t-cmd">zimdevs init --project</span><br />
        <span className="t-out">→ Scanning existing systems...</span><br />
        <span className="t-out">→ Mapping integration points (14 found)</span><br />
        <span className="t-ok">✓  brief.md generated — ready for review</span>
      </>
    ),
  },
  {
    n: '02',
    title: <>System<br />Architecture</>,
    desc: 'We design before we build. Every system gets a proper architecture document: data models, service boundaries, API contracts, infrastructure plans. You review and sign off — no surprises mid-sprint.',
    terminal: (
      <>
        <span className="t-prompt">$ </span><span className="t-cmd">zimdevs arch --diagram services</span><br />
        <span className="t-out">→ Resolving service graph...</span><br />
        <span className="t-out">→ API contracts: 22 endpoints defined</span><br />
        <span className="t-ok">✓  architecture locked at v1.0.0</span>
      </>
    ),
  },
  {
    n: '03',
    title: <>Build &amp;<br />Iterate</>,
    desc: 'Two-week sprints. A working deploy at the end of every one. You see real, testable software — not mockups. Feedback happens in the product, not in endless status calls.',
    terminal: (
      <>
        <span className="t-prompt">$ </span><span className="t-cmd">git push origin main</span><br />
        <span className="t-out">→ CI: 312 tests passing (0 failures)</span><br />
        <span className="t-out">→ Deploying to staging...</span><br />
        <span className="t-ok">✓  staging.build/client/sprint-4 — live</span>
      </>
    ),
  },
  {
    n: '04',
    title: <>Ship &amp;<br />Maintain</>,
    desc: 'Zero-downtime production deploy. Observability configured from day one. We hand over full ownership — or stay on retainer for ongoing development and automation runs. Your call.',
    terminal: (
      <>
        <span className="t-prompt">$ </span><span className="t-cmd">zimdevs deploy --prod --zero-downtime</span><br />
        <span className="t-out">→ Health checks: passing</span><br />
        <span className="t-out">→ Cutover: 0.0s downtime recorded</span><br />
        <span className="t-ok">✓  production live at your-domain.com</span>
      </>
    ),
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollSpaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tick = false;

    const onScroll = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const el = scrollSpaceRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const total = el.offsetHeight - window.innerHeight;
          const scrolled = -rect.top;
          if (scrolled >= 0 && scrolled <= total) {
            const step = Math.min(3, Math.floor((scrolled / total) * 4));
            setActiveStep(step);
          }
        }
        tick = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToStep = (step: number) => {
    const el = scrollSpaceRef.current;
    if (!el || window.innerWidth <= 768) return;
    const top = el.offsetTop;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (step / 4) * total, behavior: 'smooth' });
  };

  return (
    <section className="section process-outer" id="process">
      <div className="process-scroll-space" ref={scrollSpaceRef}>
        <div className="process-sticky">
          <div className="container" style={{ width: '100%' }}>
            <div className="process-layout">
              <div className="process-lhs">
                <div className="process-section-hdr">
                  <span className="section-num">02 — HOW WE WORK</span>
                  <span className="label">Process</span>
                </div>
                <nav className="proc-nav" aria-label="Process steps">
                  {STEPS.map((s, i) => (
                    <div
                      key={i}
                      className={`proc-nav-item${activeStep === i ? ' active' : ''}`}
                      onClick={() => scrollToStep(i)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') scrollToStep(i); }}
                      tabIndex={0}
                      role="button"
                    >
                      <span className="proc-nav-n">0{i + 1}</span>
                      <span className="proc-nav-label">
                        {['Discovery', 'Architecture', 'Build & Iterate', 'Ship & Maintain'][i]}
                      </span>
                    </div>
                  ))}
                </nav>
                <div className="proc-bars">
                  {STEPS.map((_, i) => (
                    <div key={i} className="proc-bar">
                      <div className={`proc-bar-fill${activeStep >= i ? ' filled' : ''}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="process-rhs">
                <div className="proc-steps" id="procSteps">
                  {STEPS.map((s, i) => (
                    <div
                      key={i}
                      className={`proc-step${activeStep === i ? ' active' : ''}`}
                      data-step={i}
                    >
                      <div className="proc-step-n">0{i + 1}</div>
                      <h3 className="proc-step-title">{s.title}</h3>
                      <p className="proc-step-desc">{s.desc}</p>
                      <div className="terminal">
                        <span className="terminal-dots">● ● ●</span>
                        {s.terminal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
