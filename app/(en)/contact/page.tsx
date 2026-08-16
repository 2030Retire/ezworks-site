import type { Metadata } from 'next';
import { ContactPageView } from '@/components/views/ContactPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', '/contact/', getContent("en").pages.contact.meta);

export default function Page() {
  return <ContactPageView lang="en" />;
}
