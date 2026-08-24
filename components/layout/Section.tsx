import { cn } from '@/lib/cn';
import { Container } from './Container';

type Tone = 'default' | 'surface' | 'deep';

const toneClass: Record<Tone, string> = {
  default: 'bg-white text-ink',
  surface: 'bg-surface text-ink',
  // White on #0B1B2E — 15.5:1.
  deep: 'bg-brand-deep text-white',
};

/** Vertical rhythm + background tone for a page section. */
export function Section({
  id,
  tone = 'default',
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      // Same-tone neighbours get a hairline and tighter top padding in CSS.
      // A change of background is itself a boundary, so generous padding reads
      // as breathing room there; with no change it reads as a hole.
      data-tone={tone}
      className={cn('py-16 sm:py-20 lg:py-28', toneClass[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading + optional lede, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  heading,
  lede,
  tone = 'default',
  align = 'left',
  className,
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
  tone?: Tone;
  align?: 'left' | 'center';
  className?: string;
}) {
  const onDeep = tone === 'deep';
  return (
    <div
      className={cn(
        // Wide enough that a two-line lede does not read as a stranded column.
        // Sections that need a tighter measure pass their own max-w.
        'max-w-[46rem]',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.14em]',
            onDeep ? 'text-white/70' : 'text-brand',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'headline text-2xl font-bold sm:text-3xl lg:text-[2.05rem]',
          eyebrow && 'mt-3',
          onDeep ? 'text-white' : 'text-ink',
        )}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-[1.0625rem]',
            onDeep ? 'text-white/80' : 'text-soft',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
