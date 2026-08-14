/** Minimal class-name joiner. No dependency needed for this site's scale. */
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}
