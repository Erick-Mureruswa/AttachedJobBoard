export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://zimdevs.co.zw/#organization',
      name: 'ZimDevs',
      url: 'https://zimdevs.co.zw',
      description:
        'Zimbabwe-based software development studio specialising in custom web applications, AI integrations, API design, and workflow automation.',
      foundingLocation: { '@type': 'Place', name: 'Zimbabwe', addressCountry: 'ZW' },
      areaServed: 'Worldwide',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+263771465624',
        contactType: 'sales',
        email: 'erickmureruswa@gmail.com',
        availableLanguage: 'English',
      },
      sameAs: ['https://www.instagram.com/zim_young_devs/'],
      knowsAbout: [
        'Web Development',
        'AI Integration',
        'API Design',
        'Workflow Automation',
        'Software Engineering',
        'Next.js',
        'React',
        'Node.js',
        'Python',
        'PostgreSQL',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://zimdevs.co.zw/#website',
      url: 'https://zimdevs.co.zw',
      name: 'ZimDevs',
      publisher: { '@id': 'https://zimdevs.co.zw/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://zimdevs.co.zw/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://zimdevs.co.zw/#webpage',
      url: 'https://zimdevs.co.zw',
      name: 'ZimDevs — Software Development Company in Zimbabwe',
      description:
        'ZimDevs builds custom web applications, AI integrations, APIs, and workflow automations from Zimbabwe — 48 hours to first deploy, 100% on deadline.',
      isPartOf: { '@id': 'https://zimdevs.co.zw/#website' },
      about: { '@id': 'https://zimdevs.co.zw/#organization' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zimdevs.co.zw/' },
        ],
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://zimdevs.co.zw/#service',
      name: 'ZimDevs — Software Development Services',
      provider: { '@id': 'https://zimdevs.co.zw/#organization' },
      areaServed: 'Worldwide',
      serviceType: ['Custom Web Development', 'AI Integrations', 'API Design & Backend', 'Workflow Automation'],
      offers: [
        {
          '@type': 'Offer',
          name: 'Custom Web Development',
          description:
            'Full-stack web applications engineered from first principles using Next.js, React, Node.js, and PostgreSQL — no templates, no shortcuts.',
        },
        {
          '@type': 'Offer',
          name: 'AI Integrations',
          description:
            'LLM pipelines, vector search, RAG architectures, and autonomous agents integrated into your existing business stack.',
        },
        {
          '@type': 'Offer',
          name: 'API Design & Backend',
          description:
            'RESTful and GraphQL APIs built for long-term reliability, scaling from 100 to 10M requests without a rewrite.',
        },
        {
          '@type': 'Offer',
          name: 'Workflow Automation',
          description:
            'End-to-end workflow automation using n8n, Make, Zapier, and custom integrations — making your tools talk to each other.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How fast can ZimDevs deliver a project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZimDevs averages 48 hours to first deploy. We work in two-week sprints and deliver working software — not mockups — at the end of every sprint.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does ZimDevs offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZimDevs offers custom web development, AI integrations (LLM pipelines, RAG, vector search), API design and backend engineering, and workflow automation using n8n, Make, Zapier, and custom solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is ZimDevs based in Zimbabwe?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ZimDevs is a Zimbabwe-based software development studio delivering world-class engineering. We serve clients globally with no vendor lock-in.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies does ZimDevs use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ZimDevs works across the full stack: React, Next.js, TypeScript, Node.js, Python/FastAPI, PostgreSQL, Redis, GraphQL, Docker, Kubernetes, Terraform, OpenAI, Anthropic Claude, LangChain, Pinecone, and more.',
          },
        },
      ],
    },
  ],
};
