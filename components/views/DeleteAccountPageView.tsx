import { LegalBlocks, LegalPage } from '@/components/layout/LegalPage';
import { DeleteAccountWidget } from '@/components/haru/DeleteAccountWidget';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * /haru/delete-account/ — the deletion route Google Play requires to work
 * without installing the app, and the URL given on the Data safety form.
 *
 * The explanation is a static server-rendered document so it is readable (and
 * indexable) with no JavaScript at all; only the sign-in and the confirmation
 * are a client component. That matters because the page has to be legible to a
 * Play reviewer even if Google's sign-in script never loads.
 */
export function DeleteAccountPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const doc = content.legal.haruDelete;

  return (
    <LegalPage title={doc.title} backHref={doc.backHref} backLabel={doc.backLabel}>
      <LegalBlocks blocks={doc.blocks} email={content.site.email} />
      <DeleteAccountWidget strings={doc.widget} />
    </LegalPage>
  );
}
