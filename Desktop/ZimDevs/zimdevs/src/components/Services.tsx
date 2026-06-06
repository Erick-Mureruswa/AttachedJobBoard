export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header" id="svc-header">
          <span className="section-num">01 — SERVICES</span>
          <span className="label">What we do</span>
        </div>
        <div className="services-grid">
          <div className="svc">
            <div className="svc-inner">
              <span className="svc-slug">A — WEB DEVELOPMENT</span>
              <h3 className="svc-title">Custom<br />Web Dev</h3>
              <p className="svc-desc">
                Full-stack applications engineered from first principles. No templates, no shortcuts.
                Every architecture decision is made for your specific constraints and scale targets —
                not a copy-paste of the last project.
              </p>
              <div className="svc-tags">
                <span className="svc-tag">Next.js</span>
                <span className="svc-tag">React</span>
                <span className="svc-tag">Node.js</span>
                <span className="svc-tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="svc">
            <div className="svc-inner">
              <span className="svc-slug">B — AI INTEGRATIONS</span>
              <h3 className="svc-title">AI<br />Integrations</h3>
              <p className="svc-desc">
                Embed intelligence into your existing stack. LLM pipelines, vector search, RAG
                architectures, and autonomous agents that operate within your business workflows
                without breaking everything else.
              </p>
              <div className="svc-tags">
                <span className="svc-tag">OpenAI</span>
                <span className="svc-tag">Claude</span>
                <span className="svc-tag">LangChain</span>
                <span className="svc-tag">Pinecone</span>
              </div>
            </div>
          </div>

          <div className="svc">
            <div className="svc-inner">
              <span className="svc-slug">C — API &amp; BACKEND</span>
              <h3 className="svc-title">API Design<br />&amp; Backend</h3>
              <p className="svc-desc">
                RESTful and GraphQL APIs built for long-term reliability. Microservice architectures
                that decouple gracefully. Event-driven systems that scale from 100 to 10M requests
                without requiring a rewrite.
              </p>
              <div className="svc-tags">
                <span className="svc-tag">REST</span>
                <span className="svc-tag">GraphQL</span>
                <span className="svc-tag">Redis</span>
                <span className="svc-tag">Kafka</span>
              </div>
            </div>
          </div>

          <div className="svc">
            <div className="svc-inner">
              <span className="svc-slug">D — AUTOMATION</span>
              <h3 className="svc-title">Workflow<br />Automation</h3>
              <p className="svc-desc">
                Map, redesign, and automate your operational workflows. From data pipelines and CRM
                sync to multi-step approvals and real-time triggers — we make your tools talk to each
                other so your team doesn&apos;t have to.
              </p>
              <div className="svc-tags">
                <span className="svc-tag">n8n</span>
                <span className="svc-tag">Make</span>
                <span className="svc-tag">Zapier</span>
                <span className="svc-tag">Custom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
