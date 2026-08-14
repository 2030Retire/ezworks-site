import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/layout/Section';
import { Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/marketing/FinalCta';
import { beliefs, proof } from '@/content/home';

export const metadata: Metadata = {
  title: 'About',
  description:
    'EZWorks is an independent software studio building practical tools and automation for companies under 100 people — and for the people who run them.',
  alternates: { canonical: '/about/' },
  openGraph: {
    title: 'About EZWorks',
    description:
      'An independent software studio building practical tools and automation for small companies without an IT department.',
    url: '/about/',
  },
};

const principles = [
  {
    title: 'We start from the week, not the roadmap',
    body: 'The useful question is never "what could this system do?" It is "what did somebody do by hand five times this week, that they should not have had to?" Everything we build starts from an answer to that.',
  },
  {
    title: 'Small enough to finish',
    body: 'A scope that can be built, delivered and actually adopted beats a scope that impresses in a meeting. If something cannot be useful within weeks, we would rather cut it down than start it big.',
  },
  {
    title: 'We say when something is not worth building',
    body: 'Sometimes the honest answer is that a change in how you already use a tool solves the problem, and we should not be paid to build anything. Saying so early is the cheapest thing we can do for you.',
  },
  {
    title: 'The rollout is part of the work',
    body: 'Software nobody adopted is not a delivery. Migration, permissions, training and the first weeks of real use are inside the job, not a phase you are left to run alone.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An independent studio for companies that run on other people’s spare time."
        lede="EZWorks builds practical software for small companies — and, just as much, for the people who run them. Our customers are typically under 100 people with no IT department, where the person who would fix the process is also the person doing the work."
      />

      <Section>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <div className="max-w-prose">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Why we work on this
            </h2>
            <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-soft">
              <p>
                Large companies solve operational drag by hiring for it. A
                thirty-person company cannot: the tedious middle of the work —
                the retyping, the chasing, the monthly rebuild of the same
                report — lands on whoever has capacity, usually the person least
                able to spare it.
              </p>
              <p>
                Software for that gap has generally been priced and shaped for
                somebody else. It arrives as a platform, needs a specialist to
                configure, and asks a company of thirty to work like a company of
                three thousand. So most small companies stay on email and
                spreadsheets, which work fine right up until they do not.
              </p>
              <p>
                We build the smaller thing instead: one tedious job removed
                properly, in your own systems, in weeks. Then the next one, only
                if the first one earned it.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              Two halves of the same job
            </h2>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-base font-semibold text-ink">Products</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">
                  Software we build and maintain ourselves, for problems that look
                  the same across many small companies.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold text-ink">Services</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">
                  Analysis, automation, integration and implementation for the
                  parts of your process that are specific to you. This is most of
                  what we do day to day.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-soft">
              Neither is a side line. The products come out of the same problems
              we keep meeting in the services work.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="How we work" heading="Four habits we do not trade away." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={i * 70}
              className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            >
              <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
                {principle.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

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

      <Section tone="deep">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {proof.eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {proof.speed.title}
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/80">
            {proof.speed.body}
          </p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
            We are deliberately quiet about the customers behind our work, so what
            we can show you is the work itself: a multi-tenant expense and
            approval platform, a multi-location membership and billing platform
            for a martial-arts school operator, and an AI voice recorder.
          </p>
        </div>
      </Section>

      <FinalCta
        heading="If this sounds like your company, say hello."
        body="Tell us what the worst repeating part of your week is. We will tell you plainly whether we can help."
      />
    </>
  );
}
