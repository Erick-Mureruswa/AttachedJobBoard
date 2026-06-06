export interface CityData {
  slug: string;
  name: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroSub: string;
  intro: string;
  whyPoints: { heading: string; body: string }[];
  industries: string[];
  coordinates: { lat: number; lng: number };
  schema: {
    cityName: string;
    addressRegion: string;
  };
}

export const CITIES: Record<string, CityData> = {
  'web-development-harare': {
    slug: 'web-development-harare',
    name: 'Harare',
    region: 'Harare Metropolitan Province',
    metaTitle: 'Software & Web Development in Harare, Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs builds custom web apps, AI integrations, and workflow automation for Harare-based businesses. Zimbabwe's tech capital deserves world-class engineering — 48h to first deploy.",
    heroLine1: 'Building the tech',
    heroLine2: 'stack Harare',
    heroLine3: 'actually needs.',
    heroSub:
      "Zimbabwe's capital is where deals get done. We build the software that powers them — custom, fast, and built to last.",
    intro:
      "Harare is Zimbabwe's commercial engine. Fintech startups, corporate head offices, government agencies, and growing SMEs all operate here — and all of them need software that keeps pace. ZimDevs is a Zimbabwe-based studio that builds custom web applications, AI integrations, backend APIs, and workflow automations for Harare clients. We average 48 hours to first working deploy and have a 100% on-deadline track record across every engagement.",
    whyPoints: [
      {
        heading: 'No timezone friction',
        body: 'Same country, same time zone. When you need a call at 8 AM CAT or a fix pushed at 6 PM, we are available. No async lag with developers 8 hours away.',
      },
      {
        heading: 'Harare market fluency',
        body: 'We understand EcoCash flows, ZiG pricing, mobile-first user behaviour on Econet and NetOne, and the compliance landscape for Zimbabwean businesses. We build for your actual users, not a hypothetical Western market.',
      },
      {
        heading: 'Enterprise-grade delivery',
        body: 'Our tech stack is the same one used by Stripe, Notion, and Vercel: Next.js, TypeScript, PostgreSQL, Docker, and GitHub Actions CI/CD. You get global-standard engineering without paying London rates.',
      },
      {
        heading: '48-hour first deploy',
        body: "Every engagement starts with a working deploy within 48 hours. You see real, testable software before any significant spend has landed — not a wireframe or a deck.",
      },
    ],
    industries: [
      'Fintech & Banking',
      'Insurance & Risk',
      'Retail & E-commerce',
      'Government & Parastatal',
      'Healthcare & MedTech',
      'Logistics & Supply Chain',
      'Media & Publishing',
      'Education & EdTech',
    ],
    coordinates: { lat: -17.8252, lng: 31.0335 },
    schema: { cityName: 'Harare', addressRegion: 'Harare Metropolitan Province' },
  },

  'web-development-bulawayo': {
    slug: 'web-development-bulawayo',
    name: 'Bulawayo',
    region: "Matabeleland North/South",
    metaTitle: 'Software & Web Development in Bulawayo, Zimbabwe | ZimDevs',
    metaDescription:
      'ZimDevs delivers custom web apps, APIs, and automation for Bulawayo businesses. Industrial-strength software for Zimbabwe\'s second city — 48h to first deploy, 100% on deadline.',
    heroLine1: "Software built for",
    heroLine2: "Bulawayo's",
    heroLine3: 'industrial pace.',
    heroSub:
      "Zimbabwe's City of Kings runs on manufacturing, mining, and trade. We build the systems that keep those operations moving.",
    intro:
      "Bulawayo is Zimbabwe's second city and its industrial heartland. Home to manufacturing plants, mining operations, logistics hubs, and a growing base of service businesses, Bulawayo needs software that is reliable, robust, and built for operational complexity. ZimDevs designs and delivers custom web applications, backend APIs, workflow automations, and AI integrations for Bulawayo-based organisations — with a first deploy in 48 hours and a 100% on-deadline track record.",
    whyPoints: [
      {
        heading: 'Built for operational complexity',
        body: 'Manufacturing and logistics businesses run on tight margins and tighter schedules. We build systems — inventory management, dispatch tracking, supplier portals — that match the complexity of your operation without the complexity of maintaining them.',
      },
      {
        heading: 'Local understanding, global stack',
        body: "We understand how Bulawayo businesses actually move: Zimbabwe dollar pricing, cross-border trade flows with South Africa and Botswana, and the infrastructure constraints that a Harare-centric dev shop doesn't account for.",
      },
      {
        heading: 'No lock-in, ever',
        body: 'You own the codebase, the infrastructure, and the data. Full handover at the end of every engagement. If you outgrow us, you take everything with you — clean.',
      },
      {
        heading: 'Automation that replaces manual work',
        body: 'Bulawayo businesses carry significant manual process overhead — order entry, invoicing, stock reconciliation. We automate those workflows end-to-end using n8n, custom APIs, and database integrations.',
      },
    ],
    industries: [
      'Manufacturing & Industry',
      'Mining & Resources',
      'Logistics & Transport',
      'Cross-border Trade',
      'Retail & Distribution',
      'Agriculture & Agribusiness',
      'Construction & Real Estate',
      'Hospitality & Tourism',
    ],
    coordinates: { lat: -20.1500, lng: 28.5833 },
    schema: { cityName: 'Bulawayo', addressRegion: 'Bulawayo Province' },
  },

  'web-development-mutare': {
    slug: 'web-development-mutare',
    name: 'Mutare',
    region: 'Manicaland Province',
    metaTitle: 'Software & Web Development in Mutare, Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs builds custom web apps, APIs, and automation for Mutare businesses. Eastern Zimbabwe's gateway city — cross-border ready software, 48h to first deploy.",
    heroLine1: 'Eastern Zimbabwe.',
    heroLine2: 'World-class',
    heroLine3: 'software.',
    heroSub:
      "At the gateway between Zimbabwe and Mozambique, Mutare businesses move fast. We build the digital infrastructure to keep up.",
    intro:
      "Mutare is Zimbabwe's eastern gateway — a city shaped by cross-border trade, mining, tourism, and a growing tech-aware SME base. Whether your business runs cross-border supply chains into Mozambique, services the timber and mining sectors, or operates in hospitality and retail, ZimDevs builds the custom software, APIs, and automation that makes your operations scale. First deploy in 48 hours. 100% on deadline. Zero vendor lock-in.",
    whyPoints: [
      {
        heading: 'Cross-border ready',
        body: 'Mutare businesses run across the Mozambican border daily. We build systems that handle multi-currency flows, cross-border compliance, and international API integrations that a purely domestic dev shop cannot support.',
      },
      {
        heading: 'Sector depth',
        body: 'We have built for mining operations, timber processors, hospitality groups, and cross-border traders. We understand the document flows, approval chains, and operational cadences of Manicaland businesses.',
      },
      {
        heading: 'Remote-first delivery',
        body: 'Our team is distributed across Zimbabwe. We have been delivering complex projects remotely since day one — Mutare clients get the same daily communication and sprint reviews as our Harare clients.',
      },
      {
        heading: 'AI that works in your context',
        body: 'We integrate large language models, vector search, and automation pipelines into Mutare business workflows — not as demos, but as production systems that reduce manual hours and improve decision speed.',
      },
    ],
    industries: [
      'Cross-border Trade',
      'Mining & Resources',
      'Timber & Forestry',
      'Hospitality & Tourism',
      'Agriculture & Agribusiness',
      'Transport & Logistics',
      'Retail & Wholesale',
      'NGO & Development Sector',
    ],
    coordinates: { lat: -18.9707, lng: 32.6709 },
    schema: { cityName: 'Mutare', addressRegion: 'Manicaland Province' },
  },

  'web-development-gweru': {
    slug: 'web-development-gweru',
    name: 'Gweru',
    region: 'Midlands Province',
    metaTitle: 'Software & Web Development in Gweru, Zimbabwe | ZimDevs',
    metaDescription:
      "ZimDevs builds custom web apps, APIs, and automation for Gweru businesses. Zimbabwe's midlands hub — practical software that works, 48h to first deploy.",
    heroLine1: 'Zimbabwe midlands.',
    heroLine2: 'Software that',
    heroLine3: 'gets the job done.',
    heroSub:
      "Gweru sits at the centre of Zimbabwe. We build the systems that connect businesses in the midlands to the rest of the country.",
    intro:
      "Gweru is the capital of the Midlands Province and one of Zimbabwe's most strategically located cities — a natural crossroads for manufacturing, agriculture, trade, and service businesses operating between Harare and Bulawayo. ZimDevs builds custom web applications, workflow automation, and backend APIs for Gweru-based businesses that are ready to systemise their operations and compete at scale. 48 hours to first deploy, no lock-in, 100% on deadline.",
    whyPoints: [
      {
        heading: 'Central Zimbabwe, central advantage',
        body: 'Businesses based in Gweru service clients across the country. We build platforms, portals, and APIs that work reliably across Zimbabwe\'s connectivity landscape — optimised for mobile, performant on constrained networks.',
      },
      {
        heading: 'Practical software for real operations',
        body: 'Gweru businesses are not looking for flashy demos. They need stock control that works, invoicing that runs itself, and customer portals that reduce phone calls. We build those systems — scoped tightly, delivered quickly.',
      },
      {
        heading: 'Mid-market pricing',
        body: 'We price for the Zimbabwean market. You get the same technical quality as an engagement with a Johannesburg or Nairobi agency, at a fraction of the cost — because our team and cost base are both local.',
      },
      {
        heading: 'Automation first',
        body: 'Most Gweru businesses have significant manual process overhead. We audit your workflows, identify the highest-value automation opportunities, and build the integrations that eliminate repetitive work and free up your team.',
      },
    ],
    industries: [
      'Agriculture & Agribusiness',
      'Manufacturing & Industry',
      'Transport & Logistics',
      'Retail & Distribution',
      'Education & Schools',
      'Healthcare & Clinics',
      'Construction & Real Estate',
      'Service Businesses',
    ],
    coordinates: { lat: -19.4500, lng: 29.8167 },
    schema: { cityName: 'Gweru', addressRegion: 'Midlands Province' },
  },

  'web-development-victoria-falls': {
    slug: 'web-development-victoria-falls',
    name: 'Victoria Falls',
    region: 'Matabeleland North Province',
    metaTitle: 'Software & Web Development in Victoria Falls, Zimbabwe | ZimDevs',
    metaDescription:
      'ZimDevs builds booking platforms, hospitality tech, and digital experiences for Victoria Falls tourism businesses. Custom software for Zimbabwe\'s premier tourism hub — 48h to first deploy.',
    heroLine1: 'Victoria Falls.',
    heroLine2: 'Digital experiences',
    heroLine3: 'as big as the view.',
    heroSub:
      "One of Africa's great tourism destinations deserves tech that matches its scale. We build booking platforms, AI integrations, and digital infrastructure for Victoria Falls businesses.",
    intro:
      "Victoria Falls is one of Africa's most recognised destinations — and the businesses that operate here compete against the best hospitality and tourism operators on the continent. ZimDevs builds the digital infrastructure that helps Victoria Falls lodges, tour operators, activity companies, and hospitality groups compete and convert: booking systems, AI-powered guest communication, dynamic pricing engines, and seamless payment integrations. 48 hours to first deploy. 100% on deadline.",
    whyPoints: [
      {
        heading: 'Tourism-specific tech',
        body: 'We have built booking engines, availability calendars, dynamic pricing systems, and guest communication platforms. We understand the operational complexity of tourism businesses — seasonal demand, multi-channel distribution, and high conversion pressure.',
      },
      {
        heading: 'Multi-currency, multi-market',
        body: 'Victoria Falls businesses transact in USD, ZiG, ZAR, and multiple other currencies. We build payment and pricing systems that handle currency complexity cleanly, including integrations with Stripe, PayNow, Paynow Zimbabwe, and regional payment rails.',
      },
      {
        heading: 'AI for guest experience',
        body: 'We integrate AI chatbots, automated review response systems, and personalisation engines that run 24/7 — converting enquiries into bookings and keeping guests engaged without adding headcount.',
      },
      {
        heading: 'Speed that matches demand peaks',
        body: 'Tourism traffic spikes sharply around school holidays, Vic Falls Marathon, and international events. We architect systems that handle demand spikes without going down — load-tested before every peak season.',
      },
    ],
    industries: [
      'Lodges & Accommodation',
      'Tour Operators',
      'Activity & Adventure',
      'Safari & Wildlife',
      'Restaurant & Food & Beverage',
      'Transport & Transfers',
      'Retail & Curios',
      'Event Management',
    ],
    coordinates: { lat: -17.9243, lng: 25.8572 },
    schema: { cityName: 'Victoria Falls', addressRegion: 'Matabeleland North Province' },
  },
};

export function getCityData(slug: string): CityData | null {
  return CITIES[slug] ?? null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(CITIES);
}
