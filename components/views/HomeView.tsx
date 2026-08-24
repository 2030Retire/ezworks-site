import { Hero } from '@/components/marketing/Hero';
import { Paths } from '@/components/marketing/Paths';
import { Reality, SelfApply, Summary } from '@/components/marketing/HomeSections';
import { ProductGrid } from '@/components/marketing/ProductGrid';
import { FinalCta } from '@/components/marketing/FinalCta';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/**
 * The home page is an entrance, not the whole argument.
 *
 * It states the criterion, shows who this is for, and hands the reader to the
 * page that carries the part they came for. The long-form material lives at
 * /approach/, /method/ and /practices/ — putting all of it here made a single
 * page nobody finishes.
 *
 * SelfApply stays because it is what turns the product list below it from a
 * side line into evidence; the two only work next to each other.
 */
export function HomeView({ lang }: { lang: Lang }) {
  const { finalCta } = getContent(lang).home;

  return (
    <>
      <Hero lang={lang} />
      <Reality lang={lang} />
      <Paths lang={lang} />
      <SelfApply lang={lang} />
      <ProductGrid lang={lang} showAllLink />
      <Summary lang={lang} />
      <FinalCta
        heading={finalCta.heading}
        body={finalCta.body}
        ctaLabel={finalCta.cta.label}
        ctaHref={finalCta.cta.href}
      />
    </>
  );
}
