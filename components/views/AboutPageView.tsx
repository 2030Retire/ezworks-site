import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { PanelBridge } from '@/components/ui/GraphicPanel';
import { FinalCta } from '@/components/marketing/FinalCta';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * Who this is, and from where.
 *
 * There is deliberately no speed claim on this page. A number like "six days
 * to a store build" describes us rather than a result, and it reads as a
 * finished product when what shipped was a test build — the one claim on the
 * site that could be argued with. The evidence that carries weight is what
 * changed structurally, and that lives on the case pages.
 */
export function AboutPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.about;
  const { finalCta } = content.home;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lede={page.lede} />

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
              {page.whyHeading}
            </h2>
            <div className="mt-6 max-w-[64ch] space-y-5 text-[1.0625rem] leading-relaxed text-soft">
              {page.whyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ImageSlot
            slot={page.image}
            ratio="aspect-[3/2]"
            sizes="(min-width: 1024px) 420px, 100vw"
            fallback={<PanelBridge />}
          />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {page.halvesTitle}
          </h2>
          <dl className="min-w-0">
            {page.halves.map((half) => (
              <div key={half.term} className="border-t border-line-strong py-6 first:border-t-0 first:pt-0">
                <dt className="text-[1.0625rem] font-semibold text-ink">{half.term}</dt>
                <dd className="mt-2 max-w-[56ch] text-[0.9375rem] leading-relaxed text-soft">
                  {half.detail}
                </dd>
              </div>
            ))}
            <div className="mt-2 border-t border-line pt-6">
              <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed text-soft">
                {page.halvesNote}
              </p>
            </div>
          </dl>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={page.principlesEyebrow}
          heading={page.principlesHeading}
        />
        <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {page.principles.map((principle, i) => (
            <div key={principle.title} className="border-t border-line py-7">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.6875rem] font-semibold text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                  {principle.title}
                </h3>
              </div>
              <p className="mt-2.5 max-w-[52ch] text-[0.9375rem] leading-relaxed text-soft">
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow={page.beliefs.eyebrow} heading={page.beliefs.heading} />
        <div className="mt-10 grid gap-x-10 md:grid-cols-3">
          {page.beliefs.items.map((item) => (
            <div key={item.title} className="border-t-2 border-brand pt-5">
              <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-line pt-8">
          <p className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-soft">
            {page.quietNote}
          </p>
        </div>
      </Section>

      <FinalCta
        heading={page.finalCta.heading}
        body={page.finalCta.body}
        ctaLabel={finalCta.cta.label}
        ctaHref={finalCta.cta.href}
      />
    </>
  );
}
