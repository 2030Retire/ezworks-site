import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { SelfApply } from '@/components/marketing/HomeSections';
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

      {/* Where the products came from, before the products themselves.
          Someone landing here directly would otherwise see three unrelated
          apps; this is the line that makes them evidence instead. It also sits
          on the home page — a reader who meets it twice is meeting the point
          of the company twice, which is the intended reading. */}
      <SelfApply lang={lang} />

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
