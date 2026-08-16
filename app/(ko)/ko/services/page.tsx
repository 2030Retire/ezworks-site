import type { Metadata } from 'next';
import { ServicesPageView } from '@/components/views/ServicesPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('ko', '/services/', getContent("ko").pages.services.meta);

export default function Page() {
  return <ServicesPageView lang="ko" />;
}
