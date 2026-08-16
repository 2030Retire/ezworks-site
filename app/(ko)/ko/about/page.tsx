import type { Metadata } from 'next';
import { AboutPageView } from '@/components/views/AboutPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('ko', '/about/', getContent("ko").pages.about.meta);

export default function Page() {
  return <AboutPageView lang="ko" />;
}
