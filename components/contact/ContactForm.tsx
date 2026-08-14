'use client';

import { useEffect, useState } from 'react';
import { analyticsEvents, track } from '@/lib/analytics';
import { site } from '@/content/site';

/**
 * Contact form for a site with no backend.
 *
 * If NEXT_PUBLIC_CONTACT_ENDPOINT is set at build time, the form POSTs JSON
 * there. If it is not, it falls back to opening a prefilled mail draft. No
 * third-party form service is embedded either way.
 */
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export const interests = [
  { value: 'services', label: 'Services — automation, integration or implementation' },
  { value: 'haru', label: 'EZHaru — request an alpha invite' },
  { value: 'expense', label: 'EZWorks Expense — early access' },
  { value: 'other', label: 'Something else' },
] as const;

type InterestValue = (typeof interests)[number]['value'];
type Status = 'idle' | 'submitting' | 'success' | 'error';

type Fields = {
  name: string;
  email: string;
  company: string;
  interest: InterestValue;
  message: string;
};

const emptyFields: Fields = {
  name: '',
  email: '',
  company: '',
  interest: 'services',
  message: '',
};

function validate(fields: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) errors.name = 'Please tell us your name.';
  if (!fields.email.trim()) {
    errors.email = 'We need an email address to reply to.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'That does not look like an email address.';
  }
  if (fields.message.trim().length < 10) {
    errors.message = 'A sentence or two about what you need, please.';
  }
  return errors;
}

function buildMailto(fields: Fields): string {
  const interestLabel =
    interests.find((i) => i.value === fields.interest)?.label ?? fields.interest;
  const body = [
    `Name: ${fields.name}`,
    fields.company ? `Company: ${fields.company}` : null,
    `Email: ${fields.email}`,
    `Interest: ${interestLabel}`,
    '',
    fields.message,
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${site.email}?subject=${encodeURIComponent(
    `Website enquiry — ${interestLabel}`,
  )}&body=${encodeURIComponent(body)}`;
}

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-soft/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/25';

const labelClass = 'block text-sm font-semibold text-ink';

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [usedMailto, setUsedMailto] = useState(false);

  // Preselect the interest from ?interest=… . Read from location rather than
  // useSearchParams so the page stays fully static.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('interest');
    if (requested && interests.some((i) => i.value === requested)) {
      setFields((f) => ({ ...f, interest: requested as InterestValue }));
    }
  }, []);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
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
          {usedMailto ? 'Your mail app should be open.' : 'Thank you — that reached us.'}
        </h2>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
          {usedMailto ? (
            <>
              We drafted the message for you; send it and it comes straight to
              us. If nothing opened, email{' '}
              <a href={`mailto:${site.email}`} className="font-medium text-brand underline underline-offset-4">
                {site.email}
              </a>{' '}
              directly.
            </>
          ) : (
            <>
              We read every message ourselves and normally reply within a
              business day.
            </>
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
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name}>
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

        <Field id="email" label="Email" error={errors.email}>
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

      <Field id="company" label="Company" hint="Optional">
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

      <Field id="interest" label="What is this about?">
        <select
          id="interest"
          name="interest"
          value={fields.interest}
          onChange={(e) => update('interest', e.target.value as InterestValue)}
          className={fieldClass}
        >
          {interests.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="What would you like to change?"
        error={errors.message}
        hint="The process that costs you the most time is a good place to start."
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
          That did not go through. Please try again, or email{' '}
          <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand px-5 py-3 text-[0.9375rem] font-semibold text-white shadow-sm transition duration-200 hover:bg-brand-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        <p className="text-sm text-soft">
          Or email{' '}
          <a href={`mailto:${site.email}`} className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover">
            {site.email}
          </a>
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
