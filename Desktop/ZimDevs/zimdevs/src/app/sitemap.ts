import type { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/cities';
import { getAllServiceSlugs } from '@/lib/services';
import { getAllPostSlugs } from '@/lib/blog';

const BASE_URL = 'https://zimdevs.co.zw';
const LAST_MODIFIED = new Date('2026-06-06');

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'never',
    priority: 0.7,
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    ...servicePages,
    ...cityPages,
    ...blogPosts,
  ];
}
