import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export function FinalCta({
  heading,
  body,
  ctaLabel = 'Talk to us',
  ctaHref = '/contact/',
}: {
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <Section tone="surface" className="border-t border-line">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-soft sm:text-[1.0625rem]">
          {body}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
      </div>
    </Section>
  );
}
