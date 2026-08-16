import { Section, SectionHeading } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

/** The three-part definition of the company: software / automation / implementation. */
export function Approach({ lang }: { lang: Lang }) {
  const { approach } = getContent(lang).home;

  return (
    <Section>
      <SectionHeading eyebrow={approach.eyebrow} heading={approach.heading} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {approach.items.map((item, i) => (
          <Reveal
            key={item.kicker}
            delay={i * 80}
            className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-[0_10px_30px_-14px_rgba(22,32,43,0.22)] sm:p-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-ink">
              {item.kicker}{' '}
              <span className="font-normal text-soft">{item.title}</span>
            </h3>
            <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-soft">
              {item.body}
            </p>
            <ArrowLink href={item.href} className="mt-5">
              {item.linkLabel}
            </ArrowLink>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
