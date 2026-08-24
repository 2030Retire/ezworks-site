import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

/**
 * Closing call to action. Every string is required — there are no English
 * defaults here, so a page cannot silently render English inside a Korean one.
 */
export function FinalCta({
  heading,
  body,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Section tone="surface" className="border-t border-line">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="headline text-2xl font-bold text-ink sm:text-3xl">
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
