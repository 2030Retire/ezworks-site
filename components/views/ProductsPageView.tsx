import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
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
                statusLabels={content.productStatusLabels}
                exploreLabel={content.productExploreLabel}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Status legend — generated from the status vocabulary itself. */}
      <Section tone="surface">
        <SectionHeading
          eyebrow={page.legend.eyebrow}
          heading={page.legend.heading}
          lede={page.legend.lede}
        />
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {page.legend.items.map((item) => (
            <div key={item.status} className="rounded-2xl border border-line bg-white p-6">
              <dt className="text-base font-semibold tracking-tight text-ink">
                {content.productStatusLabels[item.status]}
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-soft">{item.body}</dd>
            </div>
          ))}
        </dl>
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
