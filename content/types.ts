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

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** One or two sentences for cards and list rows. */
  description: string;
  features: { title: string; body: string }[];
  cta: { label: string; href: string };
  /** Detail page, when one exists. Cards link here; otherwise to the CTA. */
  href?: string;
  logo?: { src: string; alt: string };
  seoTitle: string;
  seoDescription: string;
};

/**
 * A service area. Cases live inside the area they demonstrate rather than in a
 * section of their own — a capability claim and its evidence should not be a
 * click apart.
 */
export type Service = {
  slug: string;
  title: string;
  /** One line for listings. */
  summary: string;
  /** Fuller explanation. */
  body: string;
  /** When this is the right area to start in. */
  when: string[];
  /** What the engagement leaves behind. */
  outputs: string[];
  /** Real work. No client, industry or site is named. */
  cases: { title: string; body: string; result: string }[];
};

/** A problem stated the way it is lived, linked to the area that handles it. */
export type ProblemName = {
  title: string;
  note: string;
  /** Slug of the service area, used as an in-page anchor. */
  area: string;
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

/**
 * The public account-deletion page (`/haru/delete-account/`).
 *
 * `blocks` is the static explanation, rendered by the same legal renderer as a
 * policy document. `widget` is the copy for the interactive part — the Google
 * sign-in and the confirmation — which is a client component because the page
 * has to obtain a Google ID token in the browser.
 *
 * ⛔ There is no "email us your address" variant of this page. Identity on the
 * server is a one-way HMAC of the Google `sub` and no email is stored, so an
 * emailed request cannot be matched to an account. Sign-in is the only route.
 */
export type DeleteAccountDoc = {
  title: string;
  backHref: string;
  backLabel: string;
  blocks: LegalBlock[];
  widget: {
    heading: string;
    body: string;
    /** Stated before anything third-party loads, because nothing has yet. */
    scriptNote: string;
    /** Shown inside <noscript>; names the in-app route as the way through. */
    noScript: string;
    startButton: string;
    loadingScript: string;
    pressGoogleButton: string;
    signedInLabel: string;
    confirmWarning: string;
    confirmButton: string;
    cancelButton: string;
    deleting: string;
    doneHeading: string;
    doneBody: string;
    inAppNote: string;
    errors: {
      signIn: string;
      /** Reaching the service failed — most likely CORS or the network. */
      network: string;
      /** The ID token was rejected or has expired. */
      auth: string;
      generic: string;
    };
  };
};

export type PageMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};
