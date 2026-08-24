import { Section, SectionHeading } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * The methodology, written as a specification rather than an argument.
 *
 * Section rhythm is deliberately varied here: a full-bleed definition band, a
 * two-column fit/not-fit split, a three-group numbered ledger, then a wide
 * table. A page where every section has the same shape reads as generated even
 * when the content is sound — which is the failure mode this file exists to
 * avoid.
 *
 * What is deliberately absent: trademarked framework names and a metaphor
 * vocabulary. Naming assets we do not have is the padding this studio says it
 * does not do.
 */

/** One-sentence definition, given the weight of a band rather than a paragraph. */
export function MethodDefinition({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.methodSpec;
  return (
    <div className="border-b border-line bg-brand-deep">
      <Container className="py-12 sm:py-16">
        <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/60">
          {t.definitionLabel}
        </p>
        <p className="headline mt-5 max-w-[46ch] text-[1.25rem] font-medium text-white sm:text-[1.5rem]">
          {t.definition}
        </p>
      </Container>
    </div>
  );
}

/** Who it fits, and who it does not — side by side, so neither hides. */
export function MethodFit({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.methodSpec;
  return (
    <Section>
      <SectionHeading eyebrow={t.fitEyebrow} heading={t.fitHeading} />
      <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
        {[t.fitYes, t.fitNo].map((col, i) => (
          <div key={col.title}>
            <h3
              className={`border-t-2 pt-4 text-[1.0625rem] font-semibold ${
                i === 0 ? 'border-brand text-ink' : 'border-line-strong text-soft'
              }`}
            >
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-[0.9375rem] leading-relaxed text-soft before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-line-strong"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * The deliverable ledger. Nine named documents, grouped by segment.
 *
 * This is the section that turns "we are methodical" into something countable.
 * Every item is a document that actually gets produced — none of it exists to
 * make the list reach nine.
 */
export function MethodLedger({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.methodSpec;
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={t.ledgerEyebrow}
        heading={t.ledgerHeading}
        lede={t.ledgerLede}
      />
      <div className="mt-12 space-y-12">
        {t.ledgerGroups.map((group) => (
          <div
            key={group.segment}
            className="grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
          >
            <h3 className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.14em] text-brand lg:sticky lg:top-24 lg:self-start">
              {group.segment}
            </h3>
            <dl className="min-w-0">
              {group.items.map((item) => (
                <div
                  key={item.no}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-t border-line py-5 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[0.8125rem] font-semibold text-brand">
                    {item.no}
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[1.0625rem] font-semibold text-ink">{item.title}</dt>
                    <dd className="mt-1.5 max-w-[62ch] text-[0.9375rem] leading-relaxed text-soft">
                      {item.body}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** The comparison, as a table. The closing note refuses the easy claim. */
export function MethodCompare({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.methodSpec;
  return (
    <Section>
      <SectionHeading eyebrow={t.compareEyebrow} heading={t.compareHeading} />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[44rem] border-collapse text-left text-[0.9375rem]">
          <thead>
            <tr>
              {t.compareHeaders.map((h, i) => (
                <th
                  key={i}
                  className={`border-b border-line-strong pb-3 pr-6 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] ${
                    i === 2 ? 'text-brand' : 'text-soft'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.compareRows.map((row) => (
              <tr key={row[0]}>
                <td className="w-[9rem] border-b border-line py-4 pr-6 align-top font-medium leading-relaxed text-ink">
                  {row[0]}
                </td>
                <td className="border-b border-line py-4 pr-6 align-top leading-relaxed text-soft">
                  {row[1]}
                </td>
                <td className="border-b border-line bg-tint/60 py-4 pl-4 pr-6 align-top leading-relaxed text-ink">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 max-w-[62ch] text-[0.9375rem] leading-relaxed text-soft">
        {t.compareNote}
      </p>
    </Section>
  );
}
