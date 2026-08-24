import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/marketing/FinalCta';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function ProductsPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.products;

  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} lede={page.lede} />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {content.products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80} className="h-full">
              <ProductCard
                product={product}
                exploreLabel={content.productExploreLabel}
              />
            </Reveal>
          ))}
        </div>
      </Section>


      <FinalCta
        heading={page.finalCta.heading}
        body={page.finalCta.body}
        ctaLabel={content.home.finalCta.cta.label}
        ctaHref={content.home.finalCta.cta.href}
      />
    </>
  );
}
