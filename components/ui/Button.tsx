import Link from 'next/link';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'onDeep';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[0.9375rem] font-semibold leading-none transition duration-200 min-h-[44px] text-center';

const variants: Record<Variant, string> = {
  // White on #0063F9 — 5.0:1.
  primary: 'bg-brand text-white hover:bg-brand-hover hover:-translate-y-px shadow-sm hover:shadow-md',
  secondary: 'border border-line bg-white text-ink hover:border-soft/50 hover:bg-surface',
  onDeep: 'bg-white text-brand-deep hover:bg-tint',
};

export function Button({
  href,
  variant = 'primary',
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className' | 'children'>) {
  const classes = cn(base, variants[variant], className);
  const isExternal = href.startsWith('mailto:') || href.startsWith('http');

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Text link with a trailing arrow, used to leave a card or section. */
export function ArrowLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand hover:text-brand-hover',
        className,
      )}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
