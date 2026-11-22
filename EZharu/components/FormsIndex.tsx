'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import forms from './forms-data.json';
import type { Locale } from './data';
import { localizePath } from './Site';
import { formsCopy, slugId, type FormRow } from './forms-shared';

/**
 * ★★★ **양식 목록** (2026-11-22 · 목록 3요소).
 *
 * ⛔⛔ **양식은 계속 늘어난다.** 카드를 한 줄로 늘어놓으면 여섯 개까지는 괜찮고
 *   스무 개가 되면 못 찾는다 — 그때 고치려면 이미 받아 간 사람의 링크가 걸려 있다.
 * ▶ 그래서 처음부터 **검색 · 필터 · 정렬**을 둔다(글로벌 §목록 3요소).
 *
 * ⚠️ 세부는 여기 없다. 어떤 칸이 들어 있는지는 **상세 페이지**가 말한다 —
 *   목록에 다 펼치면 목록이 아니라 긴 문서가 된다.
 */
export function FormsIndex({ locale = 'en' }: { locale?: Locale }) {
  const t = formsCopy[locale];
  const rows = forms as FormRow[];
  const packs = useMemo(() => Array.from(new Set(rows.map(r => r.pack))).sort(), [rows]);

  const [query, setQuery] = useState('');
  const [pack, setPack] = useState<string | null>(null);
  const [sort, setSort] = useState<'name' | 'size'>('name');

  const shown = useMemo(() => {
    // ⛔ 멀티값 검색 — 콤마는 OR, 공백은 AND(글로벌 규칙).
    const q = query.trim().toLowerCase();
    const ors = q ? q.split(',').map(s => s.trim()).filter(Boolean) : [];
    const hit = (r: FormRow) => {
      if (!ors.length) return true;
      const hay = `${r.title} ${r.pack} ${r.blurb} ${r.slug}`.toLowerCase();
      return ors.some(or => or.split(/\s+/).filter(Boolean).every(term => hay.includes(term)));
    };
    return rows
      .filter(r => (pack ? r.pack === pack : true))
      .filter(hit)
      .sort((a, b) => (sort === 'name'
        ? a.title.localeCompare(b.title)
        : b.bytes - a.bytes));
  }, [rows, query, pack, sort]);

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
          <div className="forms-controls">
            <label className="forms-search">
              <span className="sr-only">{t.search}</span>
              <input
                id="forms-search"
                type="search"
                value={query}
                placeholder={t.search}
                onChange={e => setQuery(e.target.value)}
              />
            </label>
            <div className="forms-chips" role="group" aria-label={t.filterLabel}>
              <button
                type="button"
                className={`chip${pack === null ? ' on' : ''}`}
                aria-pressed={pack === null}
                onClick={() => setPack(null)}
              >{t.all}</button>
              {packs.map(p => (
                <button
                  key={p}
                  type="button"
                  className={`chip${pack === p ? ' on' : ''}`}
                  aria-pressed={pack === p}
                  onClick={() => setPack(p)}
                >{p}</button>
              ))}
            </div>
            <label className="forms-sort">
              <span>{t.sortLabel}</span>
              <select id="forms-sort" value={sort} onChange={e => setSort(e.target.value as 'name' | 'size')}>
                <option value="name">{t.sortName}</option>
                <option value="size">{t.sortSize}</option>
              </select>
            </label>
          </div>

          <p className="forms-count">{t.count(shown.length, rows.length)}</p>

          {shown.length === 0 ? (
            <p className="forms-none">{t.none}</p>
          ) : (
            <ul className="forms-list">
              {shown.map(r => (
                <li key={r.slug}>
                  <Link className="form-row" href={localizePath(locale, `/products/recorder/forms/${slugId(r.slug)}/`)}>
                    <span className="form-row-main">
                      <strong>{r.title}</strong>
                      <span className="form-row-blurb">{r.blurb}</span>
                    </span>
                    <span className="form-row-meta">
                      <span className="form-pack">{r.pack}</span>
                      <span className="form-fields">{t.fieldCount(countFields(r))}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

function countFields(r: FormRow): number {
  return r.sections.reduce((n, s) => n + s.fields.length, 0);
}
