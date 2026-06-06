const TICKER_ITEMS = [
  'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Redis',
  'OpenAI', 'Claude API', 'Vercel', 'Docker', 'Kubernetes', 'Terraform',
  'n8n', 'GraphQL', 'Kafka',
];

export function TechStack() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-header" id="stack-header">
          <span className="section-num">03 — TOOLS &amp; STACK</span>
          <span className="label">Technology</span>
        </div>
      </div>

      <div className="ticker-outer" id="ticker">
        <div className="ticker-track">
          {doubled.flatMap((item, i) => [
            <span key={`item-${i}`} className="t-item">{item}</span>,
            <span key={`sep-${i}`} className="t-sep">×</span>,
          ])}
        </div>
      </div>

      <div className="container">
        <div className="stack-grid" id="stack-grid">
          <div className="stack-cat">
            <span className="stack-cat-tag">Frontend</span>
            <div className="stack-cat-title">UI / Client</div>
            <div className="stack-items">
              <span className="stack-item">React &amp; Next.js</span>
              <span className="stack-item">TypeScript</span>
              <span className="stack-item">Tailwind CSS</span>
              <span className="stack-item">Framer Motion</span>
              <span className="stack-item">Three.js / WebGL</span>
            </div>
          </div>
          <div className="stack-cat">
            <span className="stack-cat-tag">Backend</span>
            <div className="stack-cat-title">API / Server</div>
            <div className="stack-items">
              <span className="stack-item">Node.js + Express</span>
              <span className="stack-item">Python / FastAPI</span>
              <span className="stack-item">PostgreSQL</span>
              <span className="stack-item">Redis</span>
              <span className="stack-item">GraphQL + REST</span>
            </div>
          </div>
          <div className="stack-cat">
            <span className="stack-cat-tag">AI / ML</span>
            <div className="stack-cat-title">Intelligence</div>
            <div className="stack-items">
              <span className="stack-item">OpenAI GPT-4o</span>
              <span className="stack-item">Anthropic Claude</span>
              <span className="stack-item">LangChain / LCEL</span>
              <span className="stack-item">Pinecone / pgvector</span>
              <span className="stack-item">Hugging Face</span>
            </div>
          </div>
          <div className="stack-cat">
            <span className="stack-cat-tag">Infra / DevOps</span>
            <div className="stack-cat-title">Infrastructure</div>
            <div className="stack-items">
              <span className="stack-item">Docker + Kubernetes</span>
              <span className="stack-item">Terraform / IaC</span>
              <span className="stack-item">AWS / GCP / Vercel</span>
              <span className="stack-item">GitHub Actions</span>
              <span className="stack-item">Datadog / Sentry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
