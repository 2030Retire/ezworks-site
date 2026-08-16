'use client';

import { useEffect, useState } from 'react';
import { analyticsEvents, track } from '@/lib/analytics';
import type { Dictionary } from '@/content/en';

/**
 * Contact form for a site with no backend.
 *
 * If NEXT_PUBLIC_CONTACT_ENDPOINT is set at build time, the form POSTs JSON
 * there. If it is not, it falls back to opening a prefilled mail draft. No
 * third-party form service is embedded either way.
 *
 * All copy arrives as props so the client bundle carries one locale, not both.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export type ContactStrings = Dictionary['contactForm'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

type Fields = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

function validate(
  fields: Fields,
  errors: ContactStrings['errors'],
): Partial<Record<keyof Fields, string>> {
  const found: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) found.name = errors.name;
  if (!fields.email.trim()) {
    found.email = errors.emailMissing;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    found.email = errors.emailInvalid;
  }
  if (fields.message.trim().length < 10) {
    found.message = errors.message;
  }
  return found;
}

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-soft/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25';

const labelClass = 'block text-sm font-semibold text-ink';

export function ContactForm({
  strings,
  email,
}: {
  strings: ContactStrings;
  email: string;
}) {
  const emptyFields: Fields = {
    name: '',
    email: '',
    company: '',
    interest: strings.interests[0].value,
    message: '',
  };

  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [usedMailto, setUsedMailto] = useState(false);

  // Preselect the interest from ?interest=… . Read from location rather than
  // useSearchParams so the page stays fully static.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('interest');
    if (requested && strings.interests.some((i) => i.value === requested)) {
      setFields((f) => ({ ...f, interest: requested }));
    }
  }, [strings.interests]);

  function buildMailto(values: Fields): string {
    const interestLabel =
      strings.interests.find((i) => i.value === values.interest)?.label ?? values.interest;
    const body = [
      `${strings.mailName}: ${values.name}`,
      values.company ? `${strings.mailCompany}: ${values.company}` : null,
      `${strings.mailEmail}: ${values.email}`,
      `${strings.mailInterest}: ${interestLabel}`,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    return `mailto:${email}?subject=${encodeURIComponent(
      `${strings.mailSubject} ${interestLabel}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields, strings.errors);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    track(analyticsEvents.contactSubmit, { interest: fields.interest });

    if (!endpoint) {
      window.location.href = buildMailto(fields);
      setUsedMailto(true);
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus('success');
      setFields(emptyFields);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
      >
        <h2 className="text-xl font-bold tracking-tight text-ink">
          {usedMailto ? strings.successMailtoTitle : strings.successTitle}
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
          {usedMailto ? (
            <>
              {strings.successMailtoBodyLead}{' '}
              <a href={`mailto:${email}`} className="font-medium text-brand underline underline-offset-4">
                {email}
              </a>
              {strings.successMailtoBodyTail}
            </>
          ) : (
            strings.successBody
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setUsedMailto(false);
          }}
          className="mt-6 text-[0.9375rem] font-semibold text-brand hover:text-brand-hover"
        >
          {strings.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={strings.nameLabel} error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="email" label={strings.emailLabel} error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field id="company" label={strings.companyLabel} hint={strings.companyHint}>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={fields.company}
          onChange={(e) => update('company', e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field id="interest" label={strings.interestLabel}>
        <select
          id="interest"
          name="interest"
          value={fields.interest}
          onChange={(e) => update('interest', e.target.value)}
          className={fieldClass}
        >
          {strings.interests.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label={strings.messageLabel}
        error={errors.message}
        hint={strings.messageHint}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      {status === 'error' ? (
        <p role="alert" className="rounded-xl border border-[#E0B4B4] bg-[#FCF2F2] px-4 py-3 text-[0.9375rem] text-[#8A2020]">
          {strings.sendFailedLead}{' '}
          <a href={`mailto:${email}`} className="font-semibold underline underline-offset-4">
            {email}
          </a>
          {strings.sendFailedTail}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white shadow-sm transition duration-200 hover:bg-brand-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? strings.submitting : strings.submit}
        </button>
        <p className="text-sm text-soft">
          {strings.orEmail}{' '}
          <a href={`mailto:${email}`} className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover">
            {email}
          </a>
          {strings.orEmailTail}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {hint && !error ? (
          <span className="ml-2 font-normal text-soft">{hint}</span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-[#8A2020]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
