import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Section, SectionHeading } from '@/components/layout/Section';
import { SeamGrid } from '@/components/layout/SeamGrid';
import { StatusBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Screenshots } from '@/components/product/Screenshots';
import { HaruInviteButton } from '@/components/product/HaruInviteButton';
import { getContent, getProduct } from '@/content';
import type { Lang } from '@/content/types';
import { localizePath } from '@/lib/routes';

export function HaruPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.haru;
  const haru = getProduct(lang, 'haru')!;
  const privacyHref = localizePath(lang, '/haru/privacy/');

  return (
    <>
      {/* Hero */}
      <div className="border-b border-line bg-gradient-to-b from-tint/70 to-white">
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src={haru.logo!.src}
                  alt={haru.logo!.alt}
                  width={303}
                  height={294}
                  className="h-14 w-auto"
                  priority
                />
                <StatusBadge
                  status={haru.status}
                  labels={content.productStatusLabels}
                  note={haru.statusNote}
                />
              </div>

              <h1 className="mt-6 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[3rem]">
                {page.headlineLead}{' '}
                <span className="text-brand">{page.headlineAccent}</span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
                {page.lede}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <HaruInviteButton href={haru.cta.href} label={page.inviteCta} />
                <Button href={privacyHref} variant="secondary">
                  {page.privacyCta}
                </Button>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-soft">{page.setupNote}</p>
            </div>

            <div className="min-w-0 lg:pl-4">
              <NoteMock note={page.note} />
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow={page.featuresEyebrow}
          heading={page.featuresHeading}
          lede={page.featuresLede}
        />

        <SeamGrid columns={2} className="mt-12">
          {haru.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60} className="bg-white p-6 sm:p-8">
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-soft">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </SeamGrid>
      </Section>

      {/* Screenshots */}
      <Section tone="surface">
        <SectionHeading eyebrow={page.screensEyebrow} heading={page.screensHeading} />
        <div className="mt-12">
          <Screenshots
            items={page.screenshots}
            placeholderLabel={page.screenshotPlaceholder}
          />
        </div>
      </Section>

      {/* Ownership — stated literally, because for this product it is literally true. */}
      <Section tone="deep">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              {page.ownership.eyebrow}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              {page.ownership.heading}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/85">
              {page.ownership.body}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
              {page.ownership.note}
            </p>
            <p className="mt-6">
              <Link href={privacyHref} className="font-semibold text-white underline underline-offset-4 hover:text-tint">
                {page.ownership.link}
              </Link>
            </p>
          </div>

          <ul className="space-y-4">
            {page.ownership.rows.map((row) => (
              <li key={row.label} className="flex flex-col gap-1 rounded-xl border border-white/15 bg-white/[0.06] p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {row.label}
                </span>
                <span className="text-[0.9375rem] font-medium text-white sm:text-right">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Honest status */}
      <Section>
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-10">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {page.statusHeading}
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-3">
            {page.statusItems.map((item) => (
              <li key={item.title}>
                <h3 className="text-base font-semibold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-soft">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <HaruInviteButton href={haru.cta.href} label={page.inviteCta} />
          </div>
        </div>
      </Section>
    </>
  );
}

/** A note file as EZHaru produces it — the actual output, not decoration. */
function NoteMock({
  note,
}: {
  note: {
    file: string;
    summaryLabel: string;
    summary: string;
    actionsLabel: string;
    actions: readonly string[];
    footer: string;
  };
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-[0_1px_2px_rgba(22,32,43,0.04),0_16px_40px_-18px_rgba(22,32,43,0.22)] sm:p-5">
      <div className="flex items-center gap-2.5 border-b border-line pb-3">
        <svg width="60" height="16" viewBox="0 0 60 16" aria-hidden="true" className="shrink-0 text-brand">
          {[5, 9, 14, 7, 12, 4, 10, 15, 6, 11, 8, 13, 5, 9].map((h, i) => (
            <rect key={i} x={i * 4.3} y={(16 - h) / 2} width="2" height={h} rx="1" fill="currentColor" opacity={0.4 + (h / 15) * 0.6} />
          ))}
        </svg>
        {/* min-w-0 is load-bearing: without it the nowrap filename sets a
            min-content width that pushes the whole grid track past 360px. */}
        <p className="min-w-0 flex-1 truncate font-mono text-[11.5px] text-soft">
          {note.file}
        </p>
      </div>

      <div className="pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-soft">
          {note.summaryLabel}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink">{note.summary}</p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-soft">
          {note.actionsLabel}
        </p>
        <ul className="mt-2 space-y-1.5">
          {note.actions.map((item) => (
            <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-ink">
              <span aria-hidden="true" className="mt-[6px] h-3 w-3 shrink-0 rounded-[3px] border border-line" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 border-t border-line pt-3 text-[11.5px] text-soft">
          {note.footer}
        </p>
      </div>
    </div>
  );
}
