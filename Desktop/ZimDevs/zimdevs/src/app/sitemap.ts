import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://zimdevs.co.zw/',
      lastModified: new Date('2026-06-06'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
