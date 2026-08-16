import { Header } from './Header';
import { Footer } from './Footer';
import { getContent, organizationJsonLd } from '@/content';
import type { Lang } from '@/content/types';
import { localizePath } from '@/lib/routes';

/**
 * Everything inside <html> that both locales share.
 *
 * The two locales have separate root layouts so each can set its own
 * `<html lang>`; this component keeps the rest of the document identical
 * between them.
 */
export function SiteHead() {
  return (
    <>
      {/* Marks the document as JS-capable before first paint, so scroll
          reveals never hide content from users without JavaScript. */}
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.classList.add('js')",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
    </>
  );
}

export function SiteBody({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const { site, nav, ui } = getContent(lang);

  return (
    <body className="flex min-h-screen flex-col overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {ui.skipToContent}
      </a>
      <Header
        lang={lang}
        siteName={site.name}
        nav={nav.primary}
        ctaHref={localizePath(lang, '/contact/')}
        strings={{
          homeAriaLabel: ui.homeAriaLabel,
          primaryNavLabel: ui.primaryNavLabel,
          openMenu: ui.openMenu,
          closeMenu: ui.closeMenu,
          headerCta: ui.headerCta,
          languageLabel: ui.languageLabel,
        }}
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang={lang} />
    </body>
  );
}
