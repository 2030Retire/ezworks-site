import { Container } from './Container';

/** Standard top-of-page banner for interior pages. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-line bg-gradient-to-b from-tint/60 to-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="display mt-4 text-[1.95rem] font-bold text-ink sm:text-4xl lg:text-[2.7rem]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 text-lg leading-relaxed text-soft">{lede}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
