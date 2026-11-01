'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Strings = {
  heading: string;
  body: string;
  scriptNote: string;
  noScript: string;
  startButton: string;
  loadingScript: string;
  pressGoogleButton: string;
  signedInLabel: string;
  confirmWarning: string;
  confirmButton: string;
  cancelButton: string;
  deleting: string;
  doneHeading: string;
  doneBody: string;
  inAppNote: string;
  errors: { signIn: string; network: string; auth: string; generic: string };
};

const API_BASE = process.env.NEXT_PUBLIC_EZHARU_API_BASE ?? 'https://proxy-production-fcc5.up.railway.app/v1';
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '367535469667-7vfqd5r2ackalm9405spn01ip96a8lbl.apps.googleusercontent.com';
const GSI_SRC = 'https://accounts.google.com/gsi/client';

type Phase = 'idle' | 'loading' | 'ready' | 'signedIn' | 'deleting' | 'done';
type CredentialResponse = { credential?: string };
type GoogleId = {
  initialize: (config: Record<string, unknown>) => void;
  renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
  disableAutoSelect: () => void;
};

declare global {
  interface Window { google?: { accounts?: { id?: GoogleId } } }
}

function newNonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

function emailOf(idToken: string): string | null {
  try {
    const payload = idToken.split('.')[1];
    if (!payload) return null;
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const json = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, '='));
    const bytes = Uint8Array.from(json, character => character.charCodeAt(0));
    const claims = JSON.parse(new TextDecoder().decode(bytes)) as { email?: unknown };
    return typeof claims.email === 'string' ? claims.email : null;
  } catch {
    return null;
  }
}

function loadGoogleSignIn(): Promise<void> {
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

export function DeleteAccountWidget({ strings }: { strings: Strings }) {
  const [phase, setPhase] = useState<Phase>('idle');
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const tokenRef = useRef<string | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  const onCredential = useCallback((response: CredentialResponse) => {
    const token = response.credential;
    if (!token) {
      setError(strings.errors.signIn);
      return;
    }
    tokenRef.current = token;
    setEmail(emailOf(token));
    setError(null);
    setPhase('signedIn');
  }, [strings.errors.signIn]);

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
      type: 'standard', theme: 'outline', size: 'large', text: 'signin_with',
      shape: 'rectangular', logo_alignment: 'left',
    });
  }, [phase, onCredential, strings.errors.signIn]);

  async function start() {
    setError(null);
    setPhase('loading');
    try {
      await loadGoogleSignIn();
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
    return <section className="delete-panel" aria-live="polite"><h2>{strings.doneHeading}</h2><p>{strings.doneBody}</p></section>;
  }

  return (
    <section className="delete-panel">
      <h2>{strings.heading}</h2>
      <p>{strings.body}</p>
      <noscript><p className="delete-message">{strings.noScript}</p></noscript>
      {phase === 'idle' || phase === 'loading' ? <>
        <p className="delete-note">{strings.scriptNote}</p>
        <button type="button" onClick={start} disabled={phase === 'loading'} className="button delete-start">
          {phase === 'loading' ? strings.loadingScript : strings.startButton}
        </button>
      </> : null}
      {phase === 'ready' ? <>
        <p className="delete-note">{strings.pressGoogleButton}</p>
        <div ref={buttonRef} className="google-button" />
      </> : null}
      {phase === 'signedIn' || phase === 'deleting' ? <div className="delete-confirm">
        {email ? <p><span>{strings.signedInLabel} </span><strong>{email}</strong></p> : null}
        <p>{strings.confirmWarning}</p>
        <div className="delete-actions">
          <button type="button" onClick={confirmDelete} disabled={phase === 'deleting'} className="button delete-danger">
            {phase === 'deleting' ? strings.deleting : strings.confirmButton}
          </button>
          <button type="button" onClick={cancel} disabled={phase === 'deleting'} className="button secondary">{strings.cancelButton}</button>
        </div>
      </div> : null}
      <p role="status" aria-live="polite" className="sr-only">{phase === 'deleting' ? strings.deleting : ''}</p>
      {error ? <p role="alert" className="delete-error">{error}</p> : null}
      <p className="delete-note delete-in-app">{strings.inAppNote}</p>
    </section>
  );
}
