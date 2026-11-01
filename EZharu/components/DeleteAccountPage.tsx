import Link from 'next/link';
import data from './delete-account-data.json';
import { DeleteAccountWidget } from './DeleteAccountWidget';
import type { Locale } from './data';
import { localizePath } from './Site';

type Block =
  | { kind: 'callout' | 'notice' | 'heading' | 'text'; text: string }
  | { kind: 'list'; items: string[] };

type Document = {
  title: string;
  backHref: string;
  backLabel: string;
  blocks: Block[];
  widget: React.ComponentProps<typeof DeleteAccountWidget>['strings'];
};

const documents = data as Record<Locale, Document>;
const inlinePattern = /\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function destination(href: string) {
  if (href === '/haru/privacy/') return '/products/recorder/privacy/';
  if (href === '/haru/delete-account/') return '/products/recorder/delete-account/';
  return href;
}

function Inline({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;
  inlinePattern.lastIndex = 0;
  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    if (match[1]) parts.push(<strong key={match.index}>{match[1]}</strong>);
    else parts.push(<Link key={match.index} href={destination(match[3])}>{match[2]}</Link>);
    cursor = inlinePattern.lastIndex;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

export function DeleteAccountPage({ locale = 'en' }: { locale?: Locale }) {
  const doc = documents[locale];
  const ko = locale === 'ko';
  return (
    <article className="legal-page delete-account-page">
      <header className="legal-hero">
        <div className="shell legal-hero-inner">
          <div><p className="eyebrow">EZHaru Recorder</p><h1>{doc.title}</h1></div>
          <div className="legal-trust-card"><span className="legal-shield" aria-hidden="true">✓</span><div><strong>{ko ? '본인 확인 후 즉시 처리' : 'Verified, immediate deletion'}</strong><p>{ko ? 'Google 로그인으로 계정 소유권을 확인한 뒤 서버 데이터를 영구 삭제합니다.' : 'Google sign-in verifies ownership before server-side account data is permanently removed.'}</p></div></div>
        </div>
      </header>
      <div className="shell legal-layout">
        <aside className="legal-aside">
          <Link className="legal-back" href={localizePath(locale, '/products/recorder/privacy/')}>← {doc.backLabel}</Link>
          <p>{ko ? 'EZHaru Recorder 계정 삭제 요청 페이지입니다.' : 'Account deletion request for EZHaru Recorder.'}</p>
          <a href="mailto:Help@ezharu.co">Help@ezharu.co</a>
        </aside>
        <div className="legal-content">
          {doc.blocks.map((block, index) => {
            if (block.kind === 'notice') return <div className="legal-notice" role="note" key={index}><Inline text={block.text}/></div>;
            if (block.kind === 'callout') return <div className="legal-callout" key={index}><Inline text={block.text}/></div>;
            if (block.kind === 'heading') return <h2 key={index}>{block.text}</h2>;
            if (block.kind === 'text') return <p key={index}><Inline text={block.text}/></p>;
            if (block.kind === 'list') return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><Inline text={item}/></li>)}</ul>;
            return null;
          })}
          <DeleteAccountWidget strings={doc.widget}/>
        </div>
      </div>
    </article>
  );
}
