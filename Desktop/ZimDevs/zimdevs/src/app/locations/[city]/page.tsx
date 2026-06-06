import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllCitySlugs, getCityData } from '@/lib/cities';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) return {};

  const canonicalUrl = `https://zimdevs.co.zw/locations/${data.slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    metadataBase: new URL('https://zimdevs.co.zw'),
    alternates: { canonical: `/locations/${data.slug}` },
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
    other: {
      'geo.region': 'ZW',
      'geo.placename': data.schema.cityName,
    },
  };
}

function buildCitySchema(city: ReturnType<typeof getCityData>) {
  if (!city) return null;

  const pageUrl = `https://zimdevs.co.zw/locations/${city.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zimdevs.co.zw/' },
          { '@type': 'ListItem', position: 2, name: `Web Development ${city.schema.cityName}`, item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: city.metaTitle,
        description: city.metaDescription,
        isPartOf: { '@id': 'https://zimdevs.co.zw/#website' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${pageUrl}#local-service`,
        name: `ZimDevs — Software Development in ${city.schema.cityName}`,
        url: pageUrl,
        telephone: '+263771465624',
        email: 'erickmureruswa@gmail.com',
        priceRange: '$$',
        currenciesAccepted: 'USD, ZWG',
        paymentAccepted: 'EcoCash, Cash, Bank Transfer',
        image: 'https://zimdevs.co.zw/og-default.png',
        provider: { '@id': 'https://zimdevs.co.zw/#organization' },
        areaServed: {
          '@type': 'City',
          name: city.schema.cityName,
          containedInPlace: {
            '@type': 'State',
            name: city.schema.addressRegion,
            containedInPlace: {
              '@type': 'Country',
              name: 'Zimbabwe',
            },
          },
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: city.schema.cityName,
          addressRegion: city.schema.addressRegion,
          addressCountry: 'ZW',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.coordinates.lat,
          longitude: city.coordinates.lng,
        },
        serviceType: [
          'Custom Web Development',
          'AI Integration',
          'API Design & Backend Engineering',
          'Workflow Automation',
        ],
        sameAs: ['https://www.instagram.com/zim_young_devs/'],
      },
    ],
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityData(city);
  if (!data) notFound();

  const schema = buildCitySchema(data);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Nav />

      <main>
        {/* HERO */}
        <section className="city-hero">
          <div className="container">
            <nav className="city-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Web Development {data.name}</span>
            </nav>

            <p className="section-num">Location — {data.region}</p>

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
                See what we build
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="city-section">
          <div className="container city-intro-grid">
            <div>
              <p className="section-num">About this location</p>
            </div>
            <p className="city-intro">{data.intro}</p>
          </div>
        </section>

        {/* WHY ZIMDEVS */}
        <section className="city-section city-why">
          <div className="container">
            <header className="city-section-header">
              <p className="section-num">Why ZimDevs</p>
              <h2 className="city-h2">
                What we bring to {data.name} businesses
              </h2>
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

        {/* INDUSTRIES */}
        <section className="city-section">
          <div className="container">
            <header className="city-section-header">
              <p className="section-num">Industries served</p>
              <h2 className="city-h2">
                Who we work with in {data.name}
              </h2>
            </header>

            <ul className="city-industry-grid" role="list">
              {data.industries.map((industry, i) => (
                <li key={i} className="city-industry-tag">
                  <span className="city-tag-dot" aria-hidden="true" />
                  {industry}
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
                Ready to build in {data.name}?
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
