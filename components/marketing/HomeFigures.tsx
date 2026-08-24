import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * Hand-authored diagrams for the home page.
 *
 * Each one shows something the prose cannot: a layer that has to disappear, a
 * dependency that runs backwards when the order is skipped, a loop that closes
 * on itself. Labels come from `content/` so both locales read correctly.
 *
 * Strokes use `currentColor` (set to the hairline colour by the wrapper) so the
 * drawings stay consistent with the rest of the page; the two literal hues are
 * the accent for what is being argued for and the alert red for what is being
 * argued away.
 */

const RED = '#B4232A';
const BRAND = '#0063F9';
const INK = '#16202B';
const SOFT = '#5A6B7E';

function Svg({
  viewBox,
  label,
  children,
}: {
  viewBox: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      className="h-auto w-full text-line-strong"
    >
      {children}
    </svg>
  );
}

function Arrow({ id, fill }: { id: string; fill: string }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="7"
      markerHeight="7"
      orient="auto-start-reverse"
    >
      <path d="M0,1 L9,5 L0,9 z" fill={fill} />
    </marker>
  );
}

/** Integration is automatic; the layer above it is a person copying state. */
export function FigureManualLayer({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.figures.manualLayer;
  return (
    <Svg viewBox="0 0 800 200" label={t.alt}>
      <defs>
        <Arrow id="ml-a" fill="currentColor" />
        <Arrow id="ml-b" fill={RED} />
      </defs>

      <text x="0" y="12" fontSize="10.5" letterSpacing="1.3" fill={SOFT}>
        {t.definedBand}
      </text>
      <rect x="0" y="26" width="150" height="44" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="75" y="53" textAnchor="middle" fontSize="12" fill={INK}>
        {t.systemA}
      </text>
      <line x1="150" y1="48" x2="238" y2="48" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#ml-a)" />
      <text x="194" y="38" textAnchor="middle" fontSize="10" fill={SOFT}>
        {t.link}
      </text>
      <rect x="244" y="26" width="150" height="44" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="319" y="53" textAnchor="middle" fontSize="12" fill={INK}>
        {t.systemB}
      </text>
      <rect x="488" y="26" width="150" height="44" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="563" y="53" textAnchor="middle" fontSize="12" fill={INK}>
        {t.systemC}
      </text>
      <text x="658" y="42" fontSize="10.5" fill={SOFT}>
        {t.asideOne}
      </text>
      <text x="658" y="59" fontSize="10.5" fill={SOFT}>
        {t.asideTwo}
      </text>

      <text x="0" y="112" fontSize="10.5" letterSpacing="1.3" fill={RED}>
        {t.manualBand}
      </text>
      <rect
        x="0"
        y="126"
        width="638"
        height="50"
        fill="none"
        stroke={RED}
        strokeWidth="1.4"
        strokeDasharray="5 4"
      />
      <text x="18" y="148" fontSize="11.5" fontWeight="600" fill={RED}>
        {t.manualTools}
      </text>
      <text x="18" y="167" fontSize="10.5" fill={SOFT}>
        {t.manualNote}
      </text>
      <line x1="319" y1="70" x2="319" y2="120" stroke={RED} strokeWidth="1.3" markerEnd="url(#ml-b)" />
      <line x1="563" y1="70" x2="563" y2="120" stroke={RED} strokeWidth="1.3" markerEnd="url(#ml-b)" />
      <text x="654" y="154" fontSize="10.5" fill={RED}>
        {t.unrecorded}
      </text>
    </Svg>
  );
}

/** Four steps forward in weeks; skipped, the arrow runs back to step one. */
export function FigureChain({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.figures.chain;
  const boxes = [
    { x: 0, w: 176, label: t.steps[0].title, note: t.steps[0].note },
    { x: 208, w: 176, label: t.steps[1].title, note: t.steps[1].note },
    { x: 416, w: 176, label: t.steps[2].title, note: t.steps[2].note },
    { x: 624, w: 176, label: t.steps[3].title, note: t.steps[3].note },
  ];
  return (
    <Svg viewBox="0 0 800 212" label={t.alt}>
      <defs>
        <Arrow id="ch-a" fill={BRAND} />
        <Arrow id="ch-b" fill={RED} />
      </defs>

      <text x="0" y="16" fontSize="10.5" letterSpacing="1.3" fill={BRAND}>
        {t.inOrder}
      </text>

      {boxes.map((b, i) => (
        <g key={b.label}>
          <rect
            x={b.x}
            y={38}
            width={b.w}
            height={58}
            fill="none"
            stroke={BRAND}
            strokeWidth={i === 3 ? 1.8 : 1.3}
          />
          <text
            x={b.x + b.w / 2}
            y={65}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill={i === 3 ? BRAND : INK}
          >
            {b.label}
          </text>
          <text x={b.x + b.w / 2} y={83} textAnchor="middle" fontSize="10" fill={SOFT}>
            {b.note}
          </text>
          {i < 3 ? (
            <line
              x1={b.x + b.w}
              y1={67}
              x2={b.x + b.w + 26}
              y2={67}
              stroke={BRAND}
              strokeWidth="1.4"
              markerEnd="url(#ch-a)"
            />
          ) : null}
        </g>
      ))}

      <path
        d="M712,100 C712,150 300,150 90,128"
        fill="none"
        stroke={RED}
        strokeWidth="1.3"
        strokeDasharray="5 4"
        markerEnd="url(#ch-b)"
      />
      <text x="400" y="176" textAnchor="middle" fontSize="11" fill={RED}>
        {t.reversed}
      </text>
      <text x="0" y="202" fontSize="10.5" fill={SOFT}>
        {t.footnote}
      </text>
    </Svg>
  );
}

/** The same procedure, run on ourselves; the products are what came out. */
export function FigureSelfApply({ lang }: { lang: Lang }) {
  const t = getContent(lang).home.figures.selfApply;
  return (
    <Svg viewBox="0 0 800 248" label={t.alt}>
      <defs>
        <Arrow id="sa-a" fill="currentColor" />
        <Arrow id="sa-b" fill={BRAND} />
      </defs>

      <text x="0" y="14" fontSize="10.5" letterSpacing="1.3" fill={SOFT}>
        {t.ourWorkBand}
      </text>
      <rect x="0" y="28" width="176" height="92" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {t.ourWork.map((line, i) => (
        <text key={line} x="16" y={52 + i * 20} fontSize="10.5" fill={i === 3 ? SOFT : INK}>
          {line}
        </text>
      ))}

      <line x1="176" y1="74" x2="212" y2="74" stroke="currentColor" strokeWidth="1.2" markerEnd="url(#sa-a)" />

      <rect x="218" y="28" width="196" height="92" fill="none" stroke={BRAND} strokeWidth="1.4" />
      <text x="316" y="56" textAnchor="middle" fontSize="12" fontWeight="600" fill={BRAND}>
        {t.procedure}
      </text>
      <text x="316" y="78" textAnchor="middle" fontSize="10" fill={SOFT}>
        {t.procedureSteps}
      </text>
      <text x="316" y="100" textAnchor="middle" fontSize="10" fill={SOFT}>
        {t.procedureNote}
      </text>

      <line x1="414" y1="74" x2="450" y2="74" stroke={BRAND} strokeWidth="1.3" markerEnd="url(#sa-b)" />

      <text x="456" y="14" fontSize="10.5" letterSpacing="1.3" fill={BRAND}>
        {t.outputBand}
      </text>
      <rect x="456" y="28" width="344" height="92" fill="none" stroke={BRAND} strokeWidth="1.4" />
      {t.outputs.map((line, i) => (
        <text key={line} x="472" y={54 + i * 24} fontSize="11" fill={INK}>
          {line}
        </text>
      ))}

      <path
        d="M628,120 V164 H316 V124"
        fill="none"
        stroke={BRAND}
        strokeWidth="1.3"
        strokeDasharray="5 4"
        markerEnd="url(#sa-b)"
      />
      <text x="472" y="182" textAnchor="middle" fontSize="10.5" fill={BRAND}>
        {t.loopNote}
      </text>

      <line x1="0" y1="206" x2="800" y2="206" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
      <text x="0" y="232" fontSize="11" fill={INK}>
        {t.closing}
      </text>
    </Svg>
  );
}
