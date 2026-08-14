/**
 * Service catalogue. Adding an entry here updates the home summary and
 * /services/ — no page component edits.
 *
 * Only capabilities we can actually deliver. No partner or certification
 * claims: "connect with the systems your business already uses" is the ceiling.
 */

export type Service = {
  slug: string;
  title: string;
  /** One line for the home page summary. */
  summary: string;
  /** Fuller explanation for /services/. */
  body: string;
  /** Concrete examples — what an engagement actually produces. */
  examples: string[];
};

export const services: Service[] = [
  {
    slug: 'workflow-automation',
    title: 'Workflow automation',
    summary: 'Take the hand-carrying out of a process that runs every week.',
    body: 'We map how a process actually runs today — who sends what to whom, what gets retyped, where it stalls — and automate the parts that are only being done by hand because nothing else was ever built. The goal is not a grand system; it is that a recurring task stops needing a person to shepherd it.',
    examples: [
      'Requests that arrive by email or chat land in one queue with a status',
      'Approvals route by amount, category or team instead of by memory',
      'Recurring reports assemble themselves and arrive on schedule',
    ],
  },
  {
    slug: 'systems-integration',
    title: 'Systems integration',
    summary: 'Connect the tools you already pay for so data stops being retyped.',
    body: 'Most small companies do not need new software so much as they need their existing software to talk. We build the connections between the systems your business already uses — accounting, email and files, spreadsheets, line-of-business tools — so a number entered once stops being entered three more times.',
    examples: [
      'Accounting connections, including QuickBooks',
      'Microsoft 365 — files, mail, calendars, Teams notifications',
      'Spreadsheets and exports that become a real, queryable source',
    ],
  },
  {
    slug: 'process-digitization',
    title: 'Process digitization',
    summary: 'Turn paper, PDFs and shared spreadsheets into something you can trust.',
    body: 'Forms on clipboards, PDFs in a shared folder, a spreadsheet that only one person understands — these work until the company grows past them. We replace them with a small, purpose-built system that holds the same information with an owner, a history and a permission model.',
    examples: [
      'Paper or PDF forms become structured records',
      'Document capture and extraction instead of manual entry',
      'A history of who changed what, without asking anyone to remember',
    ],
  },
  {
    slug: 'reporting-dashboards',
    title: 'Operational reporting',
    summary: 'One screen that answers the question you keep asking on Monday.',
    body: 'Reporting fails when it tries to answer everything. We start from the handful of questions you actually ask every week and build the smallest thing that answers them from live data — so the answer stops depending on somebody rebuilding a spreadsheet.',
    examples: [
      'Dashboards built from live operational data, not weekly exports',
      'Alerts when a number crosses a line you care about',
      'Reports scoped to a team, so people see their own work',
    ],
  },
  {
    slug: 'implementation',
    title: 'Implementation and rollout',
    summary: 'Someone who stays until people are actually using it.',
    body: 'Software that nobody adopts is an expense, not an improvement. We handle the unglamorous half — moving existing data in, setting up accounts and permissions, training the people who will use it daily, and staying through the first weeks when the real edge cases surface.',
    examples: [
      'Migrating the data that is currently in spreadsheets and email',
      'Accounts, roles and permissions set up before day one',
      'Training and support through the first weeks of real use',
    ],
  },
];
