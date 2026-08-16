import type { Metadata } from 'next';
import { ContactPageView } from '@/components/views/ContactPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('ko', '/contact/', getContent("ko").pages.contact.meta);

export default function Page() {
  return <ContactPageView lang="ko" />;
}
