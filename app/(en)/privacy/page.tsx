import type { Metadata } from 'next';
import { LegalPageView } from '@/components/views/LegalPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(
  'en',
  '/privacy/',
  getContent('en').legal.websiteMeta,
);

export default function Page() {
  return <LegalPageView lang="en" doc="website" />;
}
