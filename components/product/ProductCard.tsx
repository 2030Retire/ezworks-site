import Link from 'next/link';
import type { Product } from '@/content/types';

/**
 * Card for one product. Driven entirely by the locale's catalogue entry, so a
 * new product appears here without touching any page component.
 *
 * The whole card is clickable via a stretched link overlay; the visible link
 * text is what screen readers announce.
 */
export function ProductCard({
  product,
  exploreLabel,
}: {
  product: Product;
  /** Template containing `{name}`, e.g. "Explore {name}". */
  exploreLabel: string;
}) {
  const target = product.href ?? product.cta.href;
  const linkLabel = product.href
    ? exploreLabel.replace('{name}', product.name)
    : product.cta.label;

  return (
    <article className="group relative flex h-full flex-col border border-line bg-white p-6 transition-colors duration-200 hover:border-brand/40 sm:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-ink">
        {product.name}
      </h3>
      <p className="mt-1.5 text-[0.9375rem] font-semibold text-brand">
        {product.tagline}
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-soft">
        {product.description}
      </p>

      <ul className="mt-5 space-y-2">
        {product.features.slice(0, 3).map((f) => (
          <li key={f.title} className="flex gap-2.5 text-[0.9375rem] text-ink">
            <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
            {f.title}
          </li>
        ))}
      </ul>

      <p className="mt-6 flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand">
        <Link href={target} className="after:absolute after:inset-0 after:content-['']">
          {linkLabel}
        </Link>
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </p>
    </article>
  );
}
