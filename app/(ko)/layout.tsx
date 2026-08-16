import type { Metadata } from 'next';
import '../globals.css';
import { SiteBody, SiteHead } from '@/components/layout/SiteShell';
import { rootMetadata } from '@/lib/seo';

/**
 * Korean root layout. Everything under it is served from `/ko/…`.
 *
 * A second root layout (rather than a `[lang]` segment) is what allows
 * `<html lang="ko">` while leaving the English URLs exactly where they were.
 */
export const metadata: Metadata = rootMetadata('ko');

export const viewport = {
  themeColor: '#0063F9',
  width: 'device-width',
  initialScale: 1,
};

export default function KoreanRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <SiteHead />
      </head>
      <SiteBody lang="ko">{children}</SiteBody>
    </html>
  );
}
