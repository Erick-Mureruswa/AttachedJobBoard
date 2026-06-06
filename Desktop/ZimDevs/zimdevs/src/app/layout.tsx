import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteSchema } from '@/lib/schema';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZimDevs — Software Development Company in Zimbabwe | Custom Web, AI & Automation',
  description:
    "ZimDevs is Zimbabwe's leading software development studio. We build custom web apps, AI integrations, APIs, and workflow automations — 48h to first deploy, 100% on deadline.",
  metadataBase: new URL('https://zimdevs.co.zw'),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'ZimDevs' }],
  keywords: [
    'software development Zimbabwe',
    'web development Zimbabwe',
    'AI integration Zimbabwe',
    'custom software Zimbabwe',
    'API development Harare',
    'workflow automation Zimbabwe',
    'Next.js developer Zimbabwe',
    'React developer Zimbabwe',
  ],
  openGraph: {
    type: 'website',
    url: 'https://zimdevs.co.zw/',
    siteName: 'ZimDevs',
    locale: 'en_ZW',
    title: "ZimDevs — Zimbabwe's Software Development Studio",
    description:
      'Custom web apps, AI integrations, APIs, and workflow automation built from first principles. Zimbabwe-based, world-class delivery — 48h to first deploy.',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ZimDevs — Zimbabwe's Software Development Studio",
    description:
      'Custom software. AI-native automations. Engineered from first principles. Delivered on schedule. 48h to first deploy.',
  },
  other: {
    'geo.region': 'ZW',
    'geo.placename': 'Zimbabwe',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
