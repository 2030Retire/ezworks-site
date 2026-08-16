import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function ContactPageView({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const page = content.pages.contact;
  const { site } = content;

  return (
    <Container className="py-14 sm:py-16 lg:py-20">
      <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-soft">{page.lede}</p>
          <div className="mt-10">
            <ContactForm strings={content.contactForm} email={site.email} />
          </div>
        </div>

        <aside className="lg:pt-4">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
              {page.asideTitle}
            </h2>
            <dl className="mt-6 space-y-6">
              {page.answers.map((item) => (
                <div key={item.q}>
                  <dt className="text-[0.9375rem] font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-t border-line pt-6 text-[0.9375rem] text-soft">
              {page.preferEmail}{' '}
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
