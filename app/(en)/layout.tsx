import type { Metadata } from 'next';
import '../globals.css';
import { SiteBody, SiteHead } from '@/components/layout/SiteShell';
import { rootMetadata } from '@/lib/seo';

/**
 * English root layout.
 *
 * English is the default locale and is served at the site's original,
 * unprefixed URLs — `/`, `/services/`, `/haru/privacy/` and so on. Those paths
 * must not move: `/haru/privacy/` is the policy URL registered with the Google
 * Play Store.
 *
 * Korean lives under `app/(ko)/ko/` with its own root layout, which is what
 * lets `<html lang>` differ per locale under a fully static export.
 */
export const metadata: Metadata = rootMetadata('en');

export const viewport = {
  themeColor: '#0063F9',
  width: 'device-width',
  initialScale: 1,
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The inline script in <SiteHead> adds `js` to <html> before React hydrates,
  // so the server HTML and the live DOM differ on this one element by design.
  // suppressHydrationWarning silences that specific attribute diff; it does not
  // weaken hydration checks on anything inside.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SiteHead />
      </head>
      <SiteBody lang="en">{children}</SiteBody>
    </html>
  );
}
