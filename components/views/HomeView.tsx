import { Hero } from '@/components/marketing/Hero';
import { Problems } from '@/components/marketing/Problems';
import { Approach } from '@/components/marketing/Approach';
import { ProductGrid } from '@/components/marketing/ProductGrid';
import { ServicesPreview } from '@/components/marketing/ServicesPreview';
import { Beliefs } from '@/components/marketing/Beliefs';
import { Proof } from '@/components/marketing/Proof';
import { FinalCta } from '@/components/marketing/FinalCta';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function HomeView({ lang }: { lang: Lang }) {
  const { finalCta } = getContent(lang).home;

  return (
    <>
      <Hero lang={lang} />
      <Problems lang={lang} />
      <Approach lang={lang} />
      <ProductGrid lang={lang} showAllLink />
      <ServicesPreview lang={lang} />
      <Beliefs lang={lang} />
      <Proof lang={lang} />
      <FinalCta
        heading={finalCta.heading}
        body={finalCta.body}
        ctaLabel={finalCta.cta.label}
        ctaHref={finalCta.cta.href}
      />
    </>
  );
}
