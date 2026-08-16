'use client';

import { usePathname } from 'next/navigation';
import { localeLabels, locales, type Lang } from '@/content/types';
import { localizePath, neutralPath } from '@/lib/routes';
import { cn } from '@/lib/cn';

/**
 * EN / 한국어 switcher.
 *
 * Switching keeps the reader on the same page: it strips the locale prefix off
 * the current pathname and re-adds the target one, so /services/ goes to
 * /ko/services/ rather than home.
 *
 * These are plain <a> elements on purpose. The two locales live under separate
 * root layouts (different <html lang>), so a real document load is what makes
 * the language attribute — and the screen-reader voice — actually change.
 */
export function LanguageSwitcher({
  lang,
  label,
  className,
}: {
  lang: Lang;
  /** Accessible name for the group, e.g. "Language" / "언어". */
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const base = neutralPath(pathname ?? '/');

  return (
    <nav aria-label={label} className={cn('shrink-0', className)}>
      <ul className="flex items-center gap-0.5">
        {locales.map((locale) => {
          const active = locale === lang;
          return (
            <li key={locale}>
              <a
                href={localizePath(locale, base)}
                hrefLang={locale}
                lang={locale}
                aria-current={active ? 'true' : undefined}
                className={cn(
                  'inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-2.5 text-sm font-semibold transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
                  active
                    ? 'bg-tint text-brand-hover'
                    : 'text-soft hover:bg-surface hover:text-ink',
                )}
              >
                {localeLabels[locale]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
