import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { FinalCta } from '@/components/marketing/FinalCta';
import { Readiness } from '@/components/marketing/HomeSections';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * Four service areas, each carrying the work actually done in it.
 *
 * Cases live inside the area they demonstrate rather than in a section of
 * their own: a capability claim and its evidence should not be a click apart.
 * A visitor who reads only one area still gets both halves.
 *
 * The problem list above the areas is the entrance — people arrive knowing
 * their symptom, not our taxonomy, so each symptom links to the area that
 * handles it.
 */
export function ServicesPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.services;
  const { services, problemNames } = content;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lede={page.lede} />

      {/* Entrance: symptoms, each linking into the area that handles it. */}
      <Section>
        <SectionHeading
          eyebrow={page.problemsEyebrow}
          heading={page.problemsHeading}
          lede={page.problemsLede}
        />
        <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {problemNames.map((problem) => (
            <li key={problem.title} className="border-t border-line">
              <a
                href={`#${problem.area}`}
                className="group flex items-baseline justify-between gap-4 py-5"
              >
                <span className="min-w-0">
                  <span className="block text-[1.0625rem] font-semibold leading-snug text-ink">
                    {problem.title}
                  </span>
                  <span className="mt-1 block text-[0.9375rem] leading-relaxed text-soft">
                    {problem.note}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-sm text-line-strong transition-colors group-hover:text-brand"
                >
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Where a starting point comes from. */}
      <Readiness lang={lang} />

      {/* Contents strip — the areas, as anchors. */}
      <div className="sticky top-0 z-30 border-y border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <Container className="flex flex-wrap items-baseline gap-x-7 gap-y-2 py-3.5">
          <span className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.16em] text-soft">
            {page.areasEyebrow}
          </span>
          {services.map((area, i) => (
            <a
              key={area.slug}
              href={`#${area.slug}`}
              className="text-[0.875rem] text-soft transition-colors hover:text-ink"
            >
              <span className="mr-1.5 font-mono text-[0.6875rem] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              {area.title}
            </a>
          ))}
        </Container>
      </div>

      {services.map((area, i) => (
        <Section key={area.slug} id={area.slug} tone={i % 2 === 1 ? 'surface' : 'default'}>
          <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            {/* Left: what the area is. Sticky, so it stays with its cases. */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="font-mono text-[0.6875rem] font-semibold text-brand">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="headline mt-3 text-[1.6rem] font-bold text-ink sm:text-[1.85rem]">
                {area.title}
              </h2>
              <p className="mt-4 max-w-[42ch] text-[1.0625rem] leading-relaxed text-ink/80">
                {area.summary}
              </p>
              <p className="mt-5 max-w-[46ch] text-[0.9375rem] leading-relaxed text-soft">
                {area.body}
              </p>
            </div>

            {/* Right: when it applies, what it leaves, what was done. */}
            <div className="min-w-0">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                <div>
                  <h3 className="border-t-2 border-line-strong pt-3.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-soft">
                    {page.whenLabel}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {area.when.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-[0.9375rem] leading-relaxed text-soft before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2 before:bg-line-strong"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="border-t-2 border-brand pt-3.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-brand">
                    {page.outputsLabel}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {area.outputs.map((item) => (
                      <li
                        key={item}
                        className="relative pl-4 text-[0.9375rem] leading-relaxed text-soft before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-2 before:bg-brand/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-soft">
                  {page.casesLabel}
                </h3>
                <div className="mt-5 space-y-6">
                  {area.cases.map((c) => (
                    <article key={c.title} className="border border-line bg-white p-6 sm:p-7">
                      <h4 className="headline text-[1.0625rem] font-semibold text-ink">
                        {c.title}
                      </h4>
                      <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-soft">
                        {c.body}
                      </p>
                      <div className="mt-5 border-t border-line pt-4">
                        <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-brand">
                          {page.resultLabel}
                        </p>
                        <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink">
                          {c.result}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <FinalCta
        heading={page.finalCta.heading}
        body={page.finalCta.body}
        ctaLabel={content.home.finalCta.cta.label}
        ctaHref={content.home.finalCta.cta.href}
      />
    </>
  );
}
