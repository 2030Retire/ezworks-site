'use client';

import { usePathname } from 'next/navigation';
import { localeLabels, locales, type Lang } from '@/content/types';
import { localizePath, neutralPath } from '@/lib/routes';
import { cn } from '@/lib/cn';

/**
 * Language switcher — a single link to the *other* locale, not a pair of
 * pills showing both.
 *
 * Showing both doubled the control's width, and at a 130% font scale on a
 * 360px screen that pushed the mobile menu button off the edge of the header.
 * One target is also the clearer affordance: the label names where you land.
 *
 * Switching keeps the reader on the same page — it strips the locale prefix
 * off the current pathname and re-adds the target one, so /services/ goes to
 * /ko/services/ rather than home.
 *
 * This is a plain <a> on purpose. The two locales live under separate root
 * layouts (different <html lang>), so a real document load is what makes the
 * language attribute — and the screen-reader voice — actually change.
 */
export function LanguageSwitcher({
  lang,
  label,
  className,
}: {
  lang: Lang;
  /** Accessible name stating where the link goes, e.g. "View this page in Korean". */
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const base = neutralPath(pathname ?? '/');
  const target = locales.find((locale) => locale !== lang) ?? lang;

  return (
    <a
      href={localizePath(target, base)}
      hrefLang={target}
      lang={target}
      aria-label={label}
      className={cn(
        'inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg px-3 text-sm font-semibold text-soft transition-colors hover:bg-surface hover:text-ink',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
        className,
      )}
    >
      {localeLabels[target]}
    </a>
  );
}
