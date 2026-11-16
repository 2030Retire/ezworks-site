import Link from 'next/link';
import forms from './forms-data.json';
import type { Locale } from './data';
import { localizePath } from './Site';

/**
 * ★★ **양식 라이브러리** (2026-11-16).
 *
 * ⛔⛔ 이 페이지가 있는 이유는 **우리가 덮어쓰지 않기 위해서**다.
 *   이미 자기 회의록 양식·로고를 넣어 쓰는 사람이 있다. 우리가 고친 양식을 자동으로
 *   밀어넣으면 그 사람 것이 사라진다. ▶ 그래서 **알리고, 받는 것은 본인이 고른다.**
 *
 * ⚠️ `forms-data.json` 과 `public/forms/*.html` 은 **손으로 쓰지 않는다** —
 *   EZVoice 저장소의 `tools/export_forms.py` 가 앱 안의 원본에서 내보낸다.
 *   둘이 갈라지면 "웹에서 받은 양식이 앱 것보다 낡는" 사고가 된다.
 */
type Row = { slug: string; title: string; pack: string; blurb: string; bytes: number; sha256: string };

const copy = {
  en: {
    eyebrow: 'EZHaru Recorder',
    title: 'Form templates',
    lede: 'A form tells the recorder what to write down. Pick one, change anything you like, and bring it into the app.',
    trust: 'Yours stays yours',
    trustBody: 'Once you change a form, we never replace it. Updates are offered here; applying one is always your choice.',
    back: 'Back to Recorder',
    how: 'How to use one',
    steps: [
      'Download a template, or open it first to see what it asks for.',
      'Change the wording, add your own sections, drop in your logo — it is an ordinary HTML file.',
      'In the app, open the category, tap Form, then Import from a file.',
    ],
    note: 'The app reads only the {{ }} markers. Everything else in the file is yours and comes back out untouched.',
    preview: 'Open',
    download: 'Download',
    size: 'KB',
  },
  ko: {
    eyebrow: 'EZHaru Recorder',
    title: '양식 템플릿',
    lede: '양식은 녹음기에게 무엇을 적을지 알려 줍니다. 하나 고르고, 원하는 대로 고쳐서, 앱에 넣으세요.',
    trust: '고치신 양식은 그대로 둡니다',
    trustBody: '한 번 손대신 양식은 저희가 절대 바꾸지 않습니다. 새 양식은 여기에 올려 두고, 바꿀지는 늘 본인이 정합니다.',
    back: 'Recorder 로 돌아가기',
    how: '쓰는 방법',
    steps: [
      '템플릿을 받습니다. 먼저 열어 무엇을 묻는지 봐도 됩니다.',
      '문구를 고치고, 필요한 항목을 더하고, 회사 로고를 넣으세요 — 그냥 HTML 파일입니다.',
      '앱에서 카테고리를 열고 Form → Import from a file 을 고릅니다.',
    ],
    note: '앱이 읽는 것은 {{ }} 표식뿐입니다. 파일의 나머지는 그대로 두었다가 그대로 돌려드립니다.',
    preview: '열어 보기',
    download: '받기',
    size: 'KB',
  },
} as const;

export function FormsPage({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale];
  const rows = forms as Row[];
  // ⛔ 업종별로 묶는다 — 목록이 다섯이어도 "내 업종" 을 먼저 찾게 된다.
  const packs = Array.from(new Set(rows.map(r => r.pack)));
  return (
    <article className="legal-page forms-page">
      <header className="legal-hero">
        <div className="shell legal-hero-inner">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="forms-lede">{t.lede}</p>
          </div>
          <div className="legal-trust-card">
            <span className="legal-shield" aria-hidden="true">✓</span>
            <div><strong>{t.trust}</strong><p>{t.trustBody}</p></div>
          </div>
        </div>
      </header>
      <div className="shell legal-layout">
        <aside className="legal-aside">
          <Link className="legal-back" href={localizePath(locale, '/products/recorder/')}>← {t.back}</Link>
          <h2 className="forms-how">{t.how}</h2>
          <ol className="forms-steps">{t.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
          <p className="forms-note">{t.note}</p>
        </aside>
        <div className="legal-content">
          {packs.map(pack => (
            <section key={pack} className="forms-section">
              <h2>{pack}</h2>
              <ul className="forms-grid">
                {rows.filter(r => r.pack === pack).map(r => (
                  <li key={r.slug} className="form-card">
                    <h3>{r.title}</h3>
                    <p>{r.blurb}</p>
                    <p className="form-meta">{r.slug} · {Math.round(r.bytes / 1024)} {t.size}</p>
                    <div className="form-actions">
                      {/* ⛔ `download` 속성이 있어야 브라우저가 화면에 그리는 대신 저장한다. */}
                      <a className="button button-small" href={`/forms/${r.slug}`} download>{t.download}</a>
                      <a className="button secondary button-small" href={`/forms/${r.slug}`} target="_blank" rel="noreferrer">{t.preview}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
