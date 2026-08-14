import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { proof } from '@/content/home';

/**
 * Capability evidence. Anonymous by design — no client names, no logos, no
 * testimonials, no user or revenue numbers.
 */
export function Proof() {
  return (
    <Section tone="deep">
      <SectionHeading
        tone="deep"
        eyebrow={proof.eyebrow}
        heading={proof.heading}
        lede={proof.lede}
      />

      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {proof.systems.map((system, i) => (
          <Reveal
            as="li"
            key={system.title}
            delay={i * 80}
            className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7"
          >
            <span className="font-mono text-xs font-semibold text-white/60">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-base font-semibold leading-snug text-white">
              {system.title}
            </h3>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-white/75">
              {system.body}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-8">
        <h3 className="text-balance text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
          {proof.speed.title}
        </h3>
        <p className="mt-3 max-w-3xl text-[0.9375rem] leading-relaxed text-white/75">
          {proof.speed.body}
        </p>
      </Reveal>
    </Section>
  );
}
