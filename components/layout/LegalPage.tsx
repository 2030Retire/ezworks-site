import Link from 'next/link';
import { Container } from './Container';

/** Shared shell and typography for the two policy pages. */
export function LegalPage({
  title,
  effectiveDate,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  effectiveDate: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[46rem]">
        <Link href={backHref} className="text-sm text-soft transition-colors hover:text-ink">
          ← {backLabel}
        </Link>

        <h1 className="mt-8 text-[1.875rem] font-bold leading-tight tracking-tight text-ink sm:text-[2.125rem]">
          {title}
        </h1>
        <p className="mt-2 text-sm text-soft">Effective date: {effectiveDate}</p>

        <div className="legal mt-10">{children}</div>
      </div>
    </Container>
  );
}

/** Section heading inside a policy document. */
export function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 text-xl font-bold tracking-tight text-ink first:mt-0">
      {children}
    </h2>
  );
}

export function LegalText({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-[0.9688rem] leading-[1.7] text-ink">{children}</p>;
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 space-y-2">{children}</ul>
  );
}

export function LegalItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[0.9688rem] leading-[1.7] text-ink">
      <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
      <span>{children}</span>
    </li>
  );
}

/** Highlighted summary box at the top of a policy. */
export function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-tint p-5 text-[0.9688rem] leading-[1.7] text-ink sm:p-6">
      {children}
    </div>
  );
}
