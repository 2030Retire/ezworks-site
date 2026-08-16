import type { MetadataRoute } from 'next';
import { getContent } from '@/content';
import { locales } from '@/content/types';
import { localizePath } from '@/lib/routes';

/**
 * All eight published routes, in both locales — 16 URLs. Static export writes
 * this to /sitemap.xml.
 *
 * Each entry carries `alternates.languages` so search engines see the pair
 * rather than two unrelated pages.
 */
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
  const { url } = getContent('en').site;

  return routes.flatMap(({ path, priority }) =>
    locales.map((lang) => ({
      url: `${url}${localizePath(lang, path)}`,
      priority,
      changeFrequency: 'monthly' as const,
      alternates: {
        languages: {
          en: `${url}${path}`,
          ko: `${url}${localizePath('ko', path)}`,
          'x-default': `${url}${path}`,
        },
      },
    })),
  );
}
