import { cn } from '@/lib/cn';

/**
 * Grid whose hairline seams come from a 1px gap over a `line`-coloured
 * background.
 *
 * Because the background shows through any unfilled track, an item count that
 * does not fill the last row would leave a grey block. Content lists here are
 * data-driven and their length can change, so the grid pads itself with blank
 * white cells instead of relying on the count staying convenient.
 */
export function SeamGrid({
  columns,
  as = 'div',
  itemAs = 'div',
  className,
  children,
}: {
  /** Widest column count used at any breakpoint. */
  columns: 2 | 3;
  as?: 'div' | 'ul' | 'ol';
  itemAs?: 'div' | 'li';
  className?: string;
  children: React.ReactNode;
}) {
  const items = Array.isArray(children) ? children.flat() : [children];
  const count = items.filter(Boolean).length;
  // 3-column grids also collapse to 2 columns at sm, so pad to a multiple of
  // 6 to keep both arrangements full.
  const block = columns === 3 ? 6 : 2;
  const fillers = (block - (count % block)) % block;

  const Tag = as;
  const Filler = itemAs;

  return (
    <Tag
      className={cn(
        'grid gap-px overflow-hidden rounded-2xl border border-line bg-line',
        columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
        className,
      )}
    >
      {children}
      {Array.from({ length: fillers }, (_, i) => (
        <Filler key={`filler-${i}`} aria-hidden="true" className="bg-white" />
      ))}
    </Tag>
  );
}
