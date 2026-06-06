export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroSub: string;
  intro: string;
  deliverables: { label: string; items: string[] }[];
  process: { step: string; heading: string; body: string }[];
  whyPoints: { heading: string; body: string }[];
  techStack: string[];
  schema: {
    serviceType: string;
    serviceOutput: string;
  };
}

export const SERVICES: Record<string, ServiceData> = {
  'custom-web-development': {
    slug: 'custom-web-development',
    name: 'Custom Web Development',
    tagline: 'Full-stack web applications built from first principles.',
    metaTitle: 'Custom Web Development Services in Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs builds bespoke full-stack web applications for Zimbabwe and global clients. React, Next.js, TypeScript, PostgreSQL — engineered to last. 48h to first deploy.",
    heroLine1: 'Software that fits',
    heroLine2: 'your business',
    heroLine3: 'like it was built for it.',
    heroSub:
      'No templates. No off-the-shelf CMS. Custom-engineered web applications that do exactly what your business needs — and nothing it doesn\'t.',
    intro:
      "Generic software creates generic outcomes. We build custom web applications from the ground up — architected specifically for your workflows, your users, and your scale. Whether you need a customer portal, an internal operations dashboard, a marketplace, or a web platform with complex business logic, we scope it tightly, build it fast, and hand you something that is genuinely yours. First working deploy in 48 hours. Full code ownership at handover.",
    deliverables: [
      {
        label: 'Frontend',
        items: [
          'React / Next.js with App Router',
          'TypeScript throughout',
          'Responsive across all breakpoints',
          'Accessibility (WCAG 2.1 AA)',
          'Performance-optimised (Core Web Vitals)',
        ],
      },
      {
        label: 'Backend',
        items: [
          'REST or GraphQL API',
          'PostgreSQL / MySQL database design',
          'Authentication & authorisation',
          'File storage & media handling',
          'Background jobs & queuing',
        ],
      },
      {
        label: 'Infrastructure',
        items: [
          'CI/CD pipeline (GitHub Actions)',
          'Docker containerisation',
          'Vercel / Railway / VPS deployment',
          'Environment management',
          'Monitoring & error tracking',
        ],
      },
    ],
    process: [
      {
        step: '01',
        heading: 'Discovery & scope',
        body: 'We map your requirements, data model, and user flows in a structured discovery session. Output: a scoped spec you sign off on before we touch code.',
      },
      {
        step: '02',
        heading: 'Architecture & first deploy',
        body: 'We design the data model and system architecture, then ship a working skeleton within 48 hours — real software you can click through, not a wireframe.',
      },
      {
        step: '03',
        heading: 'Sprint delivery',
        body: 'Two-week sprints. Every sprint closes with a review, a deploy to staging, and a short demo. You see progress constantly — no black-box development.',
      },
      {
        step: '04',
        heading: 'Handover & ownership',
        body: 'Full codebase handover with documentation. You own everything: the repo, the infrastructure, the data. No lock-in, no ongoing dependency on us unless you want it.',
      },
    ],
    whyPoints: [
      {
        heading: 'No templates, ever',
        body: 'Every project is architected from scratch for your specific requirements. We do not customise WordPress themes or patch WooCommerce — we build the software your business actually needs.',
      },
      {
        heading: '48-hour first deploy',
        body: 'You see working software within 48 hours of project kick-off. Not a mockup. Not a prototype. A deployed, testable application at a real URL.',
      },
      {
        heading: 'You own everything',
        body: 'Full source code handover at the end of every engagement. Your repo, your infrastructure, your data. Walk away whenever you want — clean.',
      },
      {
        heading: 'Same stack as Stripe, Notion, and Vercel',
        body: 'Next.js, TypeScript, PostgreSQL, Docker, GitHub Actions. The same tooling used by the most reliable software companies in the world — adapted for your scale.',
      },
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Docker',
      'GitHub Actions',
      'Vercel',
      'Tailwind CSS',
      'Zod',
    ],
    schema: {
      serviceType: 'Custom Web Application Development',
      serviceOutput: 'Full-stack web application with source code and deployment infrastructure',
    },
  },

  'ai-integration': {
    slug: 'ai-integration',
    name: 'AI Integration',
    tagline: 'LLM pipelines, RAG, and agents embedded in your actual business stack.',
    metaTitle: 'AI Integration Services in Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs integrates AI into your business systems — LLM pipelines, RAG architectures, vector search, and autonomous agents. Production-ready AI, not demos.",
    heroLine1: 'AI that runs in',
    heroLine2: 'production,',
    heroLine3: 'not just demos.',
    heroSub:
      'We embed large language models, vector search, and autonomous agents into your real business workflows — systems that reduce manual hours and improve decision speed.',
    intro:
      "Most AI projects fail at the handoff from proof-of-concept to production. We skip the demo phase entirely. ZimDevs designs and deploys AI integrations that run inside your real business stack — connected to your data, your workflows, and your users. LLM-powered document processing, RAG-based knowledge retrieval, semantic search across proprietary data, AI-driven customer communication, and autonomous agent pipelines that operate without human intervention. We work with OpenAI, Anthropic Claude, and open-source models depending on what your requirements actually call for.",
    deliverables: [
      {
        label: 'Language models',
        items: [
          'Prompt engineering & system design',
          'OpenAI GPT-4o / Anthropic Claude integration',
          'Fine-tuning on domain-specific data',
          'Structured output extraction',
          'Multi-turn conversation management',
        ],
      },
      {
        label: 'Retrieval & search',
        items: [
          'RAG pipeline design and build',
          'Vector database (Pinecone, pgvector)',
          'Semantic document search',
          'Hybrid keyword + vector retrieval',
          'Knowledge base ingestion pipelines',
        ],
      },
      {
        label: 'Agents & automation',
        items: [
          'Autonomous agent design',
          'Tool-use and function calling',
          'Multi-agent orchestration',
          'Human-in-the-loop review flows',
          'Observability and evaluation harness',
        ],
      },
    ],
    process: [
      {
        step: '01',
        heading: 'Use-case scoping',
        body: 'We identify the highest-value AI applications in your workflows — not what sounds impressive, but what reduces real manual hours and improves real decisions.',
      },
      {
        step: '02',
        heading: 'Data audit & pipeline design',
        body: 'We audit your existing data sources and design the ingestion, embedding, and retrieval architecture before writing any model integration code.',
      },
      {
        step: '03',
        heading: 'Build & evaluate',
        body: 'We build the AI pipeline with evaluation harnesses from day one. Every change is measured against quality baselines — not shipped until it actually performs.',
      },
      {
        step: '04',
        heading: 'Production deploy & monitoring',
        body: 'We deploy with cost tracking, latency monitoring, and fallback paths. AI in production needs observability — we build it in, not on.',
      },
    ],
    whyPoints: [
      {
        heading: 'Production, not demos',
        body: 'We do not build chatbot demos. We build AI pipelines that run in your production environment, connected to your real data, handling real business load.',
      },
      {
        heading: 'Model-agnostic',
        body: 'We work with OpenAI, Anthropic, Mistral, and open-source models. We choose the model that actually fits your requirements — not the one that sounds most impressive.',
      },
      {
        heading: 'Evaluation-first',
        body: 'Every AI system we build has an evaluation harness from the first sprint. You never ship an AI feature without knowing how it actually performs on your data.',
      },
      {
        heading: 'Cost-conscious architecture',
        body: 'We architect for token efficiency and cache aggressively. AI costs compound quickly without discipline — we keep your inference costs rational from the start.',
      },
    ],
    techStack: [
      'OpenAI',
      'Anthropic Claude',
      'LangChain',
      'LlamaIndex',
      'Pinecone',
      'pgvector',
      'Supabase',
      'Python',
      'FastAPI',
      'n8n',
      'TypeScript',
      'Redis',
    ],
    schema: {
      serviceType: 'Artificial Intelligence Integration',
      serviceOutput: 'Production AI pipeline integrated with client business systems and data',
    },
  },

  'api-backend-engineering': {
    slug: 'api-backend-engineering',
    name: 'API & Backend Engineering',
    tagline: 'Reliable, scalable backend systems designed to outlast the next rewrite.',
    metaTitle: 'API Design & Backend Engineering Services in Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs designs and builds REST and GraphQL APIs, database architectures, and backend systems that scale. Engineered for reliability — 48h to first deploy.",
    heroLine1: 'APIs that scale',
    heroLine2: 'from 100 to',
    heroLine3: '10 million requests.',
    heroSub:
      'Backend systems built for long-term reliability. No shortcuts in the data model. No shortcuts in the API design. No shortcuts anywhere.',
    intro:
      "Most backend failures trace back to decisions made in the first two weeks: a poorly normalised data model, an API contract that assumes a single client, a caching strategy bolted on after the first scaling crisis. We prevent those failures by getting the architecture right the first time. ZimDevs designs and builds REST and GraphQL APIs, database schemas, authentication systems, and event-driven backends that are designed to be extended, not rewritten, as your business grows.",
    deliverables: [
      {
        label: 'API design',
        items: [
          'RESTful API design & documentation',
          'GraphQL schema design',
          'OpenAPI / Swagger specs',
          'Versioning strategy',
          'Rate limiting & throttling',
        ],
      },
      {
        label: 'Database',
        items: [
          'PostgreSQL schema design',
          'Query optimisation & indexing',
          'Migration strategy',
          'Replication & backup configuration',
          'ORM setup (Prisma, Drizzle)',
        ],
      },
      {
        label: 'Infrastructure',
        items: [
          'Authentication (JWT, OAuth, sessions)',
          'Background job queuing',
          'Webhook design & delivery',
          'Caching (Redis, CDN)',
          'Observability (logging, tracing, metrics)',
        ],
      },
    ],
    process: [
      {
        step: '01',
        heading: 'Architecture review',
        body: 'We review your existing system (or start fresh) and produce a data model and API contract before writing implementation code. Decisions at this stage are the most expensive to reverse.',
      },
      {
        step: '02',
        heading: 'Core API build',
        body: 'We build the core endpoints, authentication, and database schema. First working API available within 48 hours — documented, tested, and callable by your frontend team.',
      },
      {
        step: '03',
        heading: 'Test coverage',
        body: 'Every endpoint gets unit and integration test coverage before it ships. We target 80%+ coverage as a floor, not a ceiling.',
      },
      {
        step: '04',
        heading: 'Load testing & handover',
        body: 'We load test against your expected traffic before handover. You receive the full codebase, API documentation, and runbook.',
      },
    ],
    whyPoints: [
      {
        heading: 'Data model first',
        body: 'We spend serious time on the data model before writing application code. A good schema prevents years of painful migrations. A bad one causes them.',
      },
      {
        heading: 'Contract-driven development',
        body: 'We define and document the API contract before implementation. Your frontend team can build against it immediately — no waiting for the backend to be "done".',
      },
      {
        heading: '80%+ test coverage',
        body: 'We write tests as we build, not after. Every endpoint is covered by integration tests that run in CI on every commit.',
      },
      {
        heading: 'Built for extension',
        body: 'We design APIs with versioning and extension points built in. You can add new consumers, new endpoints, and new data sources without rewriting what already works.',
      },
    ],
    techStack: [
      'Node.js',
      'Python',
      'FastAPI',
      'Express',
      'Hono',
      'PostgreSQL',
      'Redis',
      'Prisma',
      'Drizzle',
      'Docker',
      'GitHub Actions',
      'Grafana',
    ],
    schema: {
      serviceType: 'API Design and Backend Engineering',
      serviceOutput: 'Production backend API with documentation, tests, and deployment infrastructure',
    },
  },

  'workflow-automation': {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    tagline: 'Eliminate manual processes. Let your tools talk to each other.',
    metaTitle: 'Workflow Automation Services in Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs automates business workflows end-to-end using n8n, Make, custom APIs, and integrations. Replace repetitive manual work with reliable automated processes.",
    heroLine1: 'If humans are',
    heroLine2: 'copying data,',
    heroLine3: 'software should be.',
    heroSub:
      'Every manual step in your workflow is a delay, an error risk, and a cost. We identify the highest-value automation opportunities and build the integrations that make them disappear.',
    intro:
      "Zimbabwean businesses carry significant manual process overhead: data entry between systems that don't talk, approval chains that live in WhatsApp threads, reports that someone compiles in a spreadsheet every Monday. ZimDevs audits your workflows, identifies the highest-ROI automation opportunities, and builds the integrations — using n8n, Make, custom APIs, or a combination — that make those processes run without human intervention. We have automated onboarding flows, invoice generation, inventory sync, lead routing, document processing, and dozens of other repetitive business processes.",
    deliverables: [
      {
        label: 'Integration platforms',
        items: [
          'n8n workflow design and deployment',
          'Make (Integromat) scenario build',
          'Zapier automation setup',
          'Webhook design and delivery',
          'Custom integration middleware',
        ],
      },
      {
        label: 'Business processes',
        items: [
          'CRM and sales pipeline automation',
          'Invoice and payment workflow automation',
          'Document generation and distribution',
          'Lead routing and qualification',
          'Inventory and stock level sync',
        ],
      },
      {
        label: 'Monitoring',
        items: [
          'Error alerting and retry logic',
          'Execution logging and audit trails',
          'Performance dashboards',
          'Failure notification workflows',
          'Data reconciliation checks',
        ],
      },
    ],
    process: [
      {
        step: '01',
        heading: 'Workflow audit',
        body: 'We map your current processes, identify manual steps, and estimate the time cost per process. You see exactly where automation delivers the highest return.',
      },
      {
        step: '02',
        heading: 'Prioritised automation plan',
        body: 'We rank automation candidates by implementation effort vs. time saved. You choose where to start — we execute in that order.',
      },
      {
        step: '03',
        heading: 'Build and test',
        body: 'We build each automation with real data from your systems. Every workflow is tested against edge cases before going live — failed inputs, missing data, API timeouts.',
      },
      {
        step: '04',
        heading: 'Handover and monitoring',
        body: 'We document every workflow and set up monitoring that alerts you when something breaks. You have full visibility into what is running and how.',
      },
    ],
    whyPoints: [
      {
        heading: 'We start with the audit',
        body: 'We do not start building until we understand your workflows. The automation plan comes from a structured analysis of where your team actually spends time — not from what tools we prefer.',
      },
      {
        heading: 'Built for failure',
        body: 'Every automation we build has explicit error handling, retry logic, and alerting. When an API goes down or a record is malformed, the system tells you — it does not silently fail.',
      },
      {
        heading: 'Platform-agnostic',
        body: 'We use n8n, Make, Zapier, or custom code depending on what your requirements call for. We are not a reseller of any platform — we pick what is right for your situation.',
      },
      {
        heading: 'You own the workflows',
        body: 'Full documentation and handover at the end of every engagement. Your team can modify, extend, and troubleshoot every workflow we build — no black boxes.',
      },
    ],
    techStack: [
      'n8n',
      'Make',
      'Zapier',
      'Node.js',
      'Python',
      'PostgreSQL',
      'Redis',
      'Webhook relay',
      'Slack',
      'WhatsApp Business API',
      'EcoCash API',
      'REST / GraphQL',
    ],
    schema: {
      serviceType: 'Business Process Automation',
      serviceOutput: 'Automated workflow integrations with monitoring, documentation, and error handling',
    },
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    name: 'E-commerce Development',
    tagline: 'Online stores built for Zimbabwe\'s payment landscape and your customers.',
    metaTitle: 'E-commerce Development Services in Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs builds custom e-commerce platforms for Zimbabwe — EcoCash, Paynow, and USD payment integration, inventory management, and high-conversion storefronts.",
    heroLine1: 'Your online store,',
    heroLine2: 'built for how',
    heroLine3: 'Zimbabwe buys.',
    heroSub:
      'Custom e-commerce platforms with EcoCash, Paynow, and international payment support — designed to convert Zimbabwean customers, not hypothetical Western ones.',
    intro:
      "E-commerce in Zimbabwe has specific requirements that off-the-shelf platforms handle poorly: EcoCash and Paynow integration, ZiG and USD dual pricing, mobile-first experiences for Econet and NetOne users, and inventory systems designed for the realities of local supply chains. ZimDevs builds custom e-commerce platforms — or deeply customises existing ones where that genuinely makes sense — that are architected around how your customers actually shop. Performant on low-bandwidth connections, payment-ready from day one, and built to convert.",
    deliverables: [
      {
        label: 'Storefront',
        items: [
          'Custom product catalogue and search',
          'Mobile-first, low-bandwidth optimised',
          'Wishlist, cart, and checkout flows',
          'Product variant and SKU management',
          'Promotional and discount engine',
        ],
      },
      {
        label: 'Payments',
        items: [
          'EcoCash / OneMoney integration',
          'Paynow Zimbabwe integration',
          'Stripe and international card processing',
          'USD and ZiG dual-currency pricing',
          'Automated invoice generation',
        ],
      },
      {
        label: 'Operations',
        items: [
          'Inventory and stock management',
          'Order management and fulfilment tracking',
          'Customer account and order history',
          'Admin dashboard with sales analytics',
          'Email and WhatsApp order notifications',
        ],
      },
    ],
    process: [
      {
        step: '01',
        heading: 'Product and payment scoping',
        body: 'We scope your catalogue structure, payment providers, and fulfilment flow. Zimbabwe-specific requirements — EcoCash, dual currency, mobile bandwidth — are addressed in the spec before we write a line of code.',
      },
      {
        step: '02',
        heading: 'Storefront and checkout build',
        body: 'We build the storefront and payment flows first — these are the highest-stakes parts of any e-commerce build. First working checkout within 48 hours.',
      },
      {
        step: '03',
        heading: 'Inventory and admin',
        body: 'We build the inventory management, order tracking, and admin dashboard. Your team can manage the store from day one without touching code.',
      },
      {
        step: '04',
        heading: 'Performance and launch',
        body: 'We optimise for Core Web Vitals and low-bandwidth performance, run the full checkout flow against real payment APIs, and deploy to production.',
      },
    ],
    whyPoints: [
      {
        heading: 'Zimbabwe payment integration',
        body: 'EcoCash and Paynow are built into our standard e-commerce stack. We have implemented these integrations multiple times — they are not a project risk for us.',
      },
      {
        heading: 'Mobile-first and bandwidth-aware',
        body: 'Most Zimbabwean e-commerce traffic comes from mobile on cellular data. We optimise for this by default — lazy loading, compressed assets, and minimal JavaScript on the critical path.',
      },
      {
        heading: 'Dual-currency ready',
        body: 'We build price display, cart totals, and payment flows that handle ZiG and USD simultaneously — because that is the reality of selling in Zimbabwe right now.',
      },
      {
        heading: 'You run it yourself',
        body: 'The admin dashboard we build lets your team manage products, process orders, and update content without needing a developer. Full handover with team training included.',
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'EcoCash API',
      'Paynow',
      'Stripe',
      'Redis',
      'Cloudinary',
      'Resend',
      'Vercel',
    ],
    schema: {
      serviceType: 'E-commerce Development',
      serviceOutput: 'Custom e-commerce platform with payment integration, inventory management, and admin dashboard',
    },
  },
};

export function getServiceData(slug: string): ServiceData | null {
  return SERVICES[slug] ?? null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES);
}
