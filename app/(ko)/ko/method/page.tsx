import type { Metadata } from 'next';
import { MethodPageView } from '@/components/views/MethodPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('ko', '/method/', getContent("ko").pages.method.meta);

export default function Page() {
  return <MethodPageView lang="ko" />;
}
