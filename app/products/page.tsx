import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { ProductCard } from '@/components/product/ProductCard';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/marketing/FinalCta';
import { products, productStatusLabels } from '@/content/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'The software EZWorks builds and maintains: EZHaru, an AI voice recorder that files itself, and EZWorks Expense, a receipt and approval workflow. Each listed with its real status.',
  alternates: { canonical: '/products/' },
  openGraph: {
    title: 'EZWorks Products',
    description:
      'EZHaru and EZWorks Expense — the software we build and maintain ourselves, each listed with its real status.',
    url: '/products/',
  },
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Software we build and maintain ourselves."
        lede="Two rules for this page: every product says exactly what stage it is at, and nothing is described as available before it is. If something here would help, the way in is a conversation — not a checkout."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 80} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Status legend — generated from the status vocabulary itself. */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Status"
          heading="What the badges mean."
          lede="We would rather tell you a product is unfinished than have you discover it after a demo."
        />
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {(
            [
              ['private-alpha', 'Working software, given to a small invited group. Expect rough edges and expect to talk to us.'],
              ['early-access', 'Ready for real use with a limited number of companies, while we shape it around how they work.'],
              ['in-development', 'Built, but not released. We are still deciding how and with whom it goes out.'],
            ] as const
          ).map(([key, body]) => (
            <div key={key} className="rounded-2xl border border-line bg-white p-6">
              <dt className="text-base font-semibold tracking-tight text-ink">
                {productStatusLabels[key]}
              </dt>
              <dd className="mt-2 text-[0.9375rem] leading-relaxed text-soft">{body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <FinalCta
        heading="Interested in one of these?"
        body="Tell us which product and what you would use it for. That is genuinely how the invite and early-access lists are decided."
      />
    </>
  );
}
