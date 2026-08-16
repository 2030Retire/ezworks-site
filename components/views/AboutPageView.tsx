import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/marketing/FinalCta';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function AboutPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.about;
  const { beliefs, proof, finalCta } = content.home;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lede={page.lede} />

      <Section>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="max-w-prose">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {page.whyHeading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-soft">
              {page.whyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              {page.halvesTitle}
            </h2>
            <dl className="mt-5 space-y-5">
              {page.halves.map((half) => (
                <div key={half.term}>
                  <dt className="text-base font-semibold text-ink">{half.term}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">
                    {half.detail}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-soft">
              {page.halvesNote}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow={page.principlesEyebrow}
          heading={page.principlesHeading}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {page.principles.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={i * 70}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={beliefs.eyebrow} heading={beliefs.heading} />
        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {beliefs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="border-t-2 border-brand pt-5">
              <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {proof.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {proof.speed.title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/80">
            {proof.speed.body}
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
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
