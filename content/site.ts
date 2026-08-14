/**
 * Single source of truth for site-wide identity, navigation and metadata.
 *
 * Deliberately absent: postal address, phone number, legal entity name.
 * Country granularity is the maximum we publish (see JSON-LD below).
 */

export const site = {
  name: 'EZWorks',
  tagline: 'Work, Simplified.',
  description:
    'EZWorks builds practical software and automation for small companies — and the people who run them.',
  url: 'https://ezworks.co',
  email: 'Help@ezworks.co',
  /** Country only. Never a street, city, postal code or phone number. */
  country: 'United States',
  copyrightYear: 2026,
} as const;

export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: '/services/', label: 'Services' },
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'About' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Company',
    items: [
      { href: '/about/', label: 'About' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
  {
    title: 'What we do',
    items: [
      { href: '/services/', label: 'Services' },
      { href: '/products/', label: 'Products' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { href: '/privacy/', label: 'Website privacy' },
      { href: '/haru/privacy/', label: 'EZHaru app privacy' },
    ],
  },
];

/**
 * Organization JSON-LD.
 * Only name / url / logo / email / country. Adding `address`, `telephone`,
 * `streetAddress` or `postalCode` here is forbidden — the registered address
 * is a private residence.
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/ezworks-logo.png`,
  email: site.email,
  slogan: site.tagline,
  description: site.description,
} as const;

/** Build a mailto: link with a prefilled subject. */
export function mailto(subject: string): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
