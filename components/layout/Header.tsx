'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { primaryNav, site } from '@/content/site';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex max-w-content items-center gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/ezworks-symbol.png"
            alt=""
            width={190}
            height={205}
            className="h-8 w-auto"
            priority
          />
          <span className="text-[1.0625rem] font-bold tracking-tight text-ink">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active = pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-lg px-3 py-2 text-[0.9375rem] font-medium transition-colors',
                      active ? 'text-ink' : 'text-soft hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto hidden md:ml-4 md:block">
          <Button href="/contact/" className="px-4 py-2.5">
            Talk to us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-ink md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {open ? (
              <>
                <path d="M5 5l10 10" />
                <path d="M15 5L5 15" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 10h14" />
                <path d="M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-line bg-white md:hidden"
        >
          <ul className="mx-auto flex max-w-content flex-col px-5 py-2 sm:px-6">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button href="/contact/" className="w-full">
                Talk to us
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
