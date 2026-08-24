import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * An image whose file may not exist yet.
 *
 * The site is a fully static export, so a server component can check the file
 * at build time and render a labelled placeholder instead of a broken image.
 * Dropping the file into `public/` and rebuilding is the only step needed to
 * fill it in — no code change.
 *
 * The placeholder deliberately states the intended subject and aspect, so the
 * page reads as reserved space rather than as something missing.
 */

export type Slot = {
  /** Path under `public/`, e.g. `/photo/hero.jpg`. */
  src: string;
  /** Alt text — written now, so it is not forgotten when the file arrives. */
  alt: string;
  /** Shown in the placeholder: what belongs here. */
  subject: string;
};

function exists(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src));
  } catch {
    return false;
  }
}

export function ImageSlot({
  slot,
  ratio = 'aspect-[3/2]',
  sizes = '(min-width: 1024px) 640px, 100vw',
  className,
  priority,
  fallback,
}: {
  slot: Slot;
  /** Tailwind aspect class. Keep the same value once a file is chosen. */
  ratio?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Drawn in the slot's own palette until a photograph lands in `public/`. */
  fallback?: React.ReactNode;
}) {
  const present = exists(slot.src);

  return (
    <div className={cn('relative overflow-hidden bg-surface', ratio, className)}>
      {present ? (
        <Image
          src={slot.src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : fallback ? (
        <div className="absolute inset-0 [&>svg]:h-full [&>svg]:w-full">{fallback}</div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-line-strong p-6 text-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-line-strong"
          >
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <circle cx="8.5" cy="10" r="1.4" />
            <path d="M21 15l-5-4-4.5 5-2-1.5L3 19" />
          </svg>
          <span className="max-w-[28ch] text-[0.8125rem] leading-relaxed text-soft">
            {slot.subject}
          </span>
        </div>
      )}
    </div>
  );
}
