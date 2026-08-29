import { Container } from './Container';

/**
 * Top-of-page banner for the interior marketing pages.
 *
 * It sits on the same deep ground as the home hero, with the same faint grid
 * behind it, so moving from the home page to /services/ or /method/ reads as
 * one site rather than as a landing page followed by documentation. The grid is
 * quieter here than in the hero — the hero animates its cells and carries the
 * argument; this only has to establish continuity.
 *
 * The legal pages and the EZHaru product page render their own headers on white
 * and are deliberately not routed through this. A privacy policy should look
 * like a document, not like a campaign.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-brand-deep">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 420"
      >
        <defs>
          <linearGradient id="ph-wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0B1B2E" />
            <stop offset="60%" stopColor="#112C4C" />
            <stop offset="100%" stopColor="#0A2A52" />
          </linearGradient>
          <pattern id="ph-grid" width="180" height="90" patternUnits="userSpaceOnUse">
            <path
              d="M180,0 V90 M0,90 H180"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.055"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1440" height="420" fill="url(#ph-wash)" />
        <rect width="1440" height="420" fill="url(#ph-grid)" />
        {[
          [720, 90],
          [1080, 180],
          [900, 270],
        ].map(([x, y]) => (
          <rect
            key={`${x}-${y}`}
            x={x + 14}
            y={y + 20}
            width={152}
            height={50}
            fill="#4E9BFF"
            fillOpacity="0.1"
          />
        ))}
      </svg>

      {/* Scrim weighted left, where the type sits — the same treatment as the
          hero, so a photograph could be dropped behind either without the text
          losing contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep/95 via-brand-deep/80 to-brand-deep/45"
      />

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/65">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="display mt-5 text-[1.95rem] font-bold text-white sm:text-4xl lg:text-[2.8rem]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/80 sm:text-lg">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
