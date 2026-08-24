import { Section, SectionHeading } from '@/components/layout/Section';
import { Inline } from '@/components/layout/Inline';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';
import { FigureManualLayer, FigureChain, FigureSelfApply } from './HomeFigures';

/**
 * The home page sections, in the order the page reads.
 *
 * Register note: these are deliberately flat — hairline rules, one accent, no
 * cards, no shadows, no hover lift. The page argues that definition comes
 * before tooling; a page dressed like a product launch undercuts that.
 */

/** Prose paragraphs with `**bold**` support, held to a readable measure. */
function Prose({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={`max-w-[68ch] space-y-5 text-[1.0625rem] leading-relaxed text-soft ${className ?? ''}`}>
      {items.map((p) => (
        <p key={p}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}

/** A caption under a diagram — states what the picture claims. */
function Caption({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-soft">{children}</p>;
}

// ── The Reality ──────────────────────────────────────────────────────────────
export function Reality({ lang }: { lang: Lang }) {
  const { reality } = getContent(lang).home;
  return (
    <Section tone="surface">
      <SectionHeading eyebrow={reality.eyebrow} heading={reality.heading} lede={reality.lede} />
      <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
        {reality.items.map((item) => (
          <div key={item.title} className="border-t border-line py-6 sm:py-7">
            <h3 className="text-base font-semibold leading-snug text-ink">{item.title}</h3>
            <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-soft">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── Why it does not fit ──────────────────────────────────────────────────────
export function Mismatch({ lang }: { lang: Lang }) {
  const { mismatch } = getContent(lang).home;
  return (
    <Section>
      <SectionHeading eyebrow={mismatch.eyebrow} heading={mismatch.heading} />
      <Prose items={mismatch.body} className="mt-8" />
      <figure className="mt-12">
        <FigureManualLayer lang={lang} />
        <figcaption>
          <Caption>{mismatch.figureCaption}</Caption>
        </figcaption>
      </figure>
      <figure className="pullquote mx-auto mt-14 max-w-[52rem] px-2 py-9 text-center sm:py-11">
        <blockquote className="mx-auto max-w-[40ch] text-balance text-[1.1875rem] leading-[1.7] text-ink sm:text-[1.3125rem]">
          {mismatch.stat}
        </blockquote>
        <figcaption className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-soft">
          {mismatch.statSource}
        </figcaption>
      </figure>
    </Section>
  );
}

// ── The Groundwork ───────────────────────────────────────────────────────────
export function Groundwork({ lang }: { lang: Lang }) {
  const { groundwork } = getContent(lang).home;
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={groundwork.eyebrow}
        heading={groundwork.heading}
        lede={groundwork.lede}
      />
      <figure className="mt-10">
        <FigureChain lang={lang} />
        <figcaption>
          <Caption>{groundwork.figureCaption}</Caption>
        </figcaption>
      </figure>

      <ol className="mt-12">
        {groundwork.steps.map((step, i) => (
          <li
            key={step.title}
            className="grid grid-cols-[minmax(0,1fr)] gap-y-2 border-t border-line py-7 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-7"
          >
            <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-soft sm:pt-1.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0">
              <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[66ch] text-[0.9375rem] leading-relaxed text-soft">
                {step.then}
              </p>
              <p className="mt-3.5 max-w-[64ch] border-l-2 border-line pl-5 text-[0.875rem] leading-relaxed text-soft">
                {step.why}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* The rule spans the column; the sentence keeps its own measure inside.
          Putting both on one element cuts the rule off mid-air. */}
      <div className="mt-11 border-t border-line pt-8">
        <p className="max-w-[64ch] text-[1.125rem] leading-relaxed text-ink">
          {groundwork.arrival}
        </p>
      </div>
    </Section>
  );
}

// ── Readiness ────────────────────────────────────────────────────────────────
export function Readiness({ lang }: { lang: Lang }) {
  const { readiness } = getContent(lang).home;
  return (
    <Section>
      <SectionHeading
        eyebrow={readiness.eyebrow}
        heading={readiness.heading}
        lede={readiness.lede}
      />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[38rem] border-collapse text-left text-[0.9375rem]">
          <thead>
            <tr>
              {readiness.headers.map((h) => (
                <th
                  key={h}
                  className="border-b border-line-strong pb-3 pr-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-soft"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {readiness.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td
                    key={cell}
                    className={`border-b border-line py-5 pr-4 align-top leading-relaxed ${
                      i === 0 ? 'font-medium text-ink' : 'text-soft'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 max-w-[58ch] text-[0.9375rem] leading-relaxed text-soft">
        {readiness.note}
      </p>
    </Section>
  );
}

// ── How it runs ──────────────────────────────────────────────────────────────
export function Method({ lang }: { lang: Lang }) {
  const { method } = getContent(lang).home;
  return (
    <Section tone="surface">
      {/* Heading left, content right: the column that used to sit empty now
          carries the material, while the line length stays readable. */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={method.eyebrow}
          heading={method.heading}
          lede={method.lede}
          className="lg:sticky lg:top-24 lg:self-start"
        />
        <div className="min-w-0">
      <div>
        {method.segments.map((seg) => (
          <div key={seg.title}>
            <div className="border border-line bg-white px-5 py-5 sm:px-6">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-soft">
                  {seg.kicker}
                </span>
                <h3 className="text-[1.0625rem] font-semibold text-ink">{seg.title}</h3>
                <span className="font-mono text-[0.6875rem] text-soft">{seg.meta}</span>
              </div>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">{seg.output}</p>
            </div>
            {seg.exit ? (
              <p className="ml-5 border-l-2 border-brand py-3 pl-4 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-brand">
                {seg.exit}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <Prose items={method.closing} className="mt-10" />
        </div>
      </div>
    </Section>
  );
}

// ── Discipline ───────────────────────────────────────────────────────────────
export function Discipline({ lang }: { lang: Lang }) {
  const { discipline } = getContent(lang).home;
  return (
    <Section>
      {/* Heading left, content right: the column that used to sit empty now
          carries the material, while the line length stays readable. */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={discipline.eyebrow}
          heading={discipline.heading}
          lede={discipline.lede}
          className="lg:sticky lg:top-24 lg:self-start"
        />
        <div className="min-w-0">
      <div>
        {discipline.stages.map((stage) => (
          <div
            key={stage.name}
            className="grid grid-cols-[minmax(0,1fr)] gap-y-1.5 border-t border-line py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-x-7"
          >
            <span className="font-mono text-[0.75rem] font-medium text-ink sm:pt-1">
              {stage.name}
            </span>
            <p className="text-[0.9375rem] leading-relaxed text-soft">{stage.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-x-9 sm:grid-cols-2">
        {discipline.rules.map((rule) => (
          <div key={rule.title} className="border-t border-line py-6">
            <h3 className="text-base font-semibold leading-snug text-ink">{rule.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-soft">{rule.body}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
    </Section>
  );
}

// ── Same decision, four projects ─────────────────────────────────────────────
export function Repeated({ lang }: { lang: Lang }) {
  const { repeated } = getContent(lang).home;
  return (
    <Section tone="surface">
      {/* Heading left, content right: the column that used to sit empty now
          carries the material, while the line length stays readable. */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={repeated.eyebrow}
          heading={repeated.heading}
          lede={repeated.lede}
          className="lg:sticky lg:top-24 lg:self-start"
        />
        <div className="min-w-0">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[0.9375rem]">
          <thead>
            <tr>
              {repeated.headers.map((h) => (
                <th
                  key={h}
                  className="border-b border-line-strong pb-3 pr-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-soft"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {repeated.rows.map((row) => (
              <tr key={row[0]}>
                <td className="w-[10rem] border-b border-line py-5 pr-4 align-top font-medium leading-relaxed text-ink">
                  {row[0]}
                </td>
                <td className="border-b border-line py-5 pr-4 align-top leading-relaxed text-soft">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-[1.0625rem] leading-relaxed text-ink">
        {repeated.closing}
      </p>
        </div>
      </div>
    </Section>
  );
}

// ── First application ────────────────────────────────────────────────────────
export function SelfApply({ lang }: { lang: Lang }) {
  const { selfApply } = getContent(lang).home;
  return (
    <Section>
      {/* One grid for the whole section: the heading holds a left rail and
          everything else flows down the right column. Splitting some rows into
          two columns and leaving others full width is what produced both the
          stranded right margins and the empty left blocks. */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={selfApply.eyebrow}
          heading={selfApply.heading}
          className="lg:sticky lg:top-24 lg:self-start"
        />

        <div className="min-w-0">
          <Prose items={selfApply.body} />

          <figure className="mt-11">
            <FigureSelfApply lang={lang} />
            <figcaption>
              <Caption>{selfApply.figureCaption}</Caption>
            </figcaption>
          </figure>

          <Prose items={selfApply.closing} className="mt-11" />

          <div className="mt-11 border-t border-line-strong pt-8">
            <p className="text-[1.1875rem] leading-relaxed text-ink">
              {selfApply.arrival}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── Review ───────────────────────────────────────────────────────────────────
export function Review({ lang }: { lang: Lang }) {
  const { review } = getContent(lang).home;
  return (
    <Section tone="surface">
      {/* Heading left, content right: the column that used to sit empty now
          carries the material, while the line length stays readable. */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={review.eyebrow}
          heading={review.heading}
          lede={review.lede}
          className="lg:sticky lg:top-24 lg:self-start"
        />
        <div className="min-w-0">
      <dl>
        {review.spec.map((row) => (
          <div
            key={row.key}
            className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-4"
          >
            <dt className="text-[0.9375rem] text-soft">{row.key}</dt>
            <dd className="font-medium text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
      <Prose items={review.body} className="mt-9" />
      <blockquote className="mt-10 border-l-2 border-brand pl-6">
        <p className="text-[1.0625rem] leading-relaxed text-ink">{review.quote}</p>
      </blockquote>
        </div>
      </div>
    </Section>
  );
}

// ── What we turn down ────────────────────────────────────────────────────────
export function TurnDown({ lang }: { lang: Lang }) {
  const { turnDown } = getContent(lang).home;
  return (
    <Section>
      {/* Heading left, content right: the column that used to sit empty now
          carries the material, while the line length stays readable. */}
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={turnDown.eyebrow}
          heading={turnDown.heading}
          className="lg:sticky lg:top-24 lg:self-start"
        />
        <div className="min-w-0">
      <ul>
        {turnDown.items.map((item) => (
          <li
            key={item}
            className="border-t border-line py-4 text-[0.9375rem] leading-relaxed text-soft"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-10 text-[1.0625rem] leading-relaxed text-ink">
        {turnDown.closing}
      </p>
        </div>
      </div>
    </Section>
  );
}

// ── Summary ──────────────────────────────────────────────────────────────────
export function Summary({ lang }: { lang: Lang }) {
  const { summary } = getContent(lang).home;
  return (
    <Section tone="surface">
      <div className="grid gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]">
        <SectionHeading
          eyebrow={summary.eyebrow}
          heading={summary.heading}
          className="lg:sticky lg:top-24 lg:self-start"
        />
        <div className="min-w-0">
      <ol className="space-y-4">
        {summary.points.map((point, i) => (
          <li key={point} className="relative pl-9 text-[1.0625rem] leading-relaxed text-soft">
            <span className="absolute left-0 top-0 font-mono text-sm font-semibold text-brand">
              {i + 1}
            </span>
            {point}
          </li>
        ))}
      </ol>
      <div className="mt-10 border-t border-line-strong pt-7">
        <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-brand">
          {summary.nextLabel}
        </p>
        <p className="mt-3 max-w-[64ch] text-[1.0625rem] leading-relaxed text-ink">
          {summary.next}
        </p>
      </div>
        </div>
      </div>
    </Section>
  );
}
