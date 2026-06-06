import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPostSlugs, getPost, formatDate } from '@/lib/blog';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const canonicalUrl = `https://zimdevs.co.zw/blog/${post.slug}`;

  return {
    title: `${post.title} | ZimDevs Blog`,
    description: post.description,
    metadataBase: new URL('https://zimdevs.co.zw'),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: 'ZimDevs',
      type: 'article',
      publishedTime: post.date,
      authors: ['ZimDevs'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function buildArticleSchema(post: Awaited<ReturnType<typeof getPost>>) {
  if (!post) return null;

  const pageUrl = `https://zimdevs.co.zw/blog/${post.slug}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zimdevs.co.zw/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://zimdevs.co.zw/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
        ],
      },
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        url: pageUrl,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Organization',
          '@id': 'https://zimdevs.co.zw/#organization',
          name: 'ZimDevs',
          url: 'https://zimdevs.co.zw',
        },
        publisher: { '@id': 'https://zimdevs.co.zw/#organization' },
        isPartOf: { '@id': 'https://zimdevs.co.zw/#website' },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        articleSection: post.category,
        inLanguage: 'en',
      },
    ],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const schema = buildArticleSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Nav />

      <main>
        {/* ARTICLE HEADER */}
        <header className="blog-post-header">
          <div className="container">
            <nav className="city-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true"> / </span>
              <span>{post.category}</span>
            </nav>

            <div className="blog-post-meta">
              <span className="blog-cat-chip">{post.category}</span>
              <span className="blog-meta-sep" aria-hidden="true">·</span>
              <span className="blog-meta-text">{post.readTime}</span>
              <span className="blog-meta-sep" aria-hidden="true">·</span>
              <time className="blog-meta-text" dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-desc">{post.description}</p>

            <div className="blog-post-byline">
              <span className="blog-byline-dot" aria-hidden="true" />
              <span className="blog-meta-text">ZimDevs Studio</span>
            </div>
          </div>
        </header>

        {/* ARTICLE BODY */}
        <article className="blog-post-body">
          <div className="container">
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* CTA */}
        <section className="blog-post-cta">
          <div className="container blog-post-cta-inner">
            <div>
              <p className="section-num">Work with us</p>
              <h2 className="blog-cta-h2">
                Ready to build something?
              </h2>
              <p className="city-hero-sub" style={{ marginBottom: 0 }}>
                48 hours to first deploy. 100% on deadline. No vendor lock-in.
              </p>
            </div>
            <a href="/#contact" className="city-btn-primary">Get in touch</a>
          </div>
        </section>

        {/* BACK TO BLOG */}
        <div className="container blog-back-link-wrap">
          <Link href="/blog" className="blog-back-link">
            ← All posts
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
