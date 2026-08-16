import type { Metadata } from 'next';
import { HaruPageView } from '@/components/views/HaruPageView';
import { getProduct } from '@/content';
import { pageMetadata } from '@/lib/seo';

const haru = getProduct('en', 'haru')!;

export const metadata: Metadata = pageMetadata('en', '/haru/', {
  title: haru.seoTitle,
  description: haru.seoDescription,
});

export default function Page() {
  return <HaruPageView lang="en" />;
}
