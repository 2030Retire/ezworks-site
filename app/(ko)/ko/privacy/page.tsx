import type { Metadata } from 'next';
import { LegalPageView } from '@/components/views/LegalPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(
  'ko',
  '/privacy/',
  getContent('ko').legal.websiteMeta,
);

export default function Page() {
  return <LegalPageView lang="ko" doc="website" />;
}
