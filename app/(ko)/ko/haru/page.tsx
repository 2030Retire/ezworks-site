import type { Metadata } from 'next';
import { HaruPageView } from '@/components/views/HaruPageView';
import { getProduct } from '@/content';
import { pageMetadata } from '@/lib/seo';

const haru = getProduct('ko', 'haru')!;

export const metadata: Metadata = pageMetadata('ko', '/haru/', {
  title: haru.seoTitle,
  description: haru.seoDescription,
});

export default function Page() {
  return <HaruPageView lang="ko" />;
}
