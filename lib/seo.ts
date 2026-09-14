import type { Metadata } from 'next';
import { getContent } from '@/content';
import { localeOpenGraph, type Lang, type PageMeta } from '@/content/types';
import { localizePath } from './routes';

/**
 * `alternates` for one locale-neutral route.
 *
 * Every page advertises both locales plus `x-default`, which always points at
 * the English URL — English is the default and is served unprefixed.
 */
export function alternatesFor(lang: Lang, route: string): Metadata['alternates'] {
  return {
    canonical: localizePath(lang, route),
    languages: {
      en: route,
      ko: localizePath('ko', route),
      'x-default': route,
    },
  };
}

/** Defaults inherited by every page in a locale's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const { site } = getContent(lang);
  const title = `${site.name} — ${site.tagline}`;
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s · ${site.name}` },
    description: site.description,
    applicationName: site.name,
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description: site.description,
      url: localizePath(lang, '/'),
      locale: localeOpenGraph[lang],
    },
    twitter: { card: 'summary', title, description: site.description },
    robots: { index: true, follow: true },
    alternates: alternatesFor(lang, '/'),
  };
}

/** Standard page metadata: title, description, alternates and Open Graph. */
export function pageMetadata(lang: Lang, route: string, meta: PageMeta): Metadata {
  const { site } = getContent(lang);
  return {
    // The home page title already contains the site name. English escapes the
    // layout's `%s · EZWorks` template by sharing a segment with the layout;
    // Korean sits one segment deeper, so it has to opt out explicitly for the
    // two locales to render the same shape.
    title: route === '/' ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: alternatesFor(lang, route),
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: meta.ogTitle ?? meta.title,
      description: meta.ogDescription ?? meta.description,
      url: localizePath(lang, route),
      locale: localeOpenGraph[lang],
    },
  };
}
