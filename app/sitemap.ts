import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/** All eight published routes. Static export writes this to /sitemap.xml. */
const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1 },
  { path: '/services/', priority: 0.9 },
  { path: '/products/', priority: 0.8 },
  { path: '/haru/', priority: 0.8 },
  { path: '/about/', priority: 0.6 },
  { path: '/contact/', priority: 0.7 },
  { path: '/privacy/', priority: 0.3 },
  { path: '/haru/privacy/', priority: 0.3 },
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    priority,
    changeFrequency: 'monthly',
  }));
}
