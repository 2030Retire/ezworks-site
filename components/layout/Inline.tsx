import Link from 'next/link';

/**
 * Renders the tiny inline markup the legal dictionaries use: `**bold**` and
 * `[label](/path/)`. Nothing else is parsed, deliberately — this exists so the
 * policy documents can live in `content/` as data without giving translators
 * (or a future editor) a way to inject markup.
 */
const TOKEN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

export function Inline({
  text,
  linkClassName = 'font-medium text-brand underline underline-offset-4 hover:text-brand-hover',
}: {
  text: string;
  linkClassName?: string;
}) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(<b key={nodes.length}>{match[1]}</b>);
    } else if (/^https?:\/\//.test(match[3])) {
      // The policy documents cite Google's own policy pages. Open those in a
      // new tab so the reader does not lose their place in the document.
      nodes.push(
        <a
          key={nodes.length}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {match[2]}
        </a>,
      );
    } else {
      nodes.push(
        <Link key={nodes.length} href={match[3]} className={linkClassName}>
          {match[2]}
        </Link>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));

  return <>{nodes}</>;
}
