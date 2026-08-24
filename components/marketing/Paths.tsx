import { Section, SectionHeading } from '@/components/layout/Section';
import { ArrowLink } from '@/components/ui/Button';
import { getContent } from '@/content';
import { localizePath } from '@/lib/routes';
import type { Lang } from '@/content/types';

/**
 * Three ways into the argument. The home page is an entrance, not the whole
 * case — each of these carries one part of it at full length.
 */
export function Paths({ lang }: { lang: Lang }) {
  const { paths } = getContent(lang).home;

  return (
    <Section>
      <SectionHeading eyebrow={paths.eyebrow} heading={paths.heading} lede={paths.lede} />
      <div className="mt-10 grid gap-x-10 md:grid-cols-3">
        {paths.items.map((item) => (
          <div key={item.href} className="flex flex-col border-t border-line-strong py-7">
            <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">{item.title}</h3>
            <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-soft">{item.body}</p>
            <ArrowLink href={localizePath(lang, item.href)} className="mt-5">
              {item.linkLabel}
            </ArrowLink>
          </div>
        ))}
      </div>
    </Section>
  );
}
