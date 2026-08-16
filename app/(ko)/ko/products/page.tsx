import type { Metadata } from 'next';
import { ProductsPageView } from '@/components/views/ProductsPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('ko', '/products/', getContent("ko").pages.products.meta);

export default function Page() {
  return <ProductsPageView lang="ko" />;
}
