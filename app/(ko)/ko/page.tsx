import type { Metadata } from 'next';
import { HomeView } from '@/components/views/HomeView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('ko', '/', getContent("ko").pages.home.meta);

export default function Page() {
  return <HomeView lang="ko" />;
}
