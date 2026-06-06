import type { MetadataRoute } from 'next';
import { getAllCitySlugs } from '@/lib/cities';

const BASE_URL = 'https://zimdevs.co.zw';
const LAST_MODIFIED = new Date('2026-06-06');

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...cityPages,
  ];
}
