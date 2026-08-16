import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * Hero visual: a literal depiction of what we build — a receipt moving through
 * capture, extraction, approval and accounting, plus a note file produced by
 * EZHaru. Everything is CSS/SVG, so there are no external image requests and
 * it reflows down to 360px without horizontal scroll.
 *
 * All labels come from the locale dictionary (`home.diagram`).
 */

function Chip({ children, tone = 'muted' }: { children: React.ReactNode; tone?: 'muted' | 'brand' | 'done' }) {
  const tones = {
    muted: 'bg-surface text-soft border-line',
    brand: 'bg-tint text-brand-hover border-brand/20',
    done: 'bg-[#E9F6EE] text-[#136B3B] border-[#B9E2C9]',
  } as const;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1.5">
      <svg width="12" height="22" viewBox="0 0 12 22" fill="none" className="text-line">
        <path d="M6 0v14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M2.5 13.5L6 18l3.5-4.5" stroke="#0063F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Row({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-line/70 py-1.5 last:border-0">
      <span className="text-[11px] uppercase tracking-wide text-soft">{label}</span>
      <span className={`text-[12.5px] font-semibold text-ink ${mono ? 'font-mono' : ''}`}>{value}</span>
    </div>
  );
}

export function HeroDiagram({ lang }: { lang: Lang }) {
  const d = getContent(lang).home.diagram;

  return (
    <div className="rounded-2xl border border-line bg-surface p-3 shadow-[0_1px_2px_rgba(22,32,43,0.04),0_12px_32px_-12px_rgba(22,32,43,0.12)] sm:p-4">
      <div className="rounded-xl border border-line bg-white p-3.5 sm:p-4">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-soft">
          {d.title}
        </p>

        {/* 1 — capture */}
        <div className="rounded-lg border border-line bg-white p-3">
          <div className="flex items-center gap-3">
            <svg width="34" height="42" viewBox="0 0 34 42" aria-hidden="true" className="shrink-0">
              <path d="M2 2h30v34l-4-2.5-4 2.5-4-2.5-4 2.5-4-2.5-4 2.5-4-2.5-2 1.2z" fill="#FFF" stroke="#E3E9F0" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M7 10h20M7 15h20M7 20h13" stroke="#C7D3E1" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7 26h9" stroke="#0063F9" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-ink">{d.captureTitle}</p>
              <p className="truncate font-mono text-[11.5px] text-soft">{d.captureFile}</p>
            </div>
          </div>
        </div>

        <Connector />

        {/* 2 — extraction */}
        <div className="rounded-lg border border-line bg-white p-3">
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <p className="text-[13px] font-semibold text-ink">{d.extractTitle}</p>
            <Chip tone="brand">{d.extractChip}</Chip>
          </div>
          {d.rows.map((row) => (
            <Row key={row.label} label={row.label} value={row.value} mono={'mono' in row ? row.mono : undefined} />
          ))}
        </div>

        <Connector />

        {/* 3 — approval + accounting */}
        <div className="rounded-lg border border-line bg-white p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[13px] font-semibold text-ink">{d.approvedTitle}</p>
            <Chip tone="done">
              <svg width="9" height="9" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 5.2l2.6 2.6L9 2.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {d.approvedChip}
            </Chip>
          </div>
          <p className="mt-1.5 text-[12px] leading-relaxed text-soft">{d.approvedBody}</p>
        </div>
      </div>

      {/* Secondary artifact — the other half of what we make. */}
      <div className="mt-3 rounded-xl border border-line bg-white p-3.5 sm:p-4">
        <div className="flex items-center gap-2.5">
          <svg width="72" height="18" viewBox="0 0 72 18" aria-hidden="true" className="shrink-0 text-brand">
            {[6, 11, 16, 9, 14, 5, 12, 17, 8, 13, 6, 10, 15, 7, 11, 4].map((h, i) => (
              <rect key={i} x={i * 4.5} y={(18 - h) / 2} width="2.2" height={h} rx="1.1" fill="currentColor" opacity={0.35 + (h / 17) * 0.65} />
            ))}
          </svg>
          {/* min-w-0 keeps the nowrap filename from widening the grid track. */}
          <p className="min-w-0 flex-1 truncate font-mono text-[11.5px] text-soft">{d.noteFile}</p>
        </div>
        <ul className="mt-2.5 space-y-1 text-[12.5px] leading-relaxed text-ink">
          {d.noteLines.map((line) => (
            <li key={line} className="flex gap-2">
              <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-2.5 text-[11.5px] text-soft">{d.noteFooter}</p>
      </div>
    </div>
  );
}
