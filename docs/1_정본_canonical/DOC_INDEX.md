# DOC_INDEX — ezworks-site 문서 지도

> 글로벌 원본: `~/.claude/CLAUDE.md` — 본 문서는 델타만 기술한다.
> 갱신: 2026-08-16

| 문서 | role | 글로벌 상속 | 상태 | 비고 |
|---|---|---|---|---|
| `RESEARCH_PHASE0.md` | canonical | — | ✅ 확정 | Gartner·OBM·Cialdini 조사 결과 + 인용 규칙 |
| `POSITIONING.md` | canonical | CLAUDE.md §신규착수, §UI언어 | ✅ **확정** (2026-08-20) | 한 문장·배제·세그먼트·증거3축·계약원칙 |
| `METHODOLOGY.md` | canonical | — | ✅ **확정** (2026-08-20) · 숫자만 SAMPLE | L0~L3 눈금 · 자가진단 5문항 · 4단계 · 받지 않는 일 |
| `EVIDENCE_LEDGER.md` | canonical | CLAUDE.md §보안불변식 | ✅ **확정** · 숫자만 SAMPLE | 문제모양×결과물 + 증거등급 + 금지목록 |
| `CONCEPT_REVIEW.html` | 시안(컨펌용) | — | ✅ 컨펌 완료 | Hoon 검토용 HTML 시각화 |
| `SITE_IA.md` | canonical | — | ⏳ **작성 중** | 사이트 구조 + 영/한 문구안 |

## 사이트 구현 문서 (Phase 2 — 컨셉 확정 후)
| 문서 | 상태 |
|---|---|
| 사이트 IA / 섹션 구조 | 🔵 진행 중 → `SITE_IA.md` |
| 영/한 문구안 | ⬜ 미착수 |

## 코드 정본
| 위치 | 역할 |
|---|---|
| `content/en.ts` · `content/ko.ts` | 사용자 노출 문구 단일 소스. `ko`는 `typeof en`으로 타입 강제 |
| `content/types.ts` | Product·Service·LegalDoc 등 스키마 |

## 대기 중인 작업 (컨셉 확정 후 재평가)
| ID | 내용 | 영향 |
|---|---|---|
| B2 | 방어적 문장 정리 ("로고 벽 대신", "가격은 아직" 등) | 컨셉 확정 후 |
| C1~C6 | Services 개편 (6개 카테고리 · SAP·M365 명시) | **METHODOLOGY 확정 후 재설계** |
| D1 | EZHaru 스크린샷 3장 (`public/haru/screen-*.png`) | 독립 — 언제든 |
| — | Play 스토어 등록정보 (앱 이름·설명·스크린샷) | 독립 |
| — | Play 패키지명 `com.ezworks.voice` 유지 여부 | ⚠️ 되돌리기 비용 상승 중 |
