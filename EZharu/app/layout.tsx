import type { Metadata } from 'next';
import './globals.css';
import { SiteChrome } from '@/components/Chrome';

export const metadata: Metadata = {
  title: { default: 'EZHaru — Making every workday easier', template: '%s | EZHaru' },
  description: 'Practical software and automation for small companies — and the people who run them.',
  robots: { index: false, follow: false, nocache: true },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#075FEA' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
