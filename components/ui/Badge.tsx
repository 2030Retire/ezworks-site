import { cn } from '@/lib/cn';
import { productStatusLabels, type ProductStatus } from '@/content/products';

/**
 * Status badge. Every unreleased product must carry one so nothing on the
 * site reads as purchasable.
 */
export function StatusBadge({
  status,
  note,
  className,
}: {
  status: ProductStatus;
  note?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-tint px-3 py-1 text-xs font-semibold text-brand-hover',
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
      {productStatusLabels[status]}
      {note ? <span className="font-medium text-soft">· {note}</span> : null}
    </span>
  );
}
