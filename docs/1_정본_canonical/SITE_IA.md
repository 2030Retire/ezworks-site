# SITE_IA — 사이트 구조와 문구안

> 글로벌 원본: `~/.claude/CLAUDE.md` — 본 문서는 델타만 기술한다.
> 작성: 2026-08-20 · 상태: **Hoon 컨펌 대기**
> 근거: `POSITIONING.md` · `METHODOLOGY.md` · `EVIDENCE_LEDGER.md` (전부 확정)

---

## 0. 결정된 전제

| 항목 | 값 |
|---|---|
| 한 문장 | AI가 붙을 수 있는 상태로 회사를 만들고, 그다음에 붙인다 |
| 주 CTA | **자가진단** (← `Talk to us` 아님) |
| 섹션 순서 | OBM — Open → Believe → Move |
| 가격 | **A안** — 진단만 공개, 구축은 레벨별 기간만 |
| 숫자 | `[SAMPLE]` 유지 (실값 나중에) |
| 라우트 | **8개 유지.** 새 페이지 만들지 않는다 (아래 §1 참조) |

### 태그라인은 그대로 둔다
`Work, Simplified.` 는 **브랜드 라인**이다 (로고 이미지에 각인돼 있다).
H1은 캠페인 메시지라 다른 문장을 쓴다. 둘은 층이 다르므로 충돌하지 않는다.

---

## 1. 자가진단을 어디에 두나 — 새 페이지를 만들지 않는다

원 브리프의 **8개 라우트 유지** 규칙을 지킨다. 자가진단은 **홈 안의 섹션**으로 넣고,
`/services/` 상단에도 같은 컴포넌트를 재사용한다.

### 유예 계약 (`/readiness/` 독립 페이지)
| | |
|---|---|
| **무엇을** | 자가진단을 독립 라우트로 승격 |
| **언제까지** | 홈 인라인 버전의 완료율·문의 전환을 3개월 관찰한 뒤 |
| **왜 그때까지 안전한가** | 인라인이어도 앵커 링크(`/#readiness`)로 공유 가능. 라우트 승격은 컴포넌트 이동이라 반나절 |
| **왜 다른 걸 먼저** | 페이지를 늘리는 것보다 **문항이 맞는지**가 먼저다. 문항이 틀리면 라우트가 있어도 무용 |

---

## 2. 홈 섹션 순서 (변경)

```
기존:  Hero → 문제 → 접근3단 → 제품 → 서비스 → 신조 → 증거 → CTA
신규:  Hero → 자가진단 → 레벨 → 방법론 → 진단상품 → 할수있는것
       → 함께 일하는 방식 → 속도 → 제품 → CTA
```

| # | 섹션 | OBM | 비고 |
|---|---|---|---|
| 1 | Hero | O① 궁금 + O② 갈등 | 환상 걷기를 Hero 안에 흡수 (별도 섹션 안 만듦 — 남 비판이 길어지면 억울함으로 읽힘) |
| 2 | **자가진단** | O② 갈등 | ⭐ 사이트의 심장 |
| 3 | 레벨 L0~L3 | O③ 필요 | Gartner 60% 여기에 |
| 4 | 방법론 4단계 | B 신뢰 | |
| 5 | 진단 상품 | B 신뢰 | 정액·기간·**전액 차감** |
| 6 | 할 수 있는 것 | B 신뢰 | 문제 모양 + 다루는 시스템 |
| 7 | 함께 일하는 방식 | B 신뢰 | 계약 원칙 + 받지 않는 일 (합침) |
| 8 | 속도 | B 신뢰 | 6일 + SAMPLE |
| 9 | 제품 | — | 축소. 카드 2개 한 줄 |
| 10 | Final CTA | M 행동 | |

### 없어지는 것
- **"접근 3단"(Software/Automation/Implementation)** → 방법론 4단계가 대체. 중복이다
- **"What we believe" 3원칙** → `/about/`으로 이전. 홈에서는 계약 원칙이 그 역할을 한다
- **"문제 6개"** → 자가진단 5문항이 같은 일을 더 잘한다 (읽기 → 답하기)

---

## 3. 홈 문구 — 영문

### ① Hero
```
H1        AI can't fix a process nobody wrote down.

SUB       So we write it down first, then automate it. Most companies skip
          that step — and Gartner expects 60% of AI projects without
          AI-ready data to be abandoned.

CTA 1     Check your readiness — 2 minutes
CTA 2     How we work

FOOT      For teams with no IT department to lean on — the whole company,
          or just the office you run.
```

### ② 자가진단
```
EYEBROW   Where you actually are
H2        Five questions. Then you'll know which project comes first.

LEDE      There is no wrong answer here, and nothing to submit. The result
          is yours whether or not you ever talk to us.

Q1        Could you explain how this process works, on paper?
Q2        Is it defined what goes in and what comes out at each step?
Q3        If the person who runs it left today, could someone else take over?
Q4        Can you pull the data you need from one place?
Q5        Can you see last month's volume right now?

RESULT    You look like L1 — Written down, sort of.
          Your first project is not AI. It is getting to L2. Once that is
          done, the AI part takes weeks.

AFTER     See what a diagnosis includes  →
```

### ③ 레벨
```
EYEBROW   The ladder
H2        Not a pass or a fail. A level.

LEDE      Every company sits somewhere on this. Where you sit decides what
          your first project should be — and how long it takes.

L0  In someone's head      The process only exists in people. It runs on the
                           owner's memory and a few key staff.
                           → First project: define it
L1  Written down, sort of   Documents exist but do not match reality. Data is
                           scattered across files and inboxes.
                           → First project: define it
L2  Defined                Inputs and outputs are clear at each step. Data
                           lives in one place.
                           → First project: automate
L3  Ready                  Your systems are already producing the data.
                           → AI attaches directly

NOTE      Levels borrow from CMMI's process axis and Gartner's notion of
          AI-ready data. We did not invent them; we compressed them to
          four for companies of your size.
```

### ④ 방법론
```
EYEBROW   How we work
H2        Four steps. You can stop after the first one.

1  Diagnosis      Two weeks. You get a level, the three bottlenecks, and a
                  list of what to do now, later, and not at all.
2  Define         We draw the process as it actually runs, not as it should.
                  Inputs and outputs fixed. Data into one place.
                  This is worth doing even if you never add AI.
3  Automate       Only what step 2 defined. Rules where rules work; AI only
                  where judgement is needed. One process at a time.
4  Hand over      Migration, accounts, permissions, training, and the first
                  weeks of real use. Software nobody adopted is not a delivery.
```

### ⑤ 진단 상품
```
EYEBROW   The diagnosis
H2        A fixed price, because the deliverable is fixed.

BODY      Everything after this depends on what we find. The diagnosis does
          not — so it costs what it costs, and you know before you start.

  Two weeks
  About three hours a week from one person on your side
  $2,400 flat                                            [SAMPLE]

CREDIT    If you go ahead with the build, the diagnosis fee comes off it in
          full. So the only way to lose money here is if we tell you not to
          proceed — and that answer is worth more than the fee.

AFTER-2   And what the build costs depends on one thing: where you started.

  L0  →  10–14 weeks     Pulling the process out from scratch
  L1  →  7–10 weeks      Closing the gap between what is written and what happens
  L2  →  4–6 weeks       Already defined; automation only
  L3  →  2–4 weeks       Attaching AI                            [SAMPLE]

CLOSE     We would rather say "seven to ten weeks, and four if you were at
          L2" than "it depends."
```

### ⑥ 할 수 있는 것
```
EYEBROW   What we build
H2        Named by the problem, not by the project.

(문제 모양 8~9행 — EVIDENCE_LEDGER §2 표 그대로. 증거 등급 포함)

SYSTEMS   We connect with the systems your business already runs on —
          SAP, Microsoft 365 and the Power Platform, accounting software
          including QuickBooks, and CRM.
```

### ⑦ 함께 일하는 방식
```
EYEBROW   Working with us
H2        Five promises that cost us something.

LEDE      A promise that costs nothing tells you nothing. Here is what each
          of ours actually commits us to.

We will not say something is possible when it is not
  → You can take the diagnosis and stop. If the answer is "not yet",
    that is what it will say.

We will not pad the scope
  → We contract one process at a time. The second one comes after the
    first is actually running.

We will not let the bill drift
  → Scope and duration are fixed before we start. If it runs long, that
    is our misjudgement, not a change order.

Results depend on your side too
  → We put the hours in writing: one person, about three hours a week.
    If you cannot spare that, we will not take the project.

We will not build what you do not need
  → If your existing tools can do it, we will say so. Even when that
    means no work for us.

NOT-TAKING (같은 섹션 하단)
H3        What we turn down
  · Projects where nobody can spare the time
  · Rewriting a large system many teams already depend on
  · Staffing — we build and hand over
  · Physical infrastructure and day-to-day desktop support
  · "Just put some AI on it" with no process behind the ask
```

### ⑧ 속도
```
EYEBROW   Speed
H2        What AI actually changed.

BODY      Not that software got smarter. That the smallest job worth doing
          got much smaller. Automations that never justified a quote before
          now take weeks.

  Mobile app — first design to store testing        6 days     (measured)
  Membership platform — start to first location     10 weeks   [SAMPLE]
  Expense platform — start to feature complete      12 weeks   [SAMPLE]
```

### ⑨ 제품 (축소)
```
EYEBROW   Products
H2        Two we built ourselves.
(카드 2개 — 기존 ProductGrid 재사용, 상태 배지 유지)
```

### ⑩ Final CTA
```
H2        Start with the two-minute version.
BODY      Answer five questions and you will know which project comes first.
          If you want us to look properly after that, we are here.
CTA       Check your readiness
ALT       Or just email Help@ezworks.co
```

---

## 4. 홈 문구 — 한국어 (미국 진출 한국 기업 특화)

> ⚠️ 번역이 아니다. 같은 의도를 한국어 마케팅 문장으로 다시 쓴다.
> 한국어면은 **본사↔현지 각도**를 더한다.

### ① Hero
```
H1        아무도 적어두지 않은 프로세스는
          AI도 못 고칩니다.

SUB       그래서 먼저 적습니다. 그다음에 자동화합니다. 대부분이 이 단계를
          건너뛰고, Gartner는 데이터가 준비되지 않은 AI 프로젝트의 60%가
          버려질 것이라고 봅니다.

CTA 1     2분 자가진단
CTA 2     일하는 방식 보기

FOOT      기댈 IT 조직이 없는 곳을 위해. 회사 전체가 그렇든, 미국 법인만
          그렇든.
```

### ② 자가진단
```
EYEBROW   지금 어디에 있나
H2        다섯 문항이면 어느 프로젝트가 먼저인지 나옵니다.

LEDE      틀린 답은 없고, 어디에 제출되지도 않습니다. 저희에게 연락하지
          않으셔도 결과는 그대로 쓸 수 있습니다.

Q1        이 업무가 어떻게 돌아가는지 문서로 설명할 수 있습니까?
Q2        각 단계에서 무엇이 들어오고 무엇이 나가는지 정해져 있습니까?
Q3        담당자가 오늘 그만두면 다른 사람이 이어받을 수 있습니까?
Q4        필요한 데이터를 한 곳에서 뽑을 수 있습니까?
Q5        지난달 처리 건수를 지금 바로 볼 수 있습니까?

RESULT    L1 — 적혀는 있음, 으로 보입니다.
          첫 프로젝트는 AI가 아니라 L2로 올리는 일입니다. 그게 끝나면
          AI는 몇 주짜리 일이 됩니다.

AFTER     진단에 무엇이 포함되는지 보기  →
```

### ③ 레벨
```
EYEBROW   준비도
H2        합격·불합격이 아니라 레벨입니다.

LEDE      모든 회사가 이 눈금 어딘가에 있습니다. 어디에 있느냐가 첫
          프로젝트와 기간을 정합니다.

L0  머릿속        프로세스가 사람에게만 있습니다. 사장과 몇몇 핵심인력의
                  경험으로 돌아갑니다.  → 첫 프로젝트: 정리
L1  적혀는 있음    문서는 있는데 실제와 다릅니다. 데이터가 파일과 메일함에
                  흩어져 있습니다.  → 첫 프로젝트: 정리
L2  정의됨        단계마다 무엇이 들어오고 나가는지 분명합니다. 데이터가
                  한 곳에 있습니다.  → 첫 프로젝트: 자동화
L3  준비됨        시스템이 이미 데이터를 만들고 있습니다.
                  → AI가 바로 붙습니다

NOTE      이 눈금은 CMMI의 프로세스 축과 Gartner의 AI-ready 데이터 개념을
          가져와, 그 규모의 회사에 맞게 네 단으로 줄인 것입니다. 저희가
          발명한 모델이 아닙니다.
```

### ④ 방법론
```
EYEBROW   일하는 방식
H2        네 단계. 첫 단계에서 멈추셔도 됩니다.

1  진단      2주. 레벨과 병목 세 개, 그리고 지금 할 것·나중에 할 것·
             하지 말 것 목록을 드립니다.
2  정리      프로세스를 있어야 할 대로가 아니라 실제로 있는 대로 그립니다.
             단계별 입출력을 확정하고 데이터를 한 곳으로 모읍니다.
             AI를 끝내 붙이지 않아도 이것만으로 값이 있습니다.
3  자동화    2단계에서 정의된 것만 합니다. 규칙으로 되는 건 규칙으로,
             판단이 필요한 곳만 AI. 한 번에 한 프로세스.
4  정착      데이터 이관, 계정과 권한, 교육, 실제로 쓰기 시작한 첫 몇 주.
             아무도 안 쓰는 시스템은 인도가 아닙니다.
```

### ⑤ 진단 상품
```
EYEBROW   진단
H2        산출물이 정해져 있으니 값도 정해져 있습니다.

BODY      이다음 단계는 무엇을 발견하느냐에 달려 있습니다. 진단은 아닙니다.
          그래서 시작 전에 값을 아실 수 있습니다.

  2주
  귀사 담당자 한 분, 주 3시간 정도
  정액 $2,400                                          [SAMPLE]

CREDIT    구축까지 가시면 진단비는 전액 차감됩니다. 그래서 이 단계에서
          손해 보는 경우는 하나뿐입니다 — 저희가 "지금은 하지 마세요"라고
          말하는 경우. 그 답은 진단비보다 값이 있습니다.

AFTER-2   구축 비용은 딱 하나에 달려 있습니다. 어디에서 시작하느냐.

  L0  →  10~14주     프로세스를 처음부터 끄집어내야 합니다
  L1  →  7~10주      적힌 것과 실제의 차이를 메워야 합니다
  L2  →  4~6주       정리는 됐고 자동화만
  L3  →  2~4주       AI를 붙이는 일만                   [SAMPLE]

CLOSE     "회사마다 다릅니다"보다 "지금 L1이면 7~10주, L2였다면 4주였을
          겁니다"라고 말하는 편이 서로에게 낫습니다.
```

### ⑥ 할 수 있는 것
```
EYEBROW   만드는 것
H2        프로젝트 이름이 아니라 문제 이름으로 적었습니다.

(문제 모양 표 — EVIDENCE_LEDGER §2)

SYSTEMS   회사가 이미 돌리고 있는 시스템에 붙입니다 — SAP, Microsoft 365와
          Power Platform, QuickBooks를 포함한 회계 소프트웨어, 그리고 CRM.

한국어면 추가 문단:
          미국 법인의 IT는 본사 시스템과 현지 업무 사이에 낍니다. 본사는
          현지 사정을 모르고, 현지에는 그 간극을 메울 인력이 없습니다.
          16년 동안 그 자리에 있었습니다.
```

### ⑦ 함께 일하는 방식
```
EYEBROW   함께 일하는 방식
H2        저희가 대가를 치르는 약속 다섯 개.

LEDE      아무 대가도 들지 않는 약속은 아무 정보도 주지 않습니다. 저희
          약속이 각각 무엇을 구속하는지 적었습니다.

안 되는 것을 된다고 하지 않습니다
  → 진단만 받고 끝내셔도 됩니다. 답이 "아직 아닙니다"라면 그렇게 씁니다.

범위를 부풀리지 않습니다
  → 한 번에 한 프로세스만 계약합니다. 두 번째는 첫 번째가 실제로 돌아간
    다음입니다.

청구가 늘어나게 두지 않습니다
  → 범위와 기간을 시작 전에 고정합니다. 길어지면 저희 오판이지 추가
    청구 사유가 아닙니다.

성과는 귀사 쪽에도 달려 있습니다
  → 필요한 시간을 계약에 적습니다. 담당자 한 분, 주 3시간 정도. 그걸
    못 내주시면 저희는 그 프로젝트를 받지 않습니다.

필요하지 않은 것은 만들지 않습니다
  → 지금 쓰시는 도구로 되는 일이면 그렇게 말씀드립니다. 저희 일이
    없어지더라도.

H3        받지 않는 일
  · 담당자가 시간을 낼 수 없는 프로젝트
  · 여러 팀이 이미 쓰고 있는 대형 시스템 재작성
  · 인력 파견 — 만들어 인도하는 회사입니다
  · 물리 인프라와 상시 전산 대응
  · 무엇을 위한 것인지 없는 "일단 AI 좀 붙여주세요"
```

### ⑧ 속도
```
EYEBROW   속도
H2        AI가 실제로 바꾼 것.

BODY      소프트웨어가 똑똑해진 게 아닙니다. 할 만한 일의 최소 단위가
          훨씬 작아진 겁니다. 예전엔 견적이 안 나와서 포기했던 자동화가
          이제 몇 주면 됩니다.

  모바일 앱 — 설계 착수에서 스토어 테스트까지     6일      (실측)
  멤버십 플랫폼 — 착수에서 첫 지점 운영까지       10주     [SAMPLE]
  경비 플랫폼 — 착수에서 기능 완성까지            12주     [SAMPLE]
```

### ⑨ 제품 · ⑩ Final CTA
```
⑨ EYEBROW  제품 / H2  직접 만든 두 가지.

⑩ H2       2분짜리부터 시작하세요.
   BODY     다섯 문항에 답하시면 어느 프로젝트가 먼저인지 나옵니다.
            그다음에 제대로 봐드릴까요? 그때 부르시면 됩니다.
   CTA      자가진단 하기
   ALT      메일이 편하시면 Help@ezworks.co
```

---

## 5. 다른 페이지 변경

| 라우트 | 변경 |
|---|---|
| `/services/` | **전면 개편.** 상단에 자가진단 재사용 → 방법론 4단계 상세 → 진단 상품 → 문제 모양 전체 → 계약 원칙 → 받지 않는 일. 기존 "서비스 5개 카테고리"는 **문제 모양 표가 대체** |
| `/about/` | 홈에서 빠진 **What we believe 3원칙**을 여기로. "미국 법인 IT를 직접 운영해봤다" 한 줄 추가 (네트워크 역량은 여기만) |
| `/contact/` | 문의 사유 옵션에 **"진단 신청"** 추가 · 자가진단 결과(레벨)를 쿼리로 넘겨 프리필 |
| `/products/` | 변경 없음 |
| `/haru/` · `/haru/privacy/` · `/privacy/` | 변경 없음 |

---

## 6. 자가진단 구현 스펙

| 항목 | 값 |
|---|---|
| 형태 | 5문항 · 각 **예 / 아니오 / 잘 모르겠다** 3택 |
| 판정 | "예" 개수로 매핑 — 0~1: L0 · 2~3: L1 · 4: L2 · 5: L3 <br>("잘 모르겠다"는 "아니오"로 계산 — 모르는 것은 정의되지 않은 것) |
| 서버 | **없음.** 전부 클라이언트. 어디에도 전송하지 않는다 |
| 결과 | 레벨 + 첫 프로젝트 + 예상 기간(SAMPLE) + `/contact/?interest=diagnosis&level=L1` 링크 |
| 이벤트 | `readiness_start` · `readiness_complete`(레벨 포함) — `lib/analytics.ts`에 추가 |
| 접근성 | 라디오 그룹 + `fieldset`/`legend`, 키보드 완결, 결과는 `role="status"` |
| 카피 | "제출되지 않습니다"를 **명시** — 상호성이 작동하려면 대가 없음이 분명해야 한다 |

---

## 7. Hoon 확인 필요

| # | 항목 |
|---|---|
| 1 | **H1** — "아무도 적어두지 않은 프로세스는 AI도 못 고칩니다." 이 톤이 맞습니까? 부정문으로 시작하는 게 강한지 부담스러운지 |
| 2 | 홈에서 **"접근 3단"과 "신조 3원칙"을 빼는 것** 동의하십니까? (방법론·계약원칙이 대체) |
| 3 | 자가진단을 **홈 인라인**으로 두는 것 (새 페이지 안 만듦) |
| 4 | `/services/` 의 기존 5개 카테고리를 **문제 모양 표로 교체**하는 것 |
