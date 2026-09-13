# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Global original: `~/.claude/CLAUDE.md` — this file states only the deltas for this repo.

## What this is

The public EZWorks marketing site (https://ezworks.co), Next.js 15 App Router + React 19 +
Tailwind 3, exported as **fully static HTML** and served by Vercel. There is no server, no
database and no API route in this repo. Two locales: English (default, unprefixed) and Korean
(`/ko/...`). The `CNAME` file is a leftover from the retired GitHub Pages deploy.

## Commands

```powershell
npm run dev              # next dev
npm run build            # static export → out/
npx tsc --noEmit         # the real check; CI-less repo, so run this before committing
```

`npm run lint` is wired to `next lint` but **no ESLint config or dependency is installed** — it
will offer to install one. Type-check instead. There are no tests.

`next.config.mjs` pins `experimental: { cpus: 1, workerThreads: false }` because parallel build
workers OOM on a memory-constrained machine. Don't remove it to "speed up" the build.

## Architecture

**All user-facing text lives in `content/en.ts` and `content/ko.ts`.** Nothing else. Components
receive strings as props or read them via `getContent(lang)`. `ko` is typed as
`Dictionary = typeof en`, so a key added to English without a Korean counterpart is a build error.

**Locale mechanics** (`content/index.ts`, `lib/routes.ts`):
- Dictionaries store **locale-neutral** paths (`/services/`). `getContent(lang)` walks the tree
  and rewrites only keys named `href` or ending in `Href`. `src` and every other string is left
  alone — that is what keeps asset paths like `/haru/ezharu-logo.png` from being localized.
  Never introduce a navigation string under a key name outside that convention.
- English is returned untouched by `getContent`, which guarantees adding a language cannot
  perturb the published English pages.
- The two locales have **separate root layouts** (`app/(en)/layout.tsx`, `app/(ko)/layout.tsx`)
  so each can set its own `<html lang>` under a static export. `LanguageSwitcher` is therefore a
  plain `<a>`, not `next/link` — a real document load is what changes the language attribute.

**Three-layer page pattern.** A route file does almost nothing:
`app/(en)/haru/privacy/page.tsx` → exports `metadata` from `pageMetadata(lang, route, meta)` and
renders `<LegalPageView lang="en" doc="haru" />`. The `components/views/*PageView.tsx` layer holds
the actual page composition and is shared by both locales. A change to a page's structure belongs
in the view, and its words in `content/`. The Korean file under `app/(ko)/ko/...` is the same file
with `lang="ko"`.

**Legal/deletion pages are data, not JSX.** `LegalDoc` / `DeleteAccountDoc` in `content/types.ts`
are block lists (`heading` / `text` / `list` / `table` / `callout` / `notice` / `contactEmail`)
rendered by `components/layout/LegalPage.tsx`. Inline markup inside `text` is deliberately tiny:
`**bold**` and `[label](/path/)` only — nothing else is parsed. Links inside a `notice` block are
the one place hrefs are *not* localized (the translation disclaimer must point at the
authoritative English text).

**Styling** is Tailwind with a fixed semantic palette in `tailwind.config.ts`
(`ink` / `soft` / `line` / `surface` / `tint` / `brand` / `state-danger`), each pairing documented
with its verified WCAG ratio. Use the tokens; no raw hex or arbitrary grays. `state-danger` is
destructive-only — the brand accent must never stand in for "danger".

## Constraints that will bite you

- ⛔ **`/haru/privacy/` and `/haru/delete-account/` must never move.** They are the policy URL and
  the Data-safety deletion URL registered with the Google Play Store. Both must stay indexable and
  listed in `app/sitemap.ts`.
- ⛔ **No address, phone, street or postal code anywhere** — the registered address is a private
  residence. `organizationJsonLd` in `content/index.ts` is capped at name/url/logo/email/slogan/
  description; `content.site.country` is country-only by design.
- ⛔ The Google OAuth **web** client ID in `components/haru/DeleteAccountWidget.tsx` is permanently
  fixed — the Android app passes the same value as `setServerClientId` and the proxy checks `aud`
  against it. Changing it invalidates every existing token.
- The delete page signs in with Google rather than accepting an emailed request because the EZHaru
  server identifies accounts by a one-way HMAC of the Google `sub`. There is no "email us" variant
  of that page, and the CORS/authorised-origin prerequisites for
  `POST {API_BASE}/account/delete` live outside this repo.
- Only one third-party script exists on the whole site — Google's GSI, loaded on demand when the
  user presses the start button on the delete page. The website privacy policy states this as the
  exception. Don't add analytics SDKs: `lib/analytics.ts` deliberately only dispatches an
  `ezworks:track` DOM CustomEvent so a provider can be attached without touching components.
- Env vars are all build-time and optional, with committed defaults:
  `NEXT_PUBLIC_CONTACT_ENDPOINT` (unset → the contact form falls back to a `mailto:` draft),
  `NEXT_PUBLIC_EZHARU_API_BASE`, `NEXT_PUBLIC_GOOGLE_CLIENT_ID`.

## Adding or changing a route

Four places must agree, and they are not generated from each other:
1. `app/(en)/<path>/page.tsx` **and** `app/(ko)/ko/<path>/page.tsx`
2. `lib/routes.ts` — the canonical route list
3. `app/sitemap.ts` — its own separate list, with a priority
4. `content/en.ts` + `content/ko.ts` — nav entries and page meta

⚠️ These are currently out of sync: `/method/` ships as a page and sits in the primary nav, but is
absent from both `lib/routes.ts` and `app/sitemap.ts` (whose comments still say "eight"/"nine"
routes). Fix the list you touch rather than copying the omission.

## Docs

`docs/1_정본_canonical/` holds the canonical strategy behind the site — `POSITIONING.md`,
`METHODOLOGY.md`, `EVIDENCE_LEDGER.md`, `SITE_IA.md`, plus HTML review documents. They are Korean
and predate the current copy; check the date line before treating one as current fact. Copy
decisions (what the site claims, what it refuses to claim) trace to these, so read
`POSITIONING.md` before rewriting marketing text.

Commit messages in this repo are full sentences describing the change in the site's own voice
(e.g. "Say what the app now keeps: account email and name"). Match that.
