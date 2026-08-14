import Image from 'next/image';
import Link from 'next/link';
import { footerNav, site } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/ezworks-logo.png"
              alt={site.name}
              width={490}
              height={143}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-soft">
              Practical software and automation for small companies — and the
              people who run them.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-soft transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name} · {site.country}
          </p>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
