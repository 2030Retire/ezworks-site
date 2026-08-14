/**
 * Product catalogue.
 *
 * Adding an entry here is the ONLY change needed to make a product appear on
 * the home page grid and on /products/ — no page component edits.
 * A product only gets its own route when `href` points at one that exists.
 *
 * `status` must reflect reality. Nothing here is purchasable, so no prices.
 */

export type ProductStatus = 'private-alpha' | 'in-development' | 'early-access';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  /** One or two sentences for cards and list rows. */
  description: string;
  status: ProductStatus;
  /** Short qualifier shown next to the badge, e.g. platform. */
  statusNote?: string;
  features: { title: string; body: string }[];
  cta: { label: string; href: string };
  /** Detail page, when one exists. Cards link here; otherwise to the CTA. */
  href?: string;
  logo?: { src: string; alt: string };
  seoTitle: string;
  seoDescription: string;
};

export const productStatusLabels: Record<ProductStatus, string> = {
  'private-alpha': 'Private alpha',
  'in-development': 'In development',
  'early-access': 'Early access',
};

export const products: Product[] = [
  {
    slug: 'haru',
    name: 'EZHaru',
    tagline: 'Record. Everything else is done for you.',
    description:
      'An AI voice recorder that files itself. Tap a category and record — the transcript, the summary and a tidy note file appear in your own cloud, already in the right folder.',
    status: 'private-alpha',
    statusNote: 'Android',
    features: [
      {
        title: 'Files itself',
        body: 'Every recording routes to the folder you chose for that category — work meetings to your work drive, personal notes to your personal one. No renaming, no dragging.',
      },
      {
        title: 'Transcribes and summarizes automatically',
        body: 'A summary with key points and action items, plus the full transcript. Passages the engine was unsure about are flagged for a quick review.',
      },
      {
        title: 'Learns your vocabulary',
        body: 'Fix a term once — company names, project codes, jargon — and every future note gets it right.',
      },
      {
        title: 'Lives in your tools',
        body: 'Notes are plain Markdown saved next to the audio: searchable in File Explorer, readable in Obsidian, and optionally mirrored to OneNote.',
      },
      {
        title: 'Never loses a recording',
        body: 'Recordings survive crashes, dead batteries and lost connections. Nothing is deleted until it is confirmed uploaded.',
      },
    ],
    cta: { label: 'Request an alpha invite', href: '/contact/?interest=haru' },
    href: '/haru/',
    logo: { src: '/haru/ezharu-logo.png', alt: 'EZHaru' },
    seoTitle: 'EZHaru — an AI voice recorder that files itself',
    seoDescription:
      'Tap a category and record. EZHaru writes the transcript, the summary and a Markdown note into the right folder of your own cloud. No server of ours; your storage, your API key.',
  },
  {
    slug: 'expense',
    name: 'EZWorks Expense',
    tagline: 'Receipts in. Bookkeeping done.',
    description:
      'A receipt and expense workflow for companies that still move numbers by hand: capture, read, route for approval, and hand off to accounting.',
    status: 'in-development',
    features: [
      {
        title: 'Capture where the receipt happens',
        body: 'Photograph a receipt on the spot instead of mailing it to someone who retypes it later.',
      },
      {
        title: 'Reads the document for you',
        body: 'Vendor, date, total and tax are extracted from the image, so the person submitting only confirms rather than types.',
      },
      {
        title: 'Approval that follows your rules',
        body: 'Requests route to the right approver by amount, category and team — with a trail of who approved what, and when.',
      },
      {
        title: 'Hands off to accounting',
        body: 'Approved expenses move into the books through a QuickBooks connection instead of a monthly re-entry session.',
      },
      {
        title: 'Built for separate companies on one platform',
        body: 'Each company sees only its own data. Invoicing, approvals and accounting sync are being developed on this same platform.',
      },
    ],
    cta: { label: 'Talk to us about early access', href: '/contact/?interest=expense' },
    seoTitle: 'EZWorks Expense — receipt and expense workflow for small companies',
    seoDescription:
      'Capture receipts, read them automatically, route approvals by your own rules, and hand off to accounting. In development — talk to us about early access.',
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
