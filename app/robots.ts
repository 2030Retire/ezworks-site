import type { MetadataRoute } from 'next';
import { getContent } from '@/content';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const { url } = getContent('en').site;
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${url}/sitemap.xml`,
  };
}
