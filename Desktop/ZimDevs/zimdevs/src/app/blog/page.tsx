import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostMetas, formatDate } from '@/lib/blog';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog — Zimbabwe Software Development Insights | ZimDevs',
  description:
    'Practical guides on software development, AI integration, pricing, and building tech for the Zimbabwean market. Written by the ZimDevs team.',
  metadataBase: new URL('https://zimdevs.co.zw'),
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Zimbabwe Software Development Insights | ZimDevs',
    description:
      'Practical guides on software development, AI integration, pricing, and building tech for the Zimbabwean market.',
    url: 'https://zimdevs.co.zw/blog',
    siteName: 'ZimDevs',
    type: 'website',
  },
};

const CATEGORIES = ['All', 'Pricing', 'Strategy', 'Technical', 'AI'];

export default function BlogIndexPage() {
  const posts = getAllPostMetas();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <section className="blog-index-hero">
          <div className="container">
            <nav className="city-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Blog</span>
            </nav>
            <p className="section-num">Studio writing</p>
            <h1 className="blog-index-h1">
              <span>Insights from</span>
              <span className="city-h1-accent">the build.</span>
            </h1>
            <p className="blog-index-sub">
              Practical writing on software development, AI, pricing, and building tech for the Zimbabwean market.
            </p>
          </div>
        </section>

        {/* FEATURED POST */}
        {featured && (
          <section className="blog-featured-section">
            <div className="container">
              <p className="section-num">Featured</p>
              <Link href={`/blog/${featured.slug}`} className="blog-featured-card">
                <div className="blog-featured-meta">
                  <span className="blog-cat-chip">{featured.category}</span>
                  <span className="blog-meta-sep" aria-hidden="true">·</span>
                  <span className="blog-meta-text">{featured.readTime}</span>
                  <span className="blog-meta-sep" aria-hidden="true">·</span>
                  <time className="blog-meta-text" dateTime={featured.date}>{formatDate(featured.date)}</time>
                </div>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-desc">{featured.description}</p>
                <span className="blog-read-link">Read article →</span>
              </Link>
            </div>
          </section>
        )}

        {/* POST GRID */}
        <section className="blog-grid-section">
          <div className="container">
            <p className="section-num">All posts</p>

            <ul className="blog-grid" role="list">
              {rest.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="blog-card">
                    <div className="blog-card-meta">
                      <span className="blog-cat-chip">{post.category}</span>
                      <span className="blog-meta-sep" aria-hidden="true">·</span>
                      <span className="blog-meta-text">{post.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-desc">{post.description}</p>
                    <div className="blog-card-footer">
                      <time className="blog-meta-text" dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="blog-read-link">Read →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="city-cta-section">
          <div className="container city-cta-inner">
            <div>
              <h2 className="city-cta-h2">Ready to build something?</h2>
              <p className="city-cta-sub">48 hours to first deploy. No vendor lock-in.</p>
            </div>
            <a href="/#contact" className="city-btn-primary">Get in touch</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
