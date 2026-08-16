import Link from 'next/link';
import { Container } from './Container';
import { Inline } from './Inline';
import type { LegalDoc } from '@/content/types';

/** Shared shell and typography for the policy pages. */
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
        <p className="mt-2 text-sm text-soft">{effectiveDate}</p>

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
  return <ul className="mt-3 space-y-2">{children}</ul>;
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

/**
 * "This is a convenience translation" banner. Only the Korean documents carry
 * one, and its link intentionally points at the authoritative English page —
 * which is why `Inline` is given an unlocalized href here.
 */
export function LegalNotice({ text }: { text: string }) {
  return (
    <p
      role="note"
      className="mb-6 rounded-xl border border-line bg-surface p-4 text-[0.9063rem] leading-[1.7] text-soft sm:p-5"
    >
      <Inline text={text} />
    </p>
  );
}

/**
 * Renders a policy document from `content/`. Both locales go through this, so
 * the English wording lives in exactly one place and cannot drift.
 */
export function LegalDocView({
  doc,
  email,
  effectiveDateLabel,
}: {
  doc: LegalDoc;
  email: string;
  /** e.g. "Effective date:" — prepended to the date, or omitted when empty. */
  effectiveDateLabel: string;
}) {
  return (
    <LegalPage
      title={doc.title}
      effectiveDate={
        effectiveDateLabel ? `${effectiveDateLabel} ${doc.effectiveDate}` : doc.effectiveDate
      }
      backHref={doc.backHref}
      backLabel={doc.backLabel}
    >
      {doc.blocks.map((block, i) => {
        switch (block.kind) {
          case 'notice':
            return <LegalNotice key={i} text={block.text} />;
          case 'callout':
            return (
              <LegalCallout key={i}>
                <p>
                  <Inline text={block.text} />
                </p>
              </LegalCallout>
            );
          case 'heading':
            return <LegalHeading key={i}>{block.text}</LegalHeading>;
          case 'text':
            return (
              <LegalText key={i}>
                <Inline text={block.text} />
              </LegalText>
            );
          case 'list':
            return (
              <LegalList key={i}>
                {block.items.map((item) => (
                  <LegalItem key={item}>
                    <Inline text={item} />
                  </LegalItem>
                ))}
              </LegalList>
            );
          case 'table':
            return (
              <div key={i} className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[34rem] border-collapse text-[0.9063rem]">
                  <thead>
                    <tr>
                      {block.headers.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="border border-line bg-surface p-3 text-left align-top font-semibold text-ink"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]}>
                        <td className="border border-line p-3 align-top font-medium text-ink">
                          {row[0]}
                        </td>
                        {row.slice(1).map((cell, c) => (
                          <td
                            key={c}
                            className="border border-line p-3 align-top leading-relaxed text-soft"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'contactEmail':
            return (
              <LegalText key={i}>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover"
                >
                  {email}
                </a>
              </LegalText>
            );
        }
      })}
    </LegalPage>
  );
}
