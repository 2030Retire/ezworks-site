import type { Metadata } from 'next';
import { DeleteAccountPageView } from '@/components/views/DeleteAccountPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

/**
 * ⚠️ The English /haru/delete-account/ is the URL submitted on the Google Play
 * Data safety form and the authoritative one. This Korean page exists so the
 * language switcher has somewhere to go and so Korean users can read the same
 * explanation; both call the same endpoint.
 */
export const metadata: Metadata = {
  ...pageMetadata('ko', '/haru/delete-account/', getContent('ko').legal.haruDeleteMeta),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <DeleteAccountPageView lang="ko" />;
}
