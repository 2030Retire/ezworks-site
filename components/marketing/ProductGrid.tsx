import { Section, SectionHeading } from '@/components/layout/Section';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/Button';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';
import { localizePath } from '@/lib/routes';

/**
 * Renders every entry in the locale's product catalogue. The column count
 * adapts, so adding a third or fourth product needs no change here — in either
 * language.
 */
export function ProductGrid({
  lang,
  showAllLink = false,
  tone = 'default',
}: {
  lang: Lang;
  showAllLink?: boolean;
  tone?: 'default' | 'surface';
}) {
  const content = getContent(lang);
  const section = content.home.productsSection;

  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow={section.eyebrow}
        heading={section.heading}
        lede={section.lede}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 80} className="h-full">
            <ProductCard
              product={product}
              statusLabels={content.productStatusLabels}
              exploreLabel={content.productExploreLabel}
            />
          </Reveal>
        ))}
      </div>

      {showAllLink ? (
        <div className="mt-8">
          <ArrowLink href={localizePath(lang, '/products/')}>{section.allLink}</ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}
