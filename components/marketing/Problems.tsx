import { Section, SectionHeading } from '@/components/layout/Section';
import { SeamGrid } from '@/components/layout/SeamGrid';
import { Reveal } from '@/components/ui/Reveal';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function Problems({ lang }: { lang: Lang }) {
  const { problems } = getContent(lang).home;

  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow={problems.eyebrow}
        heading={problems.heading}
        lede={problems.lede}
      />

      <SeamGrid columns={3} as="ul" itemAs="li" className="mt-12">
        {problems.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 60} className="bg-white p-6">
            <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-soft">
              {item.body}
            </p>
          </Reveal>
        ))}
      </SeamGrid>

      <p className="mt-8 max-w-2xl text-base font-medium text-ink sm:text-lg">
        {problems.closing}
      </p>
    </Section>
  );
}
