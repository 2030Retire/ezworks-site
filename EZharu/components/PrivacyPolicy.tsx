import Link from 'next/link';
import privacyData from './privacy-data.json';
import type { Locale } from './data';
import { localizePath } from './Site';

type LegalBlock =
  | { kind: 'callout' | 'notice' | 'heading' | 'text'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'contactEmail' };

type LegalDoc = {
  title: string;
  effectiveDate: string;
  backHref: string;
  backLabel: string;
  blocks: LegalBlock[];
};

const docs = privacyData as Record<Locale, LegalDoc>;

function policyHref(href: string) {
  if (href === '/haru/privacy/') return '/products/recorder/privacy/';
  // 2026-11-01: 삭제 페이지 정본은 ezharu.co — Play Data safety 의 삭제 URL 과 같아야 한다
  if (href === '/haru/delete-account/') return '/products/recorder/delete-account/';
  if (href === '/ko/haru/delete-account/') return '/ko/products/recorder/delete-account/';
  return href;
}

function InlineText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const pattern = /\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    if (match[1]) {
      parts.push(<strong key={match.index}>{match[1]}</strong>);
    } else {
      const href = policyHref(match[3]);
      const external = href.startsWith('http');
      parts.push(external
        ? <a key={match.index} href={href}>{match[2]}</a>
        : <Link key={match.index} href={href}>{match[2]}</Link>);
    }
    cursor = pattern.lastIndex;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

export function PrivacyPolicy({ locale = 'en' }: { locale?: Locale }) {
  const doc = docs[locale];
  const ko = locale === 'ko';

  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="shell legal-hero-inner">
          <div>
            <p className="eyebrow">EZHaru Recorder</p>
            <h1>{doc.title}</h1>
            <p className="legal-date">{ko ? '시행일' : 'Effective date'}: {doc.effectiveDate}</p>
          </div>
          <div className="legal-trust-card" aria-label={ko ? '개인정보 보호 원칙' : 'Privacy principles'}>
            <span className="legal-shield" aria-hidden="true">✓</span>
            <div>
              <strong>{ko ? '명확하고 투명한 데이터 처리' : 'Clear, transparent data handling'}</strong>
              <p>{ko ? 'Recorder가 무엇을 처리하고 어디에 저장하는지 정확히 설명합니다.' : 'Exactly what Recorder processes, where it goes, and how long it stays.'}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="shell legal-layout">
        <aside className="legal-aside">
          <Link href={localizePath(locale, '/products/recorder/')} className="legal-back">← {ko ? 'Recorder로 돌아가기' : 'Back to Recorder'}</Link>
          <p>{ko ? '이 정책은 EZHaru Recorder에 적용됩니다.' : 'This policy applies to EZHaru Recorder.'}</p>
          <a href="mailto:Help@ezharu.co">Help@ezharu.co</a>
        </aside>

        <div className="legal-content">
          {doc.blocks.map((block, index) => {
            if (block.kind === 'notice') return <div className="legal-notice" role="note" key={index}><InlineText text={block.text}/></div>;
            if (block.kind === 'callout') return <div className="legal-callout" key={index}><InlineText text={block.text}/></div>;
            if (block.kind === 'heading') return <h2 key={index}>{block.text}</h2>;
            if (block.kind === 'text') return <p key={index}><InlineText text={block.text}/></p>;
            if (block.kind === 'list') return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><InlineText text={item}/></li>)}</ul>;
            if (block.kind === 'table') return <div className="legal-table-wrap" key={index}><table><thead><tr>{block.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}><InlineText text={cell}/></td>)}</tr>)}</tbody></table></div>;
            return <p key={index}><a href="mailto:Help@ezharu.co">Help@ezharu.co</a></p>;
          })}
        </div>
      </div>
    </article>
  );
}
