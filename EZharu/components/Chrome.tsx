'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Footer, Header } from './Site';

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const isKo = pathname === '/ko' || pathname.startsWith('/ko/');
  const locale = isKo ? 'ko' : 'en';
  const neutralPath = isKo ? (pathname.replace(/^\/ko/, '') || '/') : pathname;
  const alternateHref = isKo ? neutralPath : (pathname === '/' ? '/ko/' : `/ko${pathname}`);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <><Header locale={locale} alternateHref={alternateHref}/><main id="main">{children}</main><Footer locale={locale}/></>;
}
