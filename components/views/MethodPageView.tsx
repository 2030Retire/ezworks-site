import { PageHeader } from '@/components/layout/PageHeader';
import {
  Method,
  Review,
  TurnDown,
  Discipline,
  Repeated,
} from '@/components/marketing/HomeSections';
import {
  MethodDefinition,
  MethodFit,
  MethodLedger,
  MethodCompare,
} from '@/components/marketing/MethodSpec';
import { FinalCta } from '@/components/marketing/FinalCta';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * The methodology page, ordered so a reader can stop at any point and still
 * have an answer: what it is, whether it applies to them, what it produces,
 * how it runs, what it costs, where it differs, what is declined.
 */
export function MethodPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.method;
  const { finalCta } = content.home;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lede={page.lede} />
      <MethodDefinition lang={lang} />
      <MethodFit lang={lang} />
      <Method lang={lang} />
      <MethodLedger lang={lang} />
      <MethodCompare lang={lang} />
      <Discipline lang={lang} />
      <Repeated lang={lang} />
      <Review lang={lang} />
      <TurnDown lang={lang} />
      <FinalCta
        heading={finalCta.heading}
        body={finalCta.body}
        ctaLabel={finalCta.cta.label}
        ctaHref={finalCta.cta.href}
      />
    </>
  );
}
