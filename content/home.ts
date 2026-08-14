/** Narrative content for the home page, in the order it is rendered. */

export const hero = {
  headline: 'Work, Simplified.',
  subhead:
    'We make the everyday work of a small company simpler — with practical software, automation, and the help to put it in place.',
  primaryCta: { label: 'Talk to us', href: '/contact/' },
  secondaryCta: { label: 'See what we build', href: '/products/' },
} as const;

/**
 * The familiar operating problems. The point is not that email or
 * spreadsheets are bad tools — it is that people are moving the information
 * between them by hand.
 */
export const problems = {
  eyebrow: 'The pattern',
  heading: 'None of these tools are the problem.',
  lede: 'Email, chat and spreadsheets are fine. The trouble starts where a person has to carry information from one of them to the next — every week, by hand, from memory.',
  items: [
    { title: 'Receipts arrive as email attachments', body: 'and someone types them into a spreadsheet later, from a phone photo taken two weeks ago.' },
    { title: 'Approvals happen in chat', body: 'so the decision exists, but not the record of who approved it or when.' },
    { title: 'The spreadsheet is the system', body: 'and only one person really knows how it works — which is a risk nobody has priced.' },
    { title: 'Accounting entry is manual', body: 'the same numbers are entered a second time, in a second place, with a second chance to be wrong.' },
    { title: 'Status lives in someone’s head', body: 'so answering "where is this?" costs a meeting instead of a glance.' },
    { title: 'Reporting means rebuilding', body: 'the same report gets assembled by hand each month, and it is stale by the time it is read.' },
  ],
  closing: 'Every one of these is a hand-off. Hand-offs are what we remove.',
} as const;

/** The three-part definition of the company. */
export const approach = {
  eyebrow: 'How we work',
  heading: 'Three ways in, depending on what you actually need.',
  items: [
    {
      kicker: 'Software',
      title: 'when you need a product',
      body: 'A tool that already does the job, that your team can start using without a project plan.',
      href: '/products/',
      linkLabel: 'See our products',
    },
    {
      kicker: 'Automation',
      title: 'when you need a workflow',
      body: 'Your process, the way you run it — with the manual hand-offs taken out of the middle.',
      href: '/services/',
      linkLabel: 'See our services',
    },
    {
      kicker: 'Implementation',
      title: 'when you need help putting it together',
      body: 'Migration, setup, training and the first weeks of real use — the part that decides whether any of it sticks.',
      href: '/services/',
      linkLabel: 'How we help',
    },
  ],
} as const;

export const beliefs = {
  eyebrow: 'What we believe',
  heading: 'Three rules we design by.',
  items: [
    {
      title: 'Your data stays in systems you own.',
      body: 'We design so your data stays in systems you own — your storage, your accounts, your accounting software. Where a product does need a server, we say so plainly on that product’s page rather than making a blanket promise we cannot keep everywhere.',
    },
    {
      title: 'No lock-in.',
      body: 'If you stop using one of our apps tomorrow, what it produced should still be yours and still be readable. Notes are plain Markdown in your own folders; records export in standard formats. Leaving should be boring.',
    },
    {
      title: 'Practical over complicated.',
      body: 'We would rather remove one tedious job completely than add a platform that does forty things adequately. No enterprise complexity for a company of thirty people.',
    },
  ],
} as const;

/**
 * Proof of capability. Strictly factual and strictly anonymous.
 * No client names, no logos, no testimonials, no user counts.
 */
export const proof = {
  eyebrow: 'Evidence',
  heading: 'What we have actually built.',
  lede: 'We are an independent studio, so instead of a client logo wall, here is the work itself — described without naming anyone.',
  systems: [
    {
      title: 'A multi-tenant expense and approval platform',
      body: 'Document capture with automatic extraction, approval routing by rule, and a connection into accounting — with separate companies isolated from each other on one platform.',
    },
    {
      title: 'A multi-location membership, attendance and billing platform',
      body: 'Built for a martial-arts school operator running several locations: a parent portal, kiosk check-in, and recurring payment processing.',
    },
    {
      title: 'An AI voice recorder',
      body: 'EZHaru: on-device recording, automatic transcription and summarization, and note files written straight into the user’s own cloud storage.',
    },
  ],
  speed: {
    title: 'Six days from first design to a mobile app in store testing.',
    body: 'That is not a claim about ambition; it is the elapsed time on a real build. Working this way is why a company without an IT department can get a working system from us in weeks rather than quarters.',
  },
} as const;

export const finalCta = {
  heading: 'Tell us what part of the week is worst.',
  body: 'Describe the process that keeps costing you time. We will tell you honestly whether it is worth automating, and what it would take.',
  cta: { label: 'Talk to us', href: '/contact/' },
} as const;
