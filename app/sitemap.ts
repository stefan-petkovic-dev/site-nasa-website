import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://your-domain.com';
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/privacy/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/sitemap-page/`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
  ];
}
