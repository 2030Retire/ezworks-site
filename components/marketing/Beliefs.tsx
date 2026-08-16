import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function Beliefs({ lang }: { lang: Lang }) {
  const { beliefs } = getContent(lang).home;

  return (
    <Section>
      <SectionHeading eyebrow={beliefs.eyebrow} heading={beliefs.heading} />

      <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
        {beliefs.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="border-t-2 border-brand pt-5">
            <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
