/** How a services engagement runs, and who it fits. Used by /services/. */

export const engagementSteps = [
  {
    title: 'We look at the week you actually have',
    body: 'A short conversation about the process that costs you the most time, and a look at how it runs today — the emails, the spreadsheet, the person who holds it together.',
  },
  {
    title: 'You get an honest answer about scope',
    body: 'What is worth automating, what is not, and what the smallest useful version looks like. Sometimes the honest answer is that a change in how you use an existing tool is enough.',
  },
  {
    title: 'We build the smallest version that works',
    body: 'One process, end to end, in weeks rather than quarters — so you are judging a working thing instead of a document.',
  },
  {
    title: 'We put it in place and stay through the first weeks',
    body: 'Migration of the data that lives in spreadsheets today, accounts and permissions, training the people who will use it, and the fixes that only surface once real work runs through it.',
  },
  {
    title: 'It grows only where it earns its keep',
    body: 'The next process comes after the first one is genuinely running, not in the same big-bang rollout.',
  },
] as const;

export const goodFit = [
  'Under about 100 people, with no internal IT team',
  'A process that repeats every week and still needs a person to carry it',
  'Tools that already work individually but do not talk to each other',
  'A spreadsheet that has quietly become a production system',
] as const;

export const notAFit = [
  'A rewrite of a large system already in use across many teams',
  'Staffing — we build and hand over, we do not place developers',
  'Work where nobody internally can spare time to answer questions during the build',
] as const;
