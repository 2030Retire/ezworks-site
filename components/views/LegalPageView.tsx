import { LegalDocView } from '@/components/layout/LegalPage';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * Both policy pages render through here. The English wording lives in
 * `content/en.ts` and is carried over verbatim from the published version —
 * `/haru/privacy/` in particular is the URL registered with the Play Store.
 */
export function LegalPageView({
  lang,
  doc,
}: {
  lang: Lang;
  doc: 'website' | 'haru';
}) {
  const content = getContent(lang);
  return (
    <LegalDocView
      doc={content.legal[doc]}
      email={content.site.email}
      effectiveDateLabel={content.ui.effectiveDateLabel}
    />
  );
}
