import { defaultLang, type Lang } from '@/content/types';

/**
 * The eight canonical, locale-neutral routes. English is served at these paths
 * exactly; Korean is served at the same paths under a `/ko` prefix.
 *
 * `/haru/privacy/` is the URL registered with the Google Play Store. It must
 * never move.
 */
export const routes = [
  '/',
  '/services/',
  '/products/',
  '/haru/',
  '/haru/privacy/',
  '/about/',
  '/contact/',
  '/privacy/',
] as const;

export type Route = (typeof routes)[number];

/** Prefix a locale-neutral path for `lang`. English is returned untouched. */
export function localizePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  if (!path.startsWith('/')) return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

/** Strip a locale prefix off a pathname, returning the locale-neutral route. */
export function neutralPath(pathname: string): string {
  if (!pathname) return '/';
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (withSlash === '/ko/') return '/';
  if (withSlash.startsWith('/ko/')) return withSlash.slice(3);
  return withSlash;
}
