import type { Metadata } from 'next';
import { Hero } from '@/components/marketing/Hero';
import { Problems } from '@/components/marketing/Problems';
import { Approach } from '@/components/marketing/Approach';
import { ProductGrid } from '@/components/marketing/ProductGrid';
import { ServicesPreview } from '@/components/marketing/ServicesPreview';
import { Beliefs } from '@/components/marketing/Beliefs';
import { Proof } from '@/components/marketing/Proof';
import { FinalCta } from '@/components/marketing/FinalCta';
import { finalCta } from '@/content/home';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Approach />
      <ProductGrid
        lede="Tools we build and maintain ourselves, for the same kind of company we work with. Each one says exactly where it is — nothing here is unfinished software pretending otherwise."
        showAllLink
      />
      <ServicesPreview />
      <Beliefs />
      <Proof />
      <FinalCta heading={finalCta.heading} body={finalCta.body} ctaLabel={finalCta.cta.label} ctaHref={finalCta.cta.href} />
    </>
  );
}
