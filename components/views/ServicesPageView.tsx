import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/marketing/FinalCta';
import { ServicesView } from '@/components/marketing/ServicesView';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function ServicesPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.services;
  const { services, engagement, home } = content;

  return (
    <>
      <ServicesView />

      <PageHeader eyebrow={page.eyebrow} title={page.title} lede={page.lede}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={page.primaryCta.href}>{page.primaryCta.label}</Button>
          <Button href={page.secondaryCta.href} variant="secondary">
            {page.secondaryCta.label}
          </Button>
        </div>
      </PageHeader>

      {/* What we do — driven by the locale's service catalogue */}
      <Section>
        <SectionHeading
          eyebrow={page.whatWeDo.eyebrow}
          heading={page.whatWeDo.heading}
          lede={page.whatWeDo.lede}
        />

        <div className="mt-12 space-y-6">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 50}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            >
              <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-ink sm:text-[1.375rem]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
                    {service.body}
                  </p>
                </div>
                <div className="rounded-xl bg-surface p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    {page.inPractice}
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {service.examples.map((example) => (
                      <li key={example} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-soft">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[0.9375rem] leading-relaxed text-soft">
          {page.connectNote}
        </p>
      </Section>

      {/* How an engagement runs */}
      <Section id="how-it-works" tone="surface">
        <SectionHeading
          eyebrow={page.howItRuns.eyebrow}
          heading={page.howItRuns.heading}
          lede={page.howItRuns.lede}
        />

        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {engagement.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 50} className="bg-white p-6 sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint font-mono text-xs font-bold text-brand-hover">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-soft">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Fit */}
      <Section>
        <SectionHeading
          eyebrow={page.fit.eyebrow}
          heading={page.fit.heading}
          lede={page.fit.lede}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h3 className="text-base font-semibold tracking-tight text-ink">
              {page.fit.goodTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {engagement.goodFit.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-base font-semibold tracking-tight text-ink">
              {page.fit.badTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {engagement.notAFit.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-soft">
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0 text-soft" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 10h10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <FinalCta
        heading={page.finalCta.heading}
        body={page.finalCta.body}
        ctaLabel={home.finalCta.cta.label}
        ctaHref={home.finalCta.cta.href}
      />
    </>
  );
}
