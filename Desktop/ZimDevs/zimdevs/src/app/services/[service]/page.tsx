import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllServiceSlugs, getServiceData } from '@/lib/services';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const data = getServiceData(service);
  if (!data) return {};

  const canonicalUrl = `https://zimdevs.co.zw/services/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    metadataBase: new URL('https://zimdevs.co.zw'),
    alternates: { canonical: `/services/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonicalUrl,
      siteName: 'ZimDevs',
      locale: 'en_ZW',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}

function buildServiceSchema(data: ReturnType<typeof getServiceData>) {
  if (!data) return null;

  const pageUrl = `https://zimdevs.co.zw/services/${data.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zimdevs.co.zw/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://zimdevs.co.zw/#services' },
          { '@type': 'ListItem', position: 3, name: data.name, item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: data.metaTitle,
        description: data.metaDescription,
        isPartOf: { '@id': 'https://zimdevs.co.zw/#website' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: data.name,
        description: data.intro,
        url: pageUrl,
        serviceType: data.schema.serviceType,
        serviceOutput: data.schema.serviceOutput,
        provider: { '@id': 'https://zimdevs.co.zw/#organization' },
        areaServed: [
          { '@type': 'Country', name: 'Zimbabwe' },
          { '@type': 'Country', name: 'Worldwide' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${data.name} Deliverables`,
          itemListElement: data.deliverables.flatMap((group) =>
            group.items.map((item) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: item },
            })),
          ),
        },
      },
    ],
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const data = getServiceData(service);
  if (!data) notFound();

  const schema = buildServiceSchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Nav />

      <main>
        {/* HERO */}
        <section className="svc-page-hero">
          <div className="container">
            <nav className="city-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/#services">Services</Link>
              <span aria-hidden="true"> / </span>
              <span>{data.name}</span>
            </nav>

            <p className="section-num">Service</p>

            <h1 className="city-h1">
              <span>{data.heroLine1}</span>
              <span className="city-h1-accent">{data.heroLine2}</span>
              <span>{data.heroLine3}</span>
            </h1>

            <p className="city-hero-sub">{data.heroSub}</p>

            <div className="city-hero-actions">
              <a href="/#contact" className="city-btn-primary">
                Start a project
              </a>
              <a href="/#services" className="city-btn-ghost">
                All services
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="city-section">
          <div className="container city-intro-grid">
            <div>
              <p className="section-num">Overview</p>
            </div>
            <p className="city-intro">{data.intro}</p>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="city-section svc-page-deliverables">
          <div className="container">
            <header className="city-section-header">
              <p className="section-num">What you get</p>
              <h2 className="city-h2">Deliverables</h2>
            </header>

            <div className="svc-deliv-grid">
              {data.deliverables.map((group, i) => (
                <div key={i} className="svc-deliv-col">
                  <p className="svc-deliv-label">{group.label}</p>
                  <ul className="svc-deliv-list" role="list">
                    {group.items.map((item, j) => (
                      <li key={j} className="svc-deliv-item">
                        <span className="svc-deliv-arrow" aria-hidden="true">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="city-section city-why svc-page-process">
          <div className="container">
            <header className="city-section-header">
              <p className="section-num">How we work</p>
              <h2 className="city-h2">The process</h2>
            </header>

            <ol className="svc-process-list" role="list">
              {data.process.map((step, i) => (
                <li key={i} className="svc-process-step">
                  <span className="city-card-num">{step.step}</span>
                  <h3 className="city-card-heading">{step.heading}</h3>
                  <p className="city-card-body">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY ZIMDEVS */}
        <section className="city-section">
          <div className="container">
            <header className="city-section-header">
              <p className="section-num">Why ZimDevs</p>
              <h2 className="city-h2">What sets us apart</h2>
            </header>

            <ul className="city-why-grid" role="list">
              {data.whyPoints.map((point, i) => (
                <li key={i} className="city-why-card">
                  <span className="city-card-num">0{i + 1}</span>
                  <h3 className="city-card-heading">{point.heading}</h3>
                  <p className="city-card-body">{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="city-section">
          <div className="container">
            <header className="city-section-header">
              <p className="section-num">Technology</p>
              <h2 className="city-h2">The stack</h2>
            </header>

            <ul className="svc-tech-grid" role="list">
              {data.techStack.map((tech, i) => (
                <li key={i} className="svc-tech-tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="city-cta-section">
          <div className="container city-cta-inner">
            <div>
              <h2 className="city-cta-h2">
                Ready to get started?
              </h2>
              <p className="city-cta-sub">
                48 hours to first deploy. 100% on deadline. No vendor lock-in.
              </p>
            </div>
            <div className="city-cta-actions">
              <a href="/#contact" className="city-btn-primary">
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
