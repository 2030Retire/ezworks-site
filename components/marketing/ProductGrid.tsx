import { Section, SectionHeading } from '@/components/layout/Section';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowLink } from '@/components/ui/Button';
import { products } from '@/content/products';

/**
 * Renders every entry in `content/products.ts`. The column count adapts, so
 * adding a third or fourth product needs no change here.
 */
export function ProductGrid({
  eyebrow = 'What we build',
  heading = 'Products we make ourselves.',
  lede,
  showAllLink = false,
  tone = 'default',
}: {
  eyebrow?: string;
  heading?: string;
  lede?: string;
  showAllLink?: boolean;
  tone?: 'default' | 'surface';
}) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} heading={heading} lede={lede} />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 80} className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {showAllLink ? (
        <div className="mt-8">
          <ArrowLink href="/products/">See all products</ArrowLink>
        </div>
      ) : null}
    </Section>
  );
}
