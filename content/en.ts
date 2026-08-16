import type {
  LegalDoc,
  NavGroup,
  NavItem,
  PageMeta,
  Product,
  ProductStatus,
  Service,
} from './types';

/**
 * English dictionary — the source of truth for the site's shape.
 *
 * `content/ko.ts` is typed against this object, so a key added here without a
 * Korean counterpart is a build error.
 *
 * Every href in here is locale-neutral (`/services/`). `getContent(lang)`
 * rewrites keys named `href` / `*Href` for the requested locale, so nothing in
 * this file ever mentions `/ko/`.
 */
export const en = {
  site: {
    name: 'EZWorks',
    tagline: 'Work, Simplified.',
    description:
      'EZWorks builds practical software and automation for small companies — and the people who run them.',
    url: 'https://ezworks.co',
    email: 'Help@ezworks.co',
    /** Country only. Never a street, city, postal code or phone number. */
    country: 'United States',
    copyrightYear: 2026,
  },

  /** Chrome that appears on every page. */
  ui: {
    skipToContent: 'Skip to content',
    homeAriaLabel: 'EZWorks home',
    primaryNavLabel: 'Primary',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    headerCta: 'Talk to us',
    languageLabel: 'Language',
    /** Accessible name for the switcher, which shows only the other locale. */
    switchLanguageLabel: 'View this page in Korean',
    effectiveDateLabel: 'Effective date:',
    footerBlurb:
      'Practical software and automation for small companies — and the people who run them.',
  },

  nav: {
    primary: [
      { href: '/services/', label: 'Services' },
      { href: '/products/', label: 'Products' },
      { href: '/about/', label: 'About' },
    ] as NavItem[],
    footer: [
      {
        title: 'Company',
        items: [
          { href: '/about/', label: 'About' },
          { href: '/contact/', label: 'Contact' },
        ],
      },
      {
        title: 'What we do',
        items: [
          { href: '/services/', label: 'Services' },
          { href: '/products/', label: 'Products' },
        ],
      },
      {
        title: 'Legal',
        items: [
          { href: '/privacy/', label: 'Website privacy' },
          { href: '/haru/privacy/', label: 'EZHaru app privacy' },
        ],
      },
    ] as NavGroup[],
  },

  /** Narrative content for the home page, in the order it is rendered. */
  home: {
    hero: {
      headline: 'Work, Simplified.',
      subhead:
        'We make the everyday work of a small company simpler — with practical software, automation, and the help to put it in place.',
      primaryCta: { label: 'Talk to us', href: '/contact/' },
      secondaryCta: { label: 'See what we build', href: '/products/' },
      footnote: 'For teams with no IT department to lean on — the whole company, or just the office you run.',
    },

    /**
     * The familiar operating problems. The point is not that email or
     * spreadsheets are bad tools — it is that people are moving the information
     * between them by hand.
     */
    problems: {
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
    },

    /** The three-part definition of the company. */
    approach: {
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
    },

    beliefs: {
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
    },

    /**
     * Proof of capability. Strictly factual and strictly anonymous.
     * No client names, no logos, no testimonials, no user counts.
     */
    proof: {
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
    },

    finalCta: {
      heading: 'Tell us what part of the week is worst.',
      body: 'Describe the process that keeps costing you time. We will tell you honestly whether it is worth automating, and what it would take.',
      cta: { label: 'Talk to us', href: '/contact/' },
    },

    /** Home-page framing around the shared product grid. */
    productsSection: {
      eyebrow: 'What we build',
      heading: 'Products we make ourselves.',
      lede: 'Tools we build and maintain ourselves, for the same kind of company we work with. Each one says exactly where it is — nothing here is unfinished software pretending otherwise.',
      allLink: 'See all products',
    },

    servicesSection: {
      eyebrow: 'Services',
      heading: 'Or we build it around how you already work.',
      lede: 'Most of what we do day to day is this: looking at a process a company already runs, and taking the manual parts out of it.',
      allLink: 'See how engagements work',
    },

    /**
     * Hero visual. Everything here is drawn in CSS/SVG, so these strings are
     * the entire textual content of the illustration.
     */
    diagram: {
      title: 'One receipt, no retyping',
      captureTitle: 'Photo taken at the counter',
      captureFile: 'receipt-0814.jpg',
      extractTitle: 'Read automatically',
      extractChip: 'no typing',
      rows: [
        { label: 'Vendor', value: 'Northline Supply' },
        { label: 'Date', value: 'Aug 14, 2026' },
        { label: 'Total', value: '$248.60', mono: true },
        { label: 'Category', value: 'Job materials' },
      ],
      approvedTitle: 'Approved by rule, posted to the books',
      approvedChip: 'synced',
      approvedBody:
        'Under the limit for its category, so it routed to one approver and went straight into accounting.',
      noteFile: '2026-08-14 Team sync.md',
      noteLines: [
        'Decision: pilot the new intake form in September',
        'Action: send the vendor list by Friday',
      ],
      noteFooter:
        'Written by EZHaru into your own cloud folder, seconds after the meeting ended.',
    },
  },

  /**
   * Product catalogue.
   *
   * Adding an entry here is the ONLY change needed to make a product appear on
   * the home page grid and on /products/, in both languages — no page component
   * edits. A product only gets its own route when `href` points at one that
   * exists.
   *
   * `status` must reflect reality. Nothing here is purchasable, so no prices.
   */
  products: [
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
  ] as Product[],

  productStatusLabels: {
    'private-alpha': 'Private alpha',
    'in-development': 'In development',
    'early-access': 'Early access',
  } as Record<ProductStatus, string>,

  /** Card verb on a product that has its own page. `{name}` is substituted. */
  productExploreLabel: 'Explore {name}',

  /**
   * Service catalogue. Adding an entry here updates the home summary and
   * /services/ — no page component edits.
   *
   * Only capabilities we can actually deliver. No partner or certification
   * claims: "connect with the systems your business already uses" is the ceiling.
   */
  services: [
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
  ] as Service[],

  /** How a services engagement runs, and who it fits. Used by /services/. */
  engagement: {
    steps: [
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
    ],
    goodFit: [
      'No in-house developers or IT team to hand it to',
      'A process that repeats every week and still needs a person to carry it',
      'Tools that already work individually but do not talk to each other',
      'A spreadsheet that has quietly become a production system',
    ],
    notAFit: [
      'A rewrite of a large system already in use across many teams',
      'Staffing — we build and hand over, we do not place developers',
      'Work where nobody internally can spare time to answer questions during the build',
    ],
  },

  pages: {
    home: {
      meta: {
        title: 'EZWorks — Work, Simplified.',
        description:
          'EZWorks builds practical software and automation for small companies — and the people who run them.',
      } as PageMeta,
    },

    services: {
      meta: {
        title: 'Services — automation, integration and implementation',
        description:
          'We analyse how your process actually runs, then automate the manual hand-offs: workflow automation, systems integration, process digitization, operational reporting, and the implementation to make it stick.',
        ogTitle: 'EZWorks Services — automation, integration and implementation',
        ogDescription:
          'Workflow automation, systems integration, process digitization, operational reporting, and implementation for companies without an IT department.',
      } as PageMeta,
      eyebrow: 'Services',
      title: 'We take the manual hand-offs out of the work you already do.',
      lede: 'Most small companies do not need to be reinvented. They need the three or four places where information gets carried by hand to stop needing a person. That is the work: analyse the process, automate what should not be manual, connect the systems, and stay until people are using it.',
      primaryCta: { label: 'Talk to us', href: '/contact/' },
      secondaryCta: { label: 'How an engagement runs', href: '#how-it-works' },
      whatWeDo: {
        eyebrow: 'What we do',
        heading: 'Five kinds of work, usually in combination.',
        lede: 'An engagement rarely lands in exactly one of these. Automating a process almost always means connecting something to something else, and it is never finished until people are actually using it.',
      },
      inPractice: 'In practice',
      connectNote:
        'We connect with the systems your business already uses, including accounting software such as QuickBooks and the Microsoft 365 tools most teams already have open all day.',
      howItRuns: {
        eyebrow: 'How it runs',
        heading: 'Small, working, and in your hands early.',
        lede: 'The failure mode in this kind of work is a long build against a document. We would rather you be using something real in weeks and telling us what is wrong with it.',
      },
      fit: {
        eyebrow: 'Fit',
        heading: 'Who this works for — and who it does not.',
        lede: 'Saying no to the wrong engagement early is cheaper for both of us than discovering it in month three.',
        goodTitle: 'A good fit',
        badTitle: 'Probably not us',
      },
      finalCta: {
        heading: 'Describe the process. We will tell you what it would take.',
        body: 'No obligation and no pitch deck — just an honest read on whether the thing that annoys you every week is worth building away.',
      },
    },

    products: {
      meta: {
        title: 'Products',
        description:
          'The software EZWorks builds and maintains: EZHaru, an AI voice recorder that files itself, and EZWorks Expense, a receipt and approval workflow. Each listed with its real status.',
        ogTitle: 'EZWorks Products',
        ogDescription:
          'EZHaru and EZWorks Expense — the software we build and maintain ourselves, each listed with its real status.',
      } as PageMeta,
      eyebrow: 'Products',
      title: 'Software we build and maintain ourselves.',
      lede: 'Two rules for this page: every product says exactly what stage it is at, and nothing is described as available before it is. If something here would help, the way in is a conversation — not a checkout.',
      legend: {
        eyebrow: 'Status',
        heading: 'What the badges mean.',
        lede: 'We would rather tell you a product is unfinished than have you discover it after a demo.',
        items: [
          { status: 'private-alpha' as ProductStatus, body: 'Working software, given to a small invited group. Expect rough edges and expect to talk to us.' },
          { status: 'early-access' as ProductStatus, body: 'Ready for real use with a limited number of companies, while we shape it around how they work.' },
          { status: 'in-development' as ProductStatus, body: 'Built, but not released. We are still deciding how and with whom it goes out.' },
        ],
      },
      finalCta: {
        heading: 'Interested in one of these?',
        body: 'Tell us which product and what you would use it for. That is genuinely how the invite and early-access lists are decided.',
      },
    },

    about: {
      meta: {
        title: 'About',
        description:
          'EZWorks is an independent software studio building practical tools and automation for small companies — and for the people who run them.',
        ogTitle: 'About EZWorks',
        ogDescription:
          'An independent software studio building practical tools and automation for small companies without an IT department.',
      } as PageMeta,
      eyebrow: 'About',
      title: 'An independent studio for companies that run on other people’s spare time.',
      lede: 'EZWorks builds practical software for small companies — and, just as much, for the people who run them. Our customers have no IT department to lean on, and the person who would fix a process is usually the person already doing it.',
      whyHeading: 'Why we work on this',
      whyParagraphs: [
        'Large companies solve operational drag by hiring for it. A thirty-person company cannot: the tedious middle of the work — the retyping, the chasing, the monthly rebuild of the same report — lands on whoever has capacity, usually the person least able to spare it.',
        'Software for that gap has generally been priced and shaped for somebody else. It arrives as a platform, needs a specialist to configure, and asks a company of thirty to work like a company of three thousand. So most small companies stay on email and spreadsheets, which work fine right up until they do not.',
        'We build the smaller thing instead: one tedious job removed properly, in your own systems, in weeks. Then the next one, only if the first one earned it.',
      ],
      halvesTitle: 'Two halves of the same job',
      halves: [
        {
          term: 'Products',
          detail:
            'Software we build and maintain ourselves, for problems that look the same across many small companies.',
        },
        {
          term: 'Services',
          detail:
            'Analysis, automation, integration and implementation for the parts of your process that are specific to you. This is most of what we do day to day.',
        },
      ],
      halvesNote:
        'Neither is a side line. The products come out of the same problems we keep meeting in the services work.',
      principlesEyebrow: 'How we work',
      principlesHeading: 'Four habits we do not trade away.',
      principles: [
        {
          title: 'We start from the week, not the roadmap',
          body: 'The useful question is never "what could this system do?" It is "what did somebody do by hand five times this week, that they should not have had to?" Everything we build starts from an answer to that.',
        },
        {
          title: 'Small enough to finish',
          body: 'A scope that can be built, delivered and actually adopted beats a scope that impresses in a meeting. If something cannot be useful within weeks, we would rather cut it down than start it big.',
        },
        {
          title: 'We say when something is not worth building',
          body: 'Sometimes the honest answer is that a change in how you already use a tool solves the problem, and we should not be paid to build anything. Saying so early is the cheapest thing we can do for you.',
        },
        {
          title: 'The rollout is part of the work',
          body: 'Software nobody adopted is not a delivery. Migration, permissions, training and the first weeks of real use are inside the job, not a phase you are left to run alone.',
        },
      ],
      quietNote:
        'We are deliberately quiet about the customers behind our work, so what we can show you is the work itself: a multi-tenant expense and approval platform, a multi-location membership and billing platform for a martial-arts school operator, and an AI voice recorder.',
      finalCta: {
        heading: 'If this sounds like your company, say hello.',
        body: 'Tell us what the worst repeating part of your week is. We will tell you plainly whether we can help.',
      },
    },

    contact: {
      meta: {
        title: 'Contact',
        description:
          'Tell us about the process that costs you the most time, or ask for an EZHaru alpha invite. We read every message ourselves.',
        ogTitle: 'Contact EZWorks',
        ogDescription:
          'Tell us about the process that costs you the most time, or ask for an EZHaru alpha invite.',
      } as PageMeta,
      title: 'Tell us what you would like to stop doing by hand.',
      lede: 'A short description of the problem is enough to start. We will tell you honestly whether it is worth building away, and what it would take.',
      asideTitle: 'Before you write',
      answers: [
        {
          q: 'What happens after you send this?',
          a: 'We read it ourselves — there is no sales team in between — and normally reply within a business day.',
        },
        {
          q: 'What is useful to include?',
          a: 'The process that annoys you most, roughly how many people touch it, and which tools it currently runs through. That is enough for a first honest answer.',
        },
        {
          q: 'Asking about an EZHaru invite?',
          a: 'Pick EZHaru above and say what you would be recording — meetings, site visits, classes. It helps us choose testers whose use we can actually support.',
        },
        {
          q: 'Do you publish pricing?',
          a: 'Not yet. What something costs depends on the scope, and we would rather scope it with you than post a number that fits nobody.',
        },
      ],
      preferEmail: 'Prefer plain email?',
    },

    haru: {
      /** Title and description come from the catalogue entry's SEO fields. */
      headlineLead: 'Record.',
      headlineAccent: 'Everything else is done for you.',
      lede: 'Tap a category and record. When you stop, EZHaru writes the transcript, the summary and a tidy note file into the right folder of your own cloud — no renaming, no filing, no copying it somewhere else afterwards.',
      inviteCta: 'Request an alpha invite',
      privacyCta: 'Read the privacy policy',
      setupNote:
        'Private alpha on Android; iOS planned. Because it runs on your own accounts, first-time setup takes about ten minutes.',
      featuresEyebrow: 'What it does',
      featuresHeading: 'The filing is the feature.',
      featuresLede:
        'Plenty of apps record audio. The work that actually costs you time is everything after: transcribing it, pulling out what mattered, naming the file, and putting it somewhere you will find it again.',
      screensEyebrow: 'In the app',
      screensHeading: 'Three taps, then nothing to do.',
      screenshots: [
        { src: '/haru/screen-record.png', alt: 'The EZHaru recording screen, with categories to tap before recording', caption: 'Tap a category, record' },
        { src: '/haru/screen-summary.png', alt: 'An EZHaru summary showing key points and action items', caption: 'Summary with action items' },
        { src: '/haru/screen-history.png', alt: 'The EZHaru history screen listing past recordings and their notes', caption: 'Everything already filed' },
      ],
      screenshotPlaceholder: 'Screenshot coming soon',
      ownership: {
        eyebrow: 'Ownership',
        heading: 'Your keys. Your storage. Your data.',
        body: 'EZHaru has no server of ours. Audio goes from your phone to your own OneDrive, and transcription runs on an AI service you connect with your own API key.',
        note: 'That is not a policy we could change quietly — there is no place in the design where your recordings could reach us. It also means the transcription runs under your own agreement with your vendor, at their cost, with no middleman.',
        link: 'Read the privacy policy →',
        rows: [
          { label: 'Audio', value: 'Your phone → your own OneDrive' },
          { label: 'Transcription', value: 'The AI service you connect, with your own API key' },
          { label: 'Notes', value: 'Markdown files in your own folders' },
          { label: 'Us', value: 'No server, no account, no copy' },
        ],
      },
      statusHeading: 'Where it actually is right now',
      statusItems: [
        { title: 'Private alpha', body: 'Invited testers only. It works, and it is still changing week to week.' },
        { title: 'Android first', body: 'An iOS version is planned but not started.' },
        { title: 'About ten minutes to set up', body: 'Connecting your own cloud and your own API key is a one-time step, and it is the price of there being no server of ours.' },
      ],
      /** A note file as EZHaru produces it — the actual output, not decoration. */
      note: {
        file: 'Work/Meetings/2026-08-14 Client call.md',
        summaryLabel: 'Summary',
        summary:
          'Reviewed the September rollout. Agreed to start with one location before extending to the rest.',
        actionsLabel: 'Action items',
        actions: [
          'Send revised timeline by Thursday',
          'Confirm who owns the intake form',
          'Book the follow-up for the 28th',
        ],
        footer: 'Saved to your own OneDrive · full transcript below in the same file',
      },
    },
  },

  contactForm: {
    interests: [
      { value: 'services', label: 'Services — automation, integration or implementation' },
      { value: 'haru', label: 'EZHaru — request an alpha invite' },
      { value: 'expense', label: 'EZWorks Expense — early access' },
      { value: 'other', label: 'Something else' },
    ],
    nameLabel: 'Your name',
    emailLabel: 'Email',
    companyLabel: 'Company',
    companyHint: 'Optional',
    interestLabel: 'What is this about?',
    messageLabel: 'What would you like to change?',
    messageHint: 'The process that costs you the most time is a good place to start.',
    submit: 'Send message',
    submitting: 'Sending…',
    /**
     * These three pairs wrap the site email address, which renders as a link
     * between them: `{lead} <email>{tail}`. Korean needs a particle after the
     * address, which is why the tail exists at all.
     */
    orEmail: 'Or email',
    orEmailTail: '',
    errors: {
      name: 'Please tell us your name.',
      emailMissing: 'We need an email address to reply to.',
      emailInvalid: 'That does not look like an email address.',
      message: 'A sentence or two about what you need, please.',
    },
    sendFailedLead: 'That did not go through. Please try again, or email',
    sendFailedTail: '.',
    successMailtoTitle: 'Your mail app should be open.',
    successMailtoBodyLead:
      'We drafted the message for you; send it and it comes straight to us. If nothing opened, email',
    successMailtoBodyTail: ' directly.',
    successTitle: 'Thank you — that reached us.',
    successBody:
      'We read every message ourselves and normally reply within a business day.',
    sendAnother: 'Send another message',
    /** Prefix for the generated mail subject, followed by the interest label. */
    mailSubject: 'Website enquiry —',
    mailName: 'Name',
    mailCompany: 'Company',
    mailEmail: 'Email',
    mailInterest: 'Interest',
  },

  legal: {
    /** Website privacy policy — covers ezworks.co itself. */
    website: {
      title: 'Website Privacy',
      effectiveDate: 'August 14, 2026',
      backHref: '/',
      backLabel: 'EZWorks',
      blocks: [
        {
          kind: 'callout',
          text: '**The short version:** this website has no analytics, no tracking scripts, no advertising cookies and no third-party fonts. The only personal data we hold is what you choose to send us through the contact form or by email.',
        },
        { kind: 'heading', text: 'Scope' },
        {
          kind: 'text',
          text: 'This policy covers the ezworks.co website. Our EZHaru mobile app is covered by its own separate policy — [read the EZHaru privacy policy](/haru/privacy/).',
        },
        { kind: 'heading', text: 'What this site does not do' },
        {
          kind: 'list',
          items: [
            'No analytics or measurement product is installed.',
            'No advertising, remarketing or social tracking pixels are present.',
            'No cookies are set for tracking or profiling. The site works without you accepting anything.',
            'No third-party fonts, stylesheets or scripts are loaded, so visiting this site does not disclose your visit to another company through page assets.',
          ],
        },
        { kind: 'heading', text: 'Hosting' },
        {
          kind: 'text',
          text: 'This site is a set of static files served by GitHub Pages. Like any web host, the provider processes technical connection data — such as IP address, browser user agent and requested URL — in order to deliver the page and to protect the service. We do not receive, store or analyse those logs.',
        },
        { kind: 'heading', text: 'The contact form' },
        {
          kind: 'text',
          text: 'The form asks for your name, email address, an optional company name, what your enquiry is about, and your message. If a form endpoint has not been configured, the form simply opens a prefilled draft in your own mail app and nothing is transmitted until you send it. Where an endpoint is configured, the fields above are sent to it so that the message reaches our inbox.',
        },
        {
          kind: 'text',
          text: 'We use what you send only to reply to you and to carry on the resulting conversation. We do not sell it, share it for marketing, or add you to a mailing list.',
        },
        { kind: 'heading', text: 'Retention' },
        {
          kind: 'text',
          text: 'Enquiries live in our email for as long as the conversation is commercially relevant. You may ask us to delete your enquiry and our replies at any time, and we will.',
        },
        { kind: 'heading', text: 'Your choices' },
        {
          kind: 'text',
          text: 'Write to us and we will tell you what we hold about you, correct it, or delete it. Because we collect nothing automatically, in almost every case that is simply the email thread you started.',
        },
        { kind: 'heading', text: 'Children' },
        {
          kind: 'text',
          text: 'This website is intended for business use and is not directed to children.',
        },
        { kind: 'heading', text: 'Changes' },
        {
          kind: 'text',
          text: 'If we add anything that changes the picture above — a measurement tool, a different form provider — we will update this page and change the effective date before it takes effect.',
        },
        { kind: 'heading', text: 'Contact' },
        { kind: 'contactEmail' },
      ],
    } as LegalDoc,

    websiteMeta: {
      title: 'Website Privacy',
      description:
        'How ezworks.co handles data: no analytics, no tracking scripts, no advertising cookies, and no third-party fonts. The only personal data we receive is what you send us.',
    } as PageMeta,

    /**
     * EZHaru app privacy policy.
     *
     * ⚠️ This URL is submitted to the Play Store — /haru/privacy/ must not
     * change. The legal wording below is carried over verbatim from the
     * previously published version. Do not reword.
     */
    haru: {
      title: 'EZHaru Privacy Policy',
      effectiveDate: 'August 15, 2026',
      backHref: '/haru/',
      backLabel: 'EZHaru',
      blocks: [
        {
          kind: 'callout',
          text: '**The short version:** EZHaru records audio on your phone and turns it into transcripts and summaries. **We do not operate any server, and we never receive your recordings, transcripts, or personal data.** Your data goes only to places you own or choose: your device, your own cloud storage (Microsoft OneDrive or Google Drive), and the AI service you connect with your own API key.',
        },
        { kind: 'heading', text: 'What data the app handles, and where it goes' },
        {
          kind: 'table',
          headers: ['Data', 'Where it goes', 'Who can access it'],
          rows: [
            [
              'Voice recordings',
              'Your device → your own cloud storage, OneDrive or Google Drive (if you connect it) → the transcription service you configured with your own API key',
              'Only you, via your own accounts',
            ],
            [
              'Transcripts & summaries (.md notes)',
              'Your device → your own OneDrive or Google Drive / OneNote (optional)',
              'Only you',
            ],
            [
              'Location (optional)',
              'Stored on your device to label where a recording was made. Never sent to us. You can deny the permission; recording works without it',
              'Only you',
            ],
            [
              'Microsoft account sign-in',
              'An access token is stored encrypted on your device to upload to your own OneDrive. We never see your password or token',
              'Only you',
            ],
            [
              'Google account sign-in (optional)',
              'If you connect Google Drive, an access token is stored encrypted on your device and used only to upload your files to your own Drive. We request the narrow drive.file scope, which grants access solely to files the app itself creates — never to anything else in your Drive. We never see your password or token',
              'Only you',
            ],
            [
              'API keys you enter',
              'Stored encrypted on your device. Sent only to the AI vendor you chose',
              'Only you and your chosen vendor',
            ],
          ],
        },
        { kind: 'heading', text: 'What we do NOT do' },
        {
          kind: 'list',
          items: [
            'We do **not** operate servers that receive your audio, text, or usage data.',
            'We do **not** collect analytics, advertising identifiers, or crash reports.',
            'We do **not** sell, share, or have access to any of your data.',
            'The app creates **no developer-side account** — there is nothing for us to delete because we hold nothing.',
          ],
        },
        { kind: 'heading', text: 'Third-party services you may connect' },
        {
          kind: 'text',
          text: "When you connect a service, your data is handled under that service's terms with you: Microsoft OneDrive/OneNote and Google Drive (storage you own) and the transcription/summary AI vendor you configure (for example Groq or Anthropic — using your own API key, under your own agreement with them). Choose vendors whose data-retention terms you are comfortable with; the app works with any compatible provider, including self-hosted ones.",
        },
        { kind: 'heading', text: 'Google user data and Limited Use' },
        {
          kind: 'text',
          text: "If you choose to connect Google Drive, EZHaru's use of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.",
        },
        {
          kind: 'list',
          items: [
            'Google user data is used **only** to provide and improve the features you asked for — uploading your recordings and notes to your own Google Drive.',
            'We do **not** use Google user data for advertising of any kind.',
            'We do **not** allow humans to read your Google user data, except where you explicitly ask us to for support, where it is necessary for security purposes such as investigating abuse, or where the law requires it.',
            'We do **not** sell, rent, or transfer Google user data to anyone.',
            'We request the narrowest scope that works: **drive.file**, which can only see and manage the files EZHaru itself creates. The rest of your Drive is never accessible to the app.',
          ],
        },
        {
          kind: 'text',
          text: 'In practice this is straightforward, because the app has no server: Google user data never leaves your device except to travel to your own Google Drive. It does not pass through us, and we hold no copy of it.',
        },
        { kind: 'heading', text: 'Data deletion' },
        {
          kind: 'text',
          text: "Delete recordings in the app (you choose whether the cloud copy is deleted too). Disconnect OneDrive or Google Drive in Settings to revoke the app's access instantly; you can also revoke Google access at any time from your [Google Account permissions page](https://myaccount.google.com/permissions). Uninstalling the app removes all local data. Files already in your own cloud storage, and any data held by your chosen AI vendor, are under your own control through those accounts.",
        },
        { kind: 'heading', text: 'Recording consent' },
        {
          kind: 'text',
          text: 'You are responsible for complying with the recording-consent laws of your location and the policies of your institution when you record other people.',
        },
        { kind: 'heading', text: 'Children' },
        { kind: 'text', text: 'This app is not directed to children under 13.' },
        { kind: 'heading', text: 'Changes' },
        {
          kind: 'text',
          text: "If the app's architecture ever changes in a way that affects this policy (for example, introducing an optional server-based plan), we will update this policy and note the change here before it takes effect.",
        },
        { kind: 'heading', text: 'Contact' },
        { kind: 'contactEmail' },
      ],
    } as LegalDoc,

    haruMeta: {
      title: 'EZHaru Privacy Policy',
      description:
        'EZHaru records audio on your phone and turns it into transcripts and summaries. We operate no server and never receive your recordings, transcripts or personal data.',
    } as PageMeta,
  },
};

export type Dictionary = typeof en;
