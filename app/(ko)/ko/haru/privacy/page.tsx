import type { Metadata } from 'next';
import { LegalPageView } from '@/components/views/LegalPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

/**
 * ⚠️ The English URL /haru/privacy/ is registered with the Google Play Store
 * and must not move. The English wording is authoritative for both locales.
 */
export const metadata: Metadata = {
  ...pageMetadata('ko', '/haru/privacy/', getContent('ko').legal.haruMeta),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <LegalPageView lang="ko" doc="haru" />;
}
