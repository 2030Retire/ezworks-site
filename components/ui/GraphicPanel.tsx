/**
 * Authored graphic panels used where a photograph will eventually go.
 *
 * These are not stock imagery and not decoration for its own sake: each one
 * draws the thing the section next to it is arguing about, in the site's own
 * palette. That makes them safe to ship now (no licence, nothing to
 * contradict) and it keeps the page from reading as unfinished while real
 * photography is being taken.
 *
 * Swap order: put a file at the slot path in `public/`, rebuild, and the
 * photograph replaces the panel automatically. Nothing here needs editing.
 */

const BRAND = '#0063F9';
const INK = '#16202B';
const SOFT = '#5A6B7E';
const LINE = '#CDD2D8';

/**
 * A schedule grid where the state is kept by hand, next to the same grid held
 * by a system. The left half is what most operations actually look like.
 */
export function PanelOperations({ className }: { className?: string }) {
  const rows = [0, 1, 2, 3, 4, 5];
  const cols = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 480 384"
      role="img"
      aria-label="손으로 색을 칠해 관리하는 일정 격자와, 같은 격자를 시스템이 채운 모습을 나란히 놓은 그림"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="480" height="384" fill="#F7F9FC" />

      {/* left: by hand */}
      <text x="28" y="46" fontSize="10" letterSpacing="1.6" fill={SOFT}>
        BY HAND
      </text>
      {rows.map((r) =>
        cols.slice(0, 2).map((c) => {
          const filled = (r + c) % 3 === 0;
          return (
            <rect
              key={`l${r}${c}`}
              x={28 + c * 86}
              y={62 + r * 46}
              width={78}
              height={38}
              fill={filled ? '#E7EBF0' : 'none'}
              stroke={LINE}
              strokeWidth="1"
              strokeDasharray={filled ? undefined : '3 3'}
            />
          );
        }),
      )}
      {/* hand-drawn marks: uneven, a couple missing */}
      {[0, 2, 3, 5].map((r) => (
        <path
          key={`m${r}`}
          d={`M${36 + (r % 2) * 86},${74 + r * 46} l58,${r % 3 === 0 ? 3 : -2}`}
          stroke="#B4232A"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.75"
        />
      ))}

      {/* divider */}
      <line x1="240" y1="34" x2="240" y2="352" stroke={LINE} strokeWidth="1" strokeDasharray="4 5" />

      {/* right: by system */}
      <text x="264" y="46" fontSize="10" letterSpacing="1.6" fill={BRAND}>
        BY SYSTEM
      </text>
      {rows.map((r) =>
        cols.slice(0, 2).map((c) => {
          const done = (r * 2 + c) % 4 !== 3;
          return (
            <g key={`r${r}${c}`}>
              <rect
                x={264 + c * 86}
                y={62 + r * 46}
                width={78}
                height={38}
                fill={done ? '#E4EEFF' : 'none'}
                stroke={done ? BRAND : LINE}
                strokeWidth="1"
              />
              {done ? (
                <rect x={272 + c * 86} y={72 + r * 46} width={38} height={4} fill={BRAND} opacity="0.55" />
              ) : null}
              {done ? (
                <rect x={272 + c * 86} y={82 + r * 46} width={22} height={4} fill={BRAND} opacity="0.3" />
              ) : null}
            </g>
          );
        }),
      )}
      <rect x="0" y="0" width="480" height="384" fill="none" stroke={LINE} strokeWidth="1" />
    </svg>
  );
}

/**
 * A single process becoming a defined sequence: scattered marks resolving into
 * an ordered column. Used where the page talks about definition preceding tools.
 */
export function PanelDefinition({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label="흩어져 있던 요청들이 번호가 붙은 순서로 정리되는 모습을 나타낸 그림"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="480" height="320" fill="#FFFFFF" />
      <rect x="0" y="0" width="480" height="320" fill="none" stroke={LINE} strokeWidth="1" />

      <text x="28" y="42" fontSize="10" letterSpacing="1.6" fill={SOFT}>
        SCATTERED
      </text>
      {[
        [34, 62, 96],
        [58, 96, 72],
        [30, 128, 118],
        [72, 160, 60],
        [40, 192, 88],
        [52, 224, 104],
      ].map(([x, y, w], i) => (
        <rect
          key={`s${i}`}
          x={x}
          y={y}
          width={w}
          height={16}
          fill="none"
          stroke={LINE}
          strokeWidth="1"
          strokeDasharray="3 3"
          transform={`rotate(${i % 2 ? -2.2 : 1.8} ${x + w / 2} ${y + 8})`}
        />
      ))}

      <path
        d="M196,152 L246,152"
        stroke={BRAND}
        strokeWidth="1.4"
        markerEnd="url(#gp-arrow)"
      />
      <defs>
        <marker id="gp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,1 L9,5 L0,9 z" fill={BRAND} />
        </marker>
      </defs>

      <text x="272" y="42" fontSize="10" letterSpacing="1.6" fill={BRAND}>
        NUMBERED
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={`n${i}`}>
          <text
            x="272"
            y={74 + i * 32}
            fontSize="9.5"
            fontFamily="monospace"
            fill={BRAND}
          >
            {String(i + 1).padStart(2, '0')}
          </text>
          <rect x="298" y={62 + i * 32} width={150 - (i % 3) * 18} height={16} fill="#E4EEFF" />
          <line x1="272" y1={86 + i * 32} x2="452" y2={86 + i * 32} stroke={LINE} strokeWidth="1" />
        </g>
      ))}
      <text x="272" y="292" fontSize="10" fill={SOFT}>
        상태 · 담당 · 기한이 번호에 붙습니다
      </text>
    </svg>
  );
}

/** Two systems integrated, with a person still bridging them by hand. */
export function PanelBridge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="자동으로 연동된 두 시스템 사이를 사람이 손으로 잇고 있는 구조를 나타낸 그림"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="480" height="300" fill="#F7F9FC" />
      <rect x="0" y="0" width="480" height="300" fill="none" stroke={LINE} strokeWidth="1" />

      <rect x="36" y="52" width="152" height="60" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
      <text x="112" y="88" textAnchor="middle" fontSize="12" fill={INK}>
        기간계
      </text>
      <rect x="292" y="52" width="152" height="60" fill="#FFFFFF" stroke={INK} strokeWidth="1.2" />
      <text x="368" y="88" textAnchor="middle" fontSize="12" fill={INK}>
        창고 시스템
      </text>
      <line x1="188" y1="82" x2="286" y2="82" stroke={INK} strokeWidth="1.2" markerEnd="url(#gp-arrow2)" />
      <text x="237" y="72" textAnchor="middle" fontSize="9.5" fill={SOFT}>
        자동
      </text>
      <defs>
        <marker id="gp-arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,1 L9,5 L0,9 z" fill={INK} />
        </marker>
      </defs>

      <rect
        x="36"
        y="176"
        width="408"
        height="72"
        fill="#FDF4F4"
        stroke="#B4232A"
        strokeWidth="1.4"
        strokeDasharray="5 4"
      />
      <text x="56" y="206" fontSize="11.5" fontWeight="600" fill="#B4232A">
        사람이 옮겨 적는 층
      </text>
      <text x="56" y="228" fontSize="10" fill={SOFT}>
        일정 캘린더 · 엑셀 · 메신저 — 어디에도 기록되지 않습니다
      </text>
      <line x1="112" y1="112" x2="112" y2="170" stroke="#B4232A" strokeWidth="1.3" markerEnd="url(#gp-arrow3)" />
      <line x1="368" y1="112" x2="368" y2="170" stroke="#B4232A" strokeWidth="1.3" markerEnd="url(#gp-arrow3)" />
      <defs>
        <marker id="gp-arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,1 L9,5 L0,9 z" fill="#B4232A" />
        </marker>
      </defs>
    </svg>
  );
}
