import { Section, SectionHeading } from '@/components/layout/Section';
import { SeamGrid } from '@/components/layout/SeamGrid';
import { ArrowLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/content/services';

/** Home-page summary of every entry in `content/services.ts`. */
export function ServicesPreview() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Services"
        heading="Or we build it around how you already work."
        lede="Most of what we do day to day is this: looking at a process a company already runs, and taking the manual parts out of it."
      />

      <SeamGrid columns={3} className="mt-12">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 60} className="bg-white p-6 sm:p-7">
            <h3 className="text-base font-semibold tracking-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-soft">
              {service.summary}
            </p>
          </Reveal>
        ))}
        <div className="flex items-center bg-white p-6 sm:p-7">
          <ArrowLink href="/services/">See how engagements work</ArrowLink>
        </div>
      </SeamGrid>
    </Section>
  );
}
