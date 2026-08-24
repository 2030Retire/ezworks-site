import type { Metadata } from 'next';
import { MethodPageView } from '@/components/views/MethodPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', '/method/', getContent("en").pages.method.meta);

export default function Page() {
  return <MethodPageView lang="en" />;
}
