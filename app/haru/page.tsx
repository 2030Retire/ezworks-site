import type { Metadata } from 'next';
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
import { getProduct } from '@/content/products';

const haru = getProduct('haru')!;

export const metadata: Metadata = {
  title: haru.seoTitle,
  description: haru.seoDescription,
  alternates: { canonical: '/haru/' },
  openGraph: {
    title: haru.seoTitle,
    description: haru.seoDescription,
    url: '/haru/',
  },
};

const screenshots = [
  { src: '/haru/screen-record.png', alt: 'The EZHaru recording screen, with categories to tap before recording', caption: 'Tap a category, record' },
  { src: '/haru/screen-summary.png', alt: 'An EZHaru summary showing key points and action items', caption: 'Summary with action items' },
  { src: '/haru/screen-history.png', alt: 'The EZHaru history screen listing past recordings and their notes', caption: 'Everything already filed' },
];

export default function HaruPage() {
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
                <StatusBadge status={haru.status} note={haru.statusNote} />
              </div>

              <h1 className="mt-6 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[3rem]">
                Record.{' '}
                <span className="text-brand">Everything else is done for you.</span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
                Tap a category and record. When you stop, EZHaru writes the
                transcript, the summary and a tidy note file into the right
                folder of your own cloud — no renaming, no filing, no copying it
                somewhere else afterwards.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <HaruInviteButton />
                <Button href="/haru/privacy/" variant="secondary">
                  Read the privacy policy
                </Button>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-soft">
                Private alpha on Android; iOS planned. Because it runs on your own
                accounts, first-time setup takes about ten minutes.
              </p>
            </div>

            <div className="min-w-0 lg:pl-4">
              <NoteMock />
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="What it does"
          heading="The filing is the feature."
          lede="Plenty of apps record audio. The work that actually costs you time is everything after: transcribing it, pulling out what mattered, naming the file, and putting it somewhere you will find it again."
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
        <SectionHeading eyebrow="In the app" heading="Three taps, then nothing to do." />
        <div className="mt-12">
          <Screenshots items={screenshots} />
        </div>
      </Section>

      {/* Ownership — stated literally, because for this product it is literally true. */}
      <Section tone="deep">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Ownership
            </p>
            <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Your keys. Your storage. Your data.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/85">
              EZHaru has no server of ours. Audio goes from your phone to your own
              OneDrive, and transcription runs on an AI service you connect with
              your own API key.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
              That is not a policy we could change quietly — there is no place in
              the design where your recordings could reach us. It also means the
              transcription runs under your own agreement with your vendor, at
              their cost, with no middleman.
            </p>
            <p className="mt-6">
              <Link href="/haru/privacy/" className="font-semibold text-white underline underline-offset-4 hover:text-tint">
                Read the privacy policy →
              </Link>
            </p>
          </div>

          <ul className="space-y-4">
            {[
              ['Audio', 'Your phone → your own OneDrive'],
              ['Transcription', 'The AI service you connect, with your own API key'],
              ['Notes', 'Markdown files in your own folders'],
              ['Us', 'No server, no account, no copy'],
            ].map(([label, value]) => (
              <li key={label} className="flex flex-col gap-1 rounded-xl border border-white/15 bg-white/[0.06] p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  {label}
                </span>
                <span className="text-[0.9375rem] font-medium text-white sm:text-right">
                  {value}
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
            Where it actually is right now
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              ['Private alpha', 'Invited testers only. It works, and it is still changing week to week.'],
              ['Android first', 'An iOS version is planned but not started.'],
              ['About ten minutes to set up', 'Connecting your own cloud and your own API key is a one-time step, and it is the price of there being no server of ours.'],
            ].map(([title, body]) => (
              <li key={title}>
                <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-soft">{body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <HaruInviteButton />
          </div>
        </div>
      </Section>
    </>
  );
}

/** A note file as EZHaru produces it — the actual output, not decoration. */
function NoteMock() {
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
          Work/Meetings/2026-08-14 Client call.md
        </p>
      </div>

      <div className="pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-soft">Summary</p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink">
          Reviewed the September rollout. Agreed to start with one location before
          extending to the rest.
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-soft">Action items</p>
        <ul className="mt-2 space-y-1.5">
          {['Send revised timeline by Thursday', 'Confirm who owns the intake form', 'Book the follow-up for the 28th'].map((item) => (
            <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-ink">
              <span aria-hidden="true" className="mt-[6px] h-3 w-3 shrink-0 rounded-[3px] border border-line" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-4 border-t border-line pt-3 text-[11.5px] text-soft">
          Saved to your own OneDrive · full transcript below in the same file
        </p>
      </div>
    </div>
  );
}
