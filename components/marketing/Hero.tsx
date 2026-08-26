import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Inline } from '@/components/layout/Inline';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * Full-bleed hero.
 *
 * The headline sits over a background that is either a photograph, once one
 * lands at the slot path, or an authored field: a deep brand wash plus a faint
 * grid that reads as a schedule board rather than as decoration. Either way the
 * type is white over a scrim, so contrast does not depend on which of the two
 * is in place — a photograph dropped in later cannot break the text.
 *
 * Opens with a criterion rather than a claim: it says what to look at, not what
 * to conclude. The abstract below carries problem / order / start so relevance
 * can be judged before any scrolling.
 */

function hasFile(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

/** Faint grid suggesting a partly-filled board. Sits under the scrim. */
function BackgroundField() {
  const filled = [
    [180, 90], [540, 90], [720, 180], [180, 270],
    [900, 270], [360, 360], [1080, 360], [540, 450],
  ];
  const outlined = [[360, 180], [900, 90], [1080, 540]];

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 720"
    >
      <defs>
        <linearGradient id="hero-wash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B1B2E" />
          <stop offset="55%" stopColor="#123156" />
          <stop offset="100%" stopColor="#0A2A52" />
        </linearGradient>
        <pattern id="hero-grid" width="180" height="90" patternUnits="userSpaceOnUse">
          <path
            d="M180,0 V90 M0,90 H180"
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.07"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="1440" height="720" fill="url(#hero-wash)" />
      <rect width="1440" height="720" fill="url(#hero-grid)" />
      {filled.map(([x, y], i) => (
        <rect
          key={`f-${x}-${y}`}
          className="cell-fill"
          style={{ animationDelay: `${240 + i * 130}ms` }}
          x={x + 14}
          y={y + 20}
          width={152}
          height={50}
          fill="#4E9BFF"
          fillOpacity="0.13"
        />
      ))}
      {outlined.map(([x, y]) => (
        <rect
          key={`o-${x}-${y}`}
          x={x + 14}
          y={y + 20}
          width={152}
          height={50}
          fill="none"
          stroke="#7FB4FF"
          strokeOpacity="0.28"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const { hero } = getContent(lang).home;
  const photo = hasFile(hero.image.src);

  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {photo ? (
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
      ) : (
        <div className="absolute inset-0 -z-10">
          <BackgroundField />
        </div>
      )}

      {/* Scrim, weighted left where the type sits. Holds white text well clear
          of AA over either background. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep/95 via-brand-deep/80 to-brand-deep/40"
      />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-white/65">
          {hero.eyebrow}
        </p>
        <h1 className="display mt-7 max-w-[22ch] text-[2.4rem] font-bold text-white sm:text-[3.2rem] lg:text-[4rem]">
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-[50ch] text-[1.0625rem] leading-relaxed text-white/85 sm:text-[1.1875rem]">
          <Inline
            text={hero.criterion}
            linkClassName="font-medium text-white underline underline-offset-4"
          />
        </p>
        {/* The niche, stated as where we are strongest rather than as a gate.
            It is the one thing a general US IT vendor cannot claim, and it was
            buried three pages deep. */}
        <p className="mt-7 max-w-[52ch] border-l-2 border-white/25 pl-5 text-[0.9375rem] leading-relaxed text-white/70">
          {hero.niche}
        </p>

        <div className="mt-11">
          <Button href={hero.cta.href}>{hero.cta.label}</Button>
        </div>
      </Container>

      {/* The abstract sits on the page ground, not the hero ground, so the hero
          stays one uninterrupted field. */}
      <div className="relative bg-white">
        <Container className="py-11 sm:py-14">
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-3">
            {hero.abstract.map((item, i) => (
              <div key={item.label} className="min-w-0">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[0.6875rem] font-semibold text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-brand">
                    {item.label}
                  </p>
                </div>
                <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-soft">
                  <Inline text={item.body} />
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
