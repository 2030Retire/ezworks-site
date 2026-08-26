import type { Metadata } from 'next';
import { DeleteAccountPageView } from '@/components/views/DeleteAccountPageView';
import { getContent } from '@/content';
import { pageMetadata } from '@/lib/seo';

/**
 * ⚠️ /haru/delete-account/ is the account-deletion URL submitted on the Google
 * Play Data safety form. Like /haru/privacy/ it must not move.
 *
 * ⛔ It must also stay indexable. A user who has already uninstalled EZHaru has
 * no other way to find it, and a Play reviewer has to reach it from a search or
 * from the store listing. The site-wide noindex rule for public routes is about
 * unguessable token URLs; this is the opposite of one.
 */
export const metadata: Metadata = {
  ...pageMetadata('en', '/haru/delete-account/', getContent('en').legal.haruDeleteMeta),
  robots: { index: true, follow: true },
};

export default function Page() {
  return <DeleteAccountPageView lang="en" />;
}
