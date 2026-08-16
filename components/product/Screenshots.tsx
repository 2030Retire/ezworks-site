import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

/**
 * Phone screenshots for a product page.
 *
 * The image paths are reserved and may not exist yet. This is a server
 * component in a fully static export, so we can check the file at build time
 * and render a framed placeholder instead of a broken image. Dropping the PNG
 * into `public/` and rebuilding is the only step needed to fill it in.
 */
export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

function exists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

export function Screenshots({
  items,
  placeholderLabel,
}: {
  items: readonly Screenshot[];
  placeholderLabel: string;
}) {
  return (
    <ul className="grid gap-6 sm:grid-cols-3">
      {items.map((shot) => {
        const present = exists(shot.src);
        return (
          <li key={shot.src}>
            <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[240px] overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-b from-tint to-surface shadow-[0_10px_30px_-14px_rgba(22,32,43,0.25)]">
              {present ? (
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-5 text-center">
                  <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#5A6B7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="8.5" cy="10" r="1.5" />
                    <path d="M21 15l-5-4-4.5 5-2-1.5L3 19" />
                  </svg>
                  <span className="text-xs font-medium text-soft">
                    {placeholderLabel}
                  </span>
                </div>
              )}
            </div>
            <p className="mt-3 text-center text-sm text-soft">{shot.caption}</p>
          </li>
        );
      })}
    </ul>
  );
}
