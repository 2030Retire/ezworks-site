'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { DeleteAccountDoc } from '@/content/types';

/**
 * The interactive half of /haru/delete-account/ — Google Play requires a
 * deletion route that works without installing the app.
 *
 * ## Why this signs you in instead of asking for an email address
 *
 * The EZHaru service stores no email address and no name. Identity is a
 * one-way HMAC of the Google `sub`, so a request sent by email could not be
 * matched to any account — we would be promising a deletion we are unable to
 * perform. Signing in with Google produces an ID token whose `sub` hashes to
 * the same value the server already holds, which is the only way for us to
 * know whose account to delete. The same token is what the Android app sends.
 *
 * ## The call
 *
 *   POST {API_BASE}/account/delete
 *   Authorization: Bearer <Google ID token>
 *
 * The endpoint authorises on the Google ID token directly — a session token is
 * deliberately not accepted for destructive actions — so this page never calls
 * /v1/session. Calling it would also create an account row (`ensure_user`) just
 * to delete it a moment later.
 *
 * ⚠️ Two things outside this repository have to be true for the call to
 * succeed, and neither can be verified from here:
 *  1. The proxy must send CORS headers for https://ezworks.co on
 *     POST /v1/account/delete, including an OPTIONS preflight that allows the
 *     Authorization header.
 *  2. https://ezworks.co must be an authorised JavaScript origin on the Google
 *     OAuth **web** client below, or Google refuses to issue a token here.
 * When either is missing the user sees `errors.network`, never a silent
 * failure.
 *
 * ## Third-party script
 *
 * Google's sign-in script is loaded on demand, when the user presses the start
 * button — not on page load. Every other page on this site loads no
 * third-party script at all, and the website privacy policy states this
 * exception.
 */

/**
 * The proxy's public base URL. Overridable for a staging proxy; the default is
 * the deployed service.
 */
const API_BASE =
  process.env.NEXT_PUBLIC_EZHARU_API_BASE ??
  'https://proxy-production-fcc5.up.railway.app/v1';

/**
 * ⛔ The Google OAuth **web** client ID — the same value the Android app passes
 * as `setServerClientId`, and the same value the proxy checks the token's `aud`
 * against. It is public by design, and permanently fixed: changing it turns
 * every existing token into `aud_mismatch`.
 */
const CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ??
  '367535469667-7vfqd5r2ackalm9405spn01ip96a8lbl.apps.googleusercontent.com';

const GSI_SRC = 'https://accounts.google.com/gsi/client';

type Phase = 'idle' | 'loading' | 'ready' | 'signedIn' | 'deleting' | 'done';

type Strings = DeleteAccountDoc['widget'];

type CredentialResponse = { credential?: string };

type GoogleId = {
  initialize: (config: Record<string, unknown>) => void;
  renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
  disableAutoSelect: () => void;
};

declare global {
  interface Window {
    google?: { accounts?: { id?: GoogleId } };
  }
}

/** A random nonce, so a token minted here cannot be replayed from elsewhere. */
function newNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * The `email` claim of an ID token, for display only.
 *
 * Read in the browser and never sent anywhere — the user needs to see which
 * account they are about to delete. Returns null on anything unexpected; the
 * confirmation step works without it.
 */
function emailOf(idToken: string): string | null {
  try {
    const payload = idToken.split('.')[1];
    if (!payload) return null;
    // base64url, and JWTs drop the padding that atob wants back.
    const b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const json = atob(b64.padEnd(Math.ceil(b64.length / 4) * 4, '='));
    const bytes = Uint8Array.from(json, (c) => c.charCodeAt(0));
    const claims = JSON.parse(new TextDecoder().decode(bytes)) as { email?: unknown };
    return typeof claims.email === 'string' ? claims.email : null;
  } catch {
    return null;
  }
}

function loadGsi(): Promise<void> {
  // Already evaluated — a second visit to this page in the same session.
  if (window.google?.accounts?.id) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${GSI_SRC}"]`);
  if (existing) {
    return existing.dataset.loaded === 'true'
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          existing.addEventListener('load', () => resolve());
          existing.addEventListener('error', () => reject(new Error('gsi_load_failed')));
        });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = GSI_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve();
    });
    script.addEventListener('error', () => reject(new Error('gsi_load_failed')));
    document.head.appendChild(script);
  });
}

const panelClass =
  'mt-10 rounded-2xl border border-line bg-surface p-5 sm:p-7';

const buttonClass =
  'inline-flex min-h-[44px] items-center justify-center rounded-xl px-5 py-3 text-[0.9375rem] font-semibold leading-snug transition duration-200';

export function DeleteAccountWidget({ strings }: { strings: Strings }) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const tokenRef = useRef<string | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  const onCredential = useCallback((response: CredentialResponse) => {
    const token = response?.credential;
    if (!token) {
      setError(strings.errors.signIn);
      return;
    }
    tokenRef.current = token;
    setEmail(emailOf(token));
    setError(null);
    setPhase('signedIn');
  }, [strings.errors.signIn]);

  // Render Google's own button once the script is in and the container exists.
  // Google requires its rendered button rather than a look-alike of ours.
  useEffect(() => {
    if (phase !== 'ready' || !buttonRef.current) return;
    const id = window.google?.accounts?.id;
    if (!id) {
      setError(strings.errors.signIn);
      setPhase('idle');
      return;
    }
    if (!initialized.current) {
      id.initialize({
        client_id: CLIENT_ID,
        callback: onCredential,
        nonce: newNonce(),
        auto_select: false,
        cancel_on_tap_outside: true,
        ux_mode: 'popup',
        itp_support: true,
      });
      initialized.current = true;
    }
    buttonRef.current.replaceChildren();
    id.renderButton(buttonRef.current, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'left',
    });
  }, [phase, onCredential, strings.errors.signIn]);

  async function start() {
    setError(null);
    setPhase('loading');
    try {
      await loadGsi();
      setPhase('ready');
    } catch {
      setError(strings.errors.network);
      setPhase('idle');
    }
  }

  function cancel() {
    tokenRef.current = null;
    setEmail(null);
    setError(null);
    window.google?.accounts?.id?.disableAutoSelect();
    setPhase('ready');
  }

  async function confirmDelete() {
    const token = tokenRef.current;
    if (!token) {
      setError(strings.errors.auth);
      setPhase('ready');
      return;
    }
    setError(null);
    setPhase('deleting');

    let response: Response;
    try {
      response = await fetch(`${API_BASE}/account/delete`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {
      // A rejected preflight, a blocked origin and a dead network all land
      // here. Nothing was deleted in any of them.
      setError(strings.errors.network);
      setPhase('signedIn');
      return;
    }

    if (response.ok) {
      tokenRef.current = null;
      window.google?.accounts?.id?.disableAutoSelect();
      setPhase('done');
      return;
    }
    // The token was rejected — expired, or minted for another client.
    // Signing in again is the only thing the user can do about it.
    if (response.status === 401 || response.status === 403) {
      tokenRef.current = null;
      setEmail(null);
      setError(strings.errors.auth);
      setPhase('ready');
      return;
    }
    setError(strings.errors.generic);
    setPhase('signedIn');
  }

  if (phase === 'done') {
    return (
      <section className={panelClass} aria-live="polite">
        <h2 className="text-xl font-bold tracking-tight text-ink">
          {strings.doneHeading}
        </h2>
        <p className="mt-3 text-[0.9688rem] leading-[1.7] text-ink">
          {strings.doneBody}
        </p>
      </section>
    );
  }

  return (
    <section className={panelClass}>
      <h2 className="text-xl font-bold tracking-tight text-ink">{strings.heading}</h2>
      <p className="mt-3 text-[0.9688rem] leading-[1.7] text-ink">{strings.body}</p>

      <noscript>
        <p className="mt-4 rounded-xl border border-line bg-white p-4 text-[0.9063rem] leading-[1.7] text-ink">
          {strings.noScript}
        </p>
      </noscript>

      {phase === 'idle' || phase === 'loading' ? (
        <>
          <p className="mt-4 text-[0.9063rem] leading-[1.7] text-soft">
            {strings.scriptNote}
          </p>
          <button
            type="button"
            onClick={start}
            disabled={phase === 'loading'}
            className={`${buttonClass} mt-5 bg-brand text-white shadow-sm hover:bg-brand-hover disabled:opacity-70`}
          >
            {phase === 'loading' ? strings.loadingScript : strings.startButton}
          </button>
        </>
      ) : null}

      {phase === 'ready' ? (
        <>
          <p className="mt-5 text-[0.9063rem] leading-[1.7] text-soft">
            {strings.pressGoogleButton}
          </p>
          {/* Google renders its own button in here. */}
          <div ref={buttonRef} className="mt-3" />
        </>
      ) : null}

      {phase === 'signedIn' || phase === 'deleting' ? (
        <div className="mt-6 border-t border-line pt-6">
          {email ? (
            <p className="text-[0.9375rem] leading-[1.7] text-ink">
              <span className="text-soft">{strings.signedInLabel} </span>
              <b className="break-all">{email}</b>
            </p>
          ) : null}
          <p className="mt-3 text-[0.9688rem] leading-[1.7] text-ink">
            {strings.confirmWarning}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={confirmDelete}
              disabled={phase === 'deleting'}
              className={`${buttonClass} bg-state-danger text-white shadow-sm hover:opacity-90 disabled:opacity-70`}
            >
              {phase === 'deleting' ? strings.deleting : strings.confirmButton}
            </button>
            <button
              type="button"
              onClick={cancel}
              disabled={phase === 'deleting'}
              className={`${buttonClass} border border-line bg-white text-ink hover:bg-surface disabled:opacity-70`}
            >
              {strings.cancelButton}
            </button>
          </div>
        </div>
      ) : null}

      <p role="status" aria-live="polite" className="sr-only">
        {phase === 'deleting' ? strings.deleting : ''}
      </p>

      {error ? (
        <p
          role="alert"
          className="mt-5 rounded-xl border border-state-danger/40 bg-state-danger/5 p-4 text-[0.9063rem] leading-[1.7] text-ink"
        >
          {error}
        </p>
      ) : null}

      <p className="mt-6 text-[0.9063rem] leading-[1.7] text-soft">
        {strings.inAppNote}
      </p>
    </section>
  );
}
