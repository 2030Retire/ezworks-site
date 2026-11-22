import Link from 'next/link';
import forms from './forms-data.json';
import type { Locale } from './data';
import { localizePath } from './Site';
import { formsCopy, slugId, type FormRow } from './forms-shared';

/**
 * ★★ **양식 한 장의 상세** (2026-11-22).
 *
 * ⛔⛔ **여기 적힌 항목은 손으로 쓴 것이 아니다.** 양식 파일 그 자체에서 뽑아
 *   `forms-data.json` 으로 실려 온다(`tools/export_forms.py`).
 *   ▶ 손으로 쓰면 양식을 고친 날 이 페이지가 거짓말을 시작하고, **아무도 모른다.**
 */
export function FormDetail({ slug, locale = 'en' }: { slug: string; locale?: Locale }) {
  const t = formsCopy[locale];
  const row = (forms as FormRow[]).find(r => slugId(r.slug) === slug);
  if (!row) return null;

  return (
    <article className="legal-page forms-page">
      <header className="legal-hero">
        <div className="shell legal-hero-inner">
          <div>
            <p className="eyebrow">{row.pack}</p>
            <h1>{row.title}</h1>
            <p className="forms-lede">{row.blurb}</p>
            <div className="form-actions form-actions-hero">
              {/* ⛔ `download` 속성이 있어야 브라우저가 화면에 그리는 대신 저장한다. */}
              <a className="button button-small" href={`/forms/${row.slug}`} download>{t.download}</a>
              {/* ★ 채워진 모습 — ⛔ 받는 파일이 아니다. 빈 템플릿을 보여 주면 칸 이름만 보여
                     무엇을 받는 건지 알 수 없다(2026-11-22 Hoon). */}
              {row.sample ? (
                <a className="button secondary button-small" href={`/forms/${row.slug.replace('.html', '-sample.html')}`} target="_blank" rel="noreferrer">{t.sample}</a>
              ) : null}
              <a className="button secondary button-small" href={`/forms/${row.slug}`} target="_blank" rel="noreferrer">{t.preview}</a>
            </div>
            {row.sample ? <p className="forms-note" style={{ marginTop: '10px' }}>{t.sampleHint}</p> : null}
          </div>
          <div className="legal-trust-card">
            <span className="legal-shield" aria-hidden="true">✓</span>
            <div><strong>{t.trust}</strong><p>{t.trustBody}</p></div>
          </div>
        </div>
      </header>

      <div className="shell legal-layout">
        <aside className="legal-aside">
          <Link className="legal-back" href={localizePath(locale, '/products/recorder/forms/')}>← {t.backList}</Link>
          <h2 className="forms-how">{t.how}</h2>
          <ol className="forms-steps">{t.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
          <p className="forms-note">{t.note}</p>
          <h2 className="forms-how" style={{ marginTop: '1.4rem' }}>{t.fileFacts}</h2>
          <p className="forms-note" style={{ marginTop: 0 }}>
            {t.size}: {Math.round(row.bytes / 1024)} KB<br />
            {t.checksum}: <code>{row.sha256.slice(0, 12)}</code>
          </p>
        </aside>

        <div className="legal-content">
          <h2>{t.whatItAsks}</h2>
          <p className="forms-note" style={{ marginTop: 0 }}>{t.repeatsHint}</p>
          {row.sections.map((s, i) => (
            <section key={i} className="form-section">
              {s.title ? <h3>{s.title}</h3> : null}
              <ul className="form-fields-list">
                {s.fields.map((f, j) => (
                  <li key={j}>
                    {f.label}
                    {f.repeated ? <span className="form-repeat">{t.repeats}</span> : null}
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

/** 정적 내보내기용 — 양식이 늘면 페이지도 저절로 늘어난다. */
export function formSlugs(): string[] {
  return (forms as FormRow[]).map(r => slugId(r.slug));
}
