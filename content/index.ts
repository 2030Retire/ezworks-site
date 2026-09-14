import { en, type Dictionary } from './en';
import { ko } from './ko';
import { defaultLang, type Lang } from './types';
import { localizePath } from '@/lib/routes';

export type { Dictionary } from './en';
export * from './types';

const dictionaries: Record<Lang, Dictionary> = { en, ko };

/**
 * Rewrite every navigation target for `lang`.
 *
 * Dictionaries store locale-neutral paths (`/services/`). Only keys named
 * `href` or ending in `Href` are treated as navigation; `src` and everything
 * else is left alone, so asset paths such as `/haru/ezharu-logo.png` are never
 * rewritten.
 */
function localizeHrefs<T>(value: T, lang: Lang): T {
  if (Array.isArray(value)) {
    return value.map((item) => localizeHrefs(item, lang)) as unknown as T;
  }
  if (value !== null && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      out[key] =
        typeof child === 'string' && (key === 'href' || key.endsWith('Href'))
          ? localizePath(lang, child)
          : localizeHrefs(child, lang);
    }
    return out as T;
  }
  return value;
}

const cache = new Map<Lang, Dictionary>();

/**
 * The whole content tree for one locale.
 *
 * English is returned untouched — it is the default locale and its paths are
 * already correct, which also guarantees the published English pages cannot
 * drift as a side effect of adding a language.
 */
export function getContent(lang: Lang): Dictionary {
  if (lang === defaultLang) return en;
  const hit = cache.get(lang);
  if (hit) return hit;
  const localized = localizeHrefs(dictionaries[lang], lang);
  cache.set(lang, localized);
  return localized;
}

/** Look up one product in a locale's catalogue. */
export function getProduct(lang: Lang, slug: string) {
  return getContent(lang).products.find((p) => p.slug === slug);
}

/**
 * Organization JSON-LD.
 * Only name / url / logo / email / slogan / description. Adding `address`,
 * `telephone`, `streetAddress` or `postalCode` here is forbidden — the
 * registered address is a private residence.
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: en.site.name,
  url: en.site.url,
  logo: `${en.site.url}/ezworks-logo.png`,
  email: en.site.email,
  slogan: en.site.tagline,
  description: en.site.description,
} as const;

/** Build a mailto: link with a prefilled subject. */
export function mailto(subject: string): string {
  return `mailto:${en.site.email}?subject=${encodeURIComponent(subject)}`;
}
