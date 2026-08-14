import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about the process that costs you the most time, or ask for an EZHaru alpha invite. We read every message ourselves.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'Contact EZWorks',
    description:
      'Tell us about the process that costs you the most time, or ask for an EZHaru alpha invite.',
    url: '/contact/',
  },
};

const answers = [
  {
    q: 'What happens after you send this?',
    a: 'We read it ourselves — there is no sales team in between — and normally reply within a business day.',
  },
  {
    q: 'What is useful to include?',
    a: 'The process that annoys you most, roughly how many people touch it, and which tools it currently runs through. That is enough for a first honest answer.',
  },
  {
    q: 'Asking about an EZHaru invite?',
    a: 'Pick EZHaru above and say what you would be recording — meetings, site visits, classes. It helps us choose testers whose use we can actually support.',
  },
  {
    q: 'Do you publish pricing?',
    a: 'Not yet. What something costs depends on the scope, and we would rather scope it with you than post a number that fits nobody.',
  },
];

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-16 lg:py-20">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            Tell us what you would like to stop doing by hand.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-soft">
            A short description of the problem is enough to start. We will tell
            you honestly whether it is worth building away, and what it would
            take.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <aside className="lg:pt-4">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              Before you write
            </h2>
            <dl className="mt-6 space-y-6">
              {answers.map((item) => (
                <div key={item.q}>
                  <dt className="text-[0.9375rem] font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-t border-line pt-6 text-[0.9375rem] text-soft">
              Prefer plain email?{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover"
              >
                {site.email}
              </a>
            </p>
          </div>
        </aside>
      </div>
    </Container>
  );
}
