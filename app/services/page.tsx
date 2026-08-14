import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/marketing/FinalCta';
import { ServicesView } from '@/components/marketing/ServicesView';
import { services } from '@/content/services';
import { engagementSteps, goodFit, notAFit } from '@/content/engagement';

export const metadata: Metadata = {
  title: 'Services — automation, integration and implementation',
  description:
    'We analyse how your process actually runs, then automate the manual hand-offs: workflow automation, systems integration, process digitization, operational reporting, and the implementation to make it stick.',
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'EZWorks Services — automation, integration and implementation',
    description:
      'Workflow automation, systems integration, process digitization, operational reporting, and implementation for companies without an IT department.',
    url: '/services/',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesView />

      <PageHeader
        eyebrow="Services"
        title="We take the manual hand-offs out of the work you already do."
        lede="Most small companies do not need to be reinvented. They need the three or four places where information gets carried by hand to stop needing a person. That is the work: analyse the process, automate what should not be manual, connect the systems, and stay until people are using it."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/">Talk to us</Button>
          <Button href="#how-it-works" variant="secondary">
            How an engagement runs
          </Button>
        </div>
      </PageHeader>

      {/* What we do — driven by content/services.ts */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          heading="Five kinds of work, usually in combination."
          lede="An engagement rarely lands in exactly one of these. Automating a process almost always means connecting something to something else, and it is never finished until people are actually using it."
        />

        <div className="mt-12 space-y-6">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 50}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            >
              <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-ink sm:text-[1.375rem]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
                    {service.body}
                  </p>
                </div>
                <div className="rounded-xl bg-surface p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    In practice
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {service.examples.map((example) => (
                      <li key={example} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-soft">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[0.9375rem] leading-relaxed text-soft">
          We connect with the systems your business already uses, including
          accounting software such as QuickBooks and the Microsoft 365 tools most
          teams already have open all day.
        </p>
      </Section>

      {/* How an engagement runs */}
      <Section id="how-it-works" tone="surface">
        <SectionHeading
          eyebrow="How it runs"
          heading="Small, working, and in your hands early."
          lede="The failure mode in this kind of work is a long build against a document. We would rather you be using something real in weeks and telling us what is wrong with it."
        />

        <ol className="mt-12 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {engagementSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 50} className="bg-white p-6 sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint font-mono text-xs font-bold text-brand-hover">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-soft">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Fit */}
      <Section>
        <SectionHeading
          eyebrow="Fit"
          heading="Who this works for — and who it does not."
          lede="Saying no to the wrong engagement early is cheaper for both of us than discovering it in month three."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h3 className="text-base font-semibold tracking-tight text-ink">
              A good fit
            </h3>
            <ul className="mt-4 space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="text-base font-semibold tracking-tight text-ink">
              Probably not us
            </h3>
            <ul className="mt-4 space-y-3">
              {notAFit.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-soft">
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0 text-soft" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 10h10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <FinalCta
        heading="Describe the process. We will tell you what it would take."
        body="No obligation and no pitch deck — just an honest read on whether the thing that annoys you every week is worth building away."
      />
    </>
  );
}
