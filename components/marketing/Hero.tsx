import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HeroDiagram } from './HeroDiagram';
import { getContent } from '@/content';
import type { Lang } from '@/content/types';

export function Hero({ lang }: { lang: Lang }) {
  const { hero } = getContent(lang).home;

  return (
    <section className="border-b border-line bg-gradient-to-b from-tint/60 to-white">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
          <div className="min-w-0">
            <h1 className="text-balance text-[2.25rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft sm:text-xl">
              {hero.subhead}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-6 text-sm text-soft">{hero.footnote}</p>
          </div>

          <div className="min-w-0 lg:pl-4">
            <HeroDiagram lang={lang} />
          </div>
        </div>
      </Container>
    </section>
  );
}
