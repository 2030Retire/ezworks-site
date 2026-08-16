/**
 * Shared shapes for the locale dictionaries.
 *
 * Every user-facing string on the site lives in `content/en.ts` or
 * `content/ko.ts`; page and layout components only read them through
 * `getContent(lang)`.
 */

export const locales = ['en', 'ko'] as const;
export type Lang = (typeof locales)[number];

/** English is the default locale and is served without a path prefix. */
export const defaultLang: Lang = 'en';

/** `EN` / `한국어` — written in the language they switch to, never translated. */
export const localeLabels: Record<Lang, string> = {
  en: 'EN',
  ko: '한국어',
};

/** BCP 47 tags used for `<html lang>` and `hreflang`. */
export const localeHtmlLang: Record<Lang, string> = {
  en: 'en',
  ko: 'ko',
};

export const localeOpenGraph: Record<Lang, string> = {
  en: 'en_US',
  ko: 'ko_KR',
};

export type NavItem = { href: string; label: string };
export type NavGroup = { title: string; items: NavItem[] };

export type ProductStatus = 'private-alpha' | 'in-development' | 'early-access';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** One or two sentences for cards and list rows. */
  description: string;
  status: ProductStatus;
  /** Short qualifier shown next to the badge, e.g. platform. */
  statusNote?: string;
  features: { title: string; body: string }[];
  cta: { label: string; href: string };
  /** Detail page, when one exists. Cards link here; otherwise to the CTA. */
  href?: string;
  logo?: { src: string; alt: string };
  seoTitle: string;
  seoDescription: string;
};

export type Service = {
  slug: string;
  title: string;
  /** One line for the home page summary. */
  summary: string;
  /** Fuller explanation for /services/. */
  body: string;
  /** Concrete examples — what an engagement actually produces. */
  examples: string[];
};

/**
 * A policy document, expressed as data so both locales render through the same
 * component. Inline markup inside `text` is deliberately tiny: `**bold**` and
 * `[label](/path/)`. Nothing else is parsed.
 */
export type LegalBlock =
  | { kind: 'callout'; text: string }
  /**
   * Translation disclaimer. Links inside a `notice` are the one place hrefs are
   * NOT localized — the notice always points at the authoritative English text.
   */
  | { kind: 'notice'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'text'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  /** Renders the site contact address as a mailto link. */
  | { kind: 'contactEmail' };

export type LegalDoc = {
  title: string;
  effectiveDate: string;
  backHref: string;
  backLabel: string;
  blocks: LegalBlock[];
};

export type PageMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};
