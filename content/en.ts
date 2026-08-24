import type {
  LegalDoc,
  NavGroup,
  NavItem,
  PageMeta,
  ProblemName,
  Product,
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
    tagline: 'Groundwork before automation.',
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
      { href: '/method/', label: 'How it runs' },
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
          { href: '/method/', label: 'How it runs' },
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
      eyebrow: 'EZWorks · United States',
      headline: 'Groundwork before AI',
      image: {
        src: '/photo/hero.jpg',
        alt: 'A shipping dock, with a work list being checked on a tablet',
        subject: 'Hero photograph — a real site: dock, assembly line, or an operations screen in use. 4:3 or 5:4, 1400px wide or more',
      },
      criterion:
        'Whether AI can be attached is decided by **where the state of the work lives** — not by the tool. Inside a system, or in someone’s head and a spreadsheet.',
      abstract: [
        {
          label: 'Problem',
          body: 'One click builds anything, the story goes. Applied to your own company it comes apart. The cause is **not the model — it is that the work was never defined.**',
        },
        {
          label: 'Order',
          body: 'Define the process, fix its inputs and outputs, let data accumulate, then AI. **Each step is the precondition for the next.** It is not a menu.',
        },
        {
          label: 'Start',
          body: 'A two-week review at a fixed price. It produces a read on the current state, three bottlenecks, and a do-now / do-later / do-not list. **Those remain even if you stop there.**',
        },
      ],
      cta: { label: 'Request a review', href: '/contact/' },
    },

    reality: {
      eyebrow: 'The Reality',
      heading: 'A structure where people become the bottleneck',
      lede: 'Work cannot be divided the way a large company divides it, so the owner and a few early people carry effectively all of it.',
      items: [
        {
          title: 'Your own work starts after hours',
          body: 'Customers and incoming requests consume the day.',
        },
        {
          title: 'Procedure lives in people, not documents',
          body: 'Time off is a burden. A resignation is an incident.',
        },
        {
          title: 'Nothing records where the work stalls',
          body: 'Always busy, with no way to tell what to fix.',
        },
        {
          title: 'The same report is rebuilt every month',
          body: 'By the time it is finished the numbers are already old.',
        },
      ],
    },

    mismatch: {
      eyebrow: 'Why It Does Not Fit',
      heading: 'Why the answer sounds right but is not yours',
      body: [
        'Ask, and the answers come out well. It drafts documents and writes code. Then you try to put it into your own operation and it slips.',
        'The reason is not the model. It is that nothing records where your work starts and ends, what goes in and what comes out. AI operates on what has been defined. With no definition, it answers in generalities.',
        'Where definition is missing, a person fills the gap. On one project two systems of record were already exchanging data automatically. Yet to see progress you had to look at neither of them — you looked at a scheduling calendar, because someone changed a colour by hand at every step.',
        'That layer is recorded nowhere. So nothing records how long anything takes, either.',
      ],
      figureCaption:
        'AI can work on the upper half. The lower half is written down nowhere, so it is neither something to learn from nor something to automate.',
      stat: 'Gartner expects organisations to abandon 60% of AI projects unsupported by AI-ready data through 2026. In the same survey, 63% of 248 data-management leaders were unsure whether their organisation had data management practices suited to AI.',
      statSource: 'Gartner · Lack of AI-Ready Data Puts AI Projects at Risk (2025)',
    },

    groundwork: {
      eyebrow: 'The Groundwork',
      heading: 'The step that was skipped',
      lede: 'Without the one before it, the next does not hold. These four are preconditions, not options.',
      figureCaption:
        'Walked in order, the four steps take weeks. Started backwards, you return to step one half a year later.',
      steps: [
        {
          title: 'Define the process',
          then: 'Work that depends on a specific person becomes work anyone with basic knowledge can carry out.',
          why: 'Undefined work is not a candidate for automation — it is a candidate for interpretation, and interpretation differs by person.',
        },
        {
          title: 'Fix inputs and outputs',
          then: 'Once each step’s inputs and outputs are settled, records begin to accumulate at those points.',
          why: 'Data is not gathered separately. It is the trace left behind by defined work.',
        },
        {
          title: 'Data, then pattern',
          then: 'Where the work stalls, and how much, and what repeats, become visible as numbers.',
          why: 'Without a pattern there is no way to choose what to automate. Chosen by guess, the wrong thing gets automated.',
        },
        {
          title: 'Ready for AI',
          then: 'Repeated judgements become rules; only what does not reduce to a rule goes to AI.',
          why: 'Arriving in this order, adopting AI is a matter of weeks. Arriving in reverse, it takes half a year and is abandoned.',
        },
      ],
      arrival:
        'The end state is one where nobody moves work by hand. Data flows, repeated judgements are made by the system, and the time of key people goes only to work that needs judgement.',
    },

    readiness: {
      eyebrow: 'Readiness',
      heading: 'Two axes that set the starting point',
      lede: 'Whether the process is defined, and whether core operational data lives in a system of its own. These two set the starting point, and the starting point decides the first project.',
      headers: ['Current state', 'What it looks like', 'First project'],
      rows: [
        [
          'Neither a defined process nor a system to hold the data',
          'Requests scatter across email and chat; records end up in spreadsheets',
          'Intake and history first. A shared intake queue so every request gets a number',
        ],
        [
          'A system exists, but the process was never defined',
          'Headquarters supplied a system that does not match local work, so workarounds multiply',
          'Define the process. Buying more software is not the answer',
        ],
        [
          'Both in place',
          'Systems are producing data and the inputs and outputs of each step are clear',
          'Attach automation and AI directly',
        ],
      ],
      note: 'The second row is the one most often found at US subsidiaries of Korean companies. Headquarters does not know local conditions, and locally there is nobody to close the gap. That is the seat we have occupied for sixteen years.',
    },

    method: {
      eyebrow: 'How It Runs',
      heading: 'Assessment, definition, build',
      lede: 'Contract a project as one block and it becomes hard to stop even once you can see it is wrong. The work is split into three segments, and the end of each of the first two is a formal exit.',
      segments: [
        {
          kicker: 'Segment 1',
          title: 'Assessment',
          meta: '2 weeks · fixed price',
          output: 'Current read · three bottlenecks · now / later / never',
          exit: 'Exit 1',
        },
        {
          kicker: 'Segment 2',
          title: 'Requirement definition',
          meta: 'Scope settled',
          output: 'Process definition · inputs and outputs · exception list',
          exit: 'Exit 2',
        },
        {
          kicker: 'Segment 3',
          title: 'Build and adoption',
          meta: 'One process',
          output: 'A working system · handover · failure procedure',
        },
      ],
      closing: [
        'You do not need to arrive with requirements written up. **We start on the assumption that they cannot be written yet.** The usual approach takes in requirements and returns them when they fall short; there is no return step here — segment 2 does that work instead.',
        'The contract can end at either exit. Everything produced through segment 2 is left in a form another firm could pick up and use as it stands.',
      ],
    },

    discipline: {
      eyebrow: 'Discipline',
      heading: 'The order in which automatic decisions are switched on',
      lede: '“What happens when the AI gets it wrong” is the most common question. It is answered with an order, not a guarantee. The decision logic stays exactly as it is; only its authority to act moves up.',
      stages: [
        {
          name: 'Stage 1 · Record only',
          body: 'The system decides and records, nothing more. Through that period its decisions sit alongside the human ones for comparison, and where they diverge the rules are corrected. Live work is unaffected.',
        },
        {
          name: 'Stage 2 · Confirm after a delay',
          body: 'A decision does not take effect immediately. It confirms automatically once a set interval passes, and a person can step in and stop it during that window.',
        },
        {
          name: 'Stage 3 · Immediate',
          body: 'Switched on once stage 1 shows sufficient agreement with human decisions and stage 2 shows interventions have all but stopped.',
        },
      ],
      rules: [
        {
          title: 'Where the criteria live — configuration, not code',
          body: 'Thresholds and tolerances are changed by the person who owns the work, without a developer. Every change carries a delay and an effective date, and before release we count how many records would come out differently. Any version can be rolled back at once.',
        },
        {
          title: 'The first connection is read-only',
          body: 'The first connection to a system holding core data is read-only. Every view can be built with reads alone, and that stage is where the meaning of the data is confirmed. By the time writes are needed, the system is already understood.',
        },
        {
          title: 'Before adding, look for a layer to remove',
          body: 'Meeting an awkward manual tool, improving that tool feels natural — and the manual work stays. Where a system already knows the state, the layer that copies it across is treated as something to remove, not improve.',
        },
        {
          title: 'One source per metric, fixed in advance',
          body: 'Reports and historical aggregates come from the warehouse, the state of this moment from the system of record directly, order and customer state from the CRM. Left unfixed in writing, the same metric starts showing different values on different screens.',
        },
        {
          title: 'The manual fallback comes first',
          body: 'For work that stops the day when it stops, the manual fallback is settled before the feature. No payment: a manual invoice. No kiosk: direct entry on the admin screen. Automation without a fallback is not an improvement — it is a new single point of failure.',
        },
      ],
    },

    repeated: {
      eyebrow: 'Same Decision',
      heading: 'The same judgement, four projects apart',
      lede: 'Not declared as a principle. Recorded as decisions.',
      headers: ['Where', 'What was done'],
      rows: [
        ['Membership and billing', 'Found that a billing rule contradicted the system’s own guarantee, and moved the confirmation out of the screen and up to a decision gate'],
        ['Expenses and approval', 'An item is not passed to approval while any exception raised in validation remains open'],
        ['Voice records', 'Introduced a confidence convention so that no code could be written on top of an unverified legal fact'],
        ['Decision automation', 'Split the authority to decide into three stages, raised only after comparison with human decisions'],
      ],
      closing:
        'All four are the same judgement — do not proceed while uncertain. More precisely: build the thing that notices the uncertainty first.',
    },

    selfApply: {
      eyebrow: 'First Application',
      heading: 'The first thing it was applied to',
      body: [
        'The order set out above — define the process, fix inputs and outputs, accumulate data, then AI — was first applied not to a client but to **our own operation.**',
        'Starting a business brought all of it at once: expenses, invoices, receivables, turning what was said in a meeting into requirements, keeping track of what still had to be done. Memory did not scale. So the same procedure was applied to us first.',
      ],
      figureCaption:
        'These were not built in order to be sold. They are what came out of the same procedure.',
      closing: [
        'So the products do two things. One is to serve as **evidence that the procedure actually produces working systems.** The other is to be a **finished starting point** for the first thing adopted after an assessment. A company whose requests are scattered across chat and email does not need intake and tracking built from scratch.',
        'The scope shows here too. Not only web screens — **mobile applications and store release** sit inside the same procedure. Where an app is what is needed, an app is what gets built.',
      ],
      arrival:
        'Product or internal system, none of it began from a requirements document handed over. Each started by finding the problem and deriving the requirements first-hand.',
    },

    review: {
      eyebrow: 'Review',
      heading: 'The review — fixed price, fixed output',
      lede: 'What comes after depends on what is found. The review has a defined output, so its price is known before it starts.',
      spec: [
        { key: 'Scope', value: 'One process · includes reading the whole flow' },
        { key: 'Duration', value: '2 weeks' },
        { key: 'Price', value: 'Fixed, $2,400' },
        { key: 'If it leads to a build', value: 'Credited in full' },
      ],
      body: [
        'The output is a read on the current state, three bottlenecks, and a do-now / do-later / do-not list. Those three remain even if you stop at the review.',
        '**Two things are needed from your side.** One person who can explain how the company’s work flows end to end, and a working session with whoever owns the area that needs improvement. Without the second, the review turns into generalities.',
        'The figures above are for a single process. Where the subject spans several functions or several sites, the review itself is priced separately — and that price is also settled before it starts.',
        'Because it is credited in full, there is only one case in which this stage costs you anything: a review that concludes “not now.” We hold that such a conclusion is worth more than its price.',
      ],
      quote:
        'Instead of saying “it depends on the company,” we say: in this state it takes this many weeks, and one step up it would have taken this many.',
    },

    turnDown: {
      eyebrow: 'What We Turn Down',
      heading: 'Work we do not take',
      items: [
        'Projects where nobody can spare the time. With no one to ask, the work gets built on assumptions, and the mistake surfaces only once it is finished.',
        'Rewrites of large systems several teams already depend on.',
        'Staff augmentation. We build and hand over.',
        'Physical infrastructure and day-to-day desktop support.',
        'Adopting AI without having settled what it is for.',
      ],
      closing:
        'What changed is not how capable the tools are. It is the smallest job worth doing. Automation at a scale that used to be abandoned for want of a viable quote now finishes in weeks.',
    },

    summary: {
      eyebrow: 'Summary',
      heading: 'In short',
      points: [
        'AI does not fit your company because nothing records where the work starts and ends — not because the model is weak.',
        'Define the process, fix inputs and outputs, accumulate data, then AI. In order it takes weeks; in reverse you are back at the start half a year later.',
        'Two things set the starting point — whether the process is defined, and whether core data lives in a system of its own.',
      ],
      nextLabel: 'One thing next',
      next: 'Name the process that takes the most hands, in one line. That line sets the scope of the review.',
    },

    finalCta: {
      heading: 'Get in touch — one question',
      body: 'We answer first whether this is a situation that warrants a review, or whether it is not the moment.',
      cta: { label: 'Get in touch', href: '/contact/' },
    },

    methodSpec: {
      definitionLabel: 'In one sentence',
      definition:
        'A way of running the work to one standard — starting where requirements cannot yet be written, defining the process, building a structure that leaves records, and moving repeated judgements to the system.',

      fitEyebrow: 'Applies To',
      fitHeading: 'Who this fits',
      fitYes: {
        title: 'A fit',
        items: [
          'Operations that run, but whose procedure lives in people rather than documents',
          'Local subsidiaries with a head-office system that does not match local work, where workarounds have accumulated',
          'Requests scattered across email and chat, with no way to count volume or waiting time',
          'The same judgement made by hand every time, where the criteria could be written down',
        ],
      },
      fitNo: {
        title: 'Not a fit',
        items: [
          'Nobody who can spare the time to explain how the work runs',
          'Rewrites of a large system several teams already depend on',
          'Adopting AI without having settled what it is for',
          'Day-to-day desktop support and physical infrastructure',
        ],
      },

      ledgerEyebrow: 'Deliverables',
      ledgerHeading: 'What is left behind',
      ledgerLede:
        'Each segment leaves documents in a fixed format. If the work ends midway, everything up to that point still stands — including if you take it elsewhere.',
      ledgerGroups: [
        {
          segment: 'Segment 1 · Assessment',
          items: [
            { no: '01', title: 'Current-state read', body: 'Where you sit on the two readiness axes, with the reasoning.' },
            { no: '02', title: 'Bottleneck list', body: 'The top three, each with a count of where and how often hands are involved.' },
            { no: '03', title: 'Now / later / never', body: 'Including what not to do, and why it is excluded.' },
          ],
        },
        {
          segment: 'Segment 2 · Definition',
          items: [
            { no: '04', title: 'Process definition', body: 'Input, output, owner and completion condition, per step.' },
            { no: '05', title: 'Exception list', body: 'Every departure from the normal path, and how each is handled.' },
            { no: '06', title: 'Data lineage', body: 'Which source each metric is read from. This is the document that stops one number differing between screens.' },
          ],
        },
        {
          segment: 'Segment 3 · Build and adoption',
          items: [
            { no: '07', title: 'Decision configuration', body: 'Thresholds and tolerances as values, not code. Changed by the owner without a developer.' },
            { no: '08', title: 'Failure procedure', body: 'The manual path for when it stops. Written before the feature.' },
            { no: '09', title: 'Handover', body: 'Permissions, how to change it, how to roll it back. After handover it runs without us.' },
          ],
        },
      ],

      compareEyebrow: 'Difference',
      compareHeading: 'Where this departs from the usual approach',
      compareHeaders: ['', 'The usual approach', 'Here'],
      compareRows: [
        ['Requirements', 'Written and submitted by the client', 'Assumed absent, derived together in segment 2'],
        ['If they fall short', 'Returned for rewriting', 'There is no return step — segment 2 does that work'],
        ['Contract unit', 'One block', 'Per segment; the end of each of the first two is a formal exit'],
        ['Stopping midway', 'Negotiated break', 'A formal exit. The deliverables remain'],
        ['Automatic decisions', 'Switched on in full once built', 'Logic fixed; only its authority moves up, in three stages'],
        ['Connecting to systems', 'Read and write together', 'The first connection is read-only'],
        ['Failure planning', 'Reviewed after the feature is done', 'The manual path is written before the feature'],
        ['Documents', 'Assembled at project close', 'Left in a fixed format at each segment'],
      ],
      compareNote:
        'This is not a claim that the right column is better. Starting from requirements that cannot yet be written produces this order — and the cost is more time in segments 1 and 2.',
    },

    paths: {
      eyebrow: 'Where To Look',
      heading: 'Where to start reading',
      lede: 'There is an order to these. Either way they arrive at the same place.',
      items: [
        {
          title: 'Services — four areas, with the work in each',
          body: 'Assessment and definition, operational systems, integration and visibility, automatic decisions. Each area carries the work actually done in it.',
          href: '/services/',
          linkLabel: 'See the services',
        },
        {
          title: 'How it runs — segments and exits',
          body: 'Assessment, definition, build. The end of each of the first two is a formal exit. The nine deliverables and the fixed review price are here too.',
          href: '/method/',
          linkLabel: 'See how it runs',
        },
        {
          title: 'Products — a finished starting point',
          body: 'Built while applying the same procedure to our own work first. They also serve as the first thing adopted after an assessment.',
          href: '/products/',
          linkLabel: 'See the products',
        },
      ],
    },
    productsSection: {
      eyebrow: 'Products',
      heading: 'What we build and run ourselves',
      lede: 'These came out of applying the procedure above to our own work. They attach to what you already run — SAP, Microsoft 365 and the Power Platform, accounting software including QuickBooks, and CRMs.',
      allLink: 'See all products',
    },

    figures: {
      manualLayer: {
        alt: 'The integration between systems is automatic, but where definition is missing a person copies the state across by hand, and that layer is recorded nowhere',
        definedBand: 'Defined — automatic',
        systemA: 'System A',
        systemB: 'System B',
        systemC: 'System C',
        link: 'integrated',
        asideOne: 'each already does',
        asideTwo: 'its own part',
        manualBand: 'Undefined — a person',
        manualTools: 'Scheduling calendar · spreadsheets · chat · word of mouth',
        manualNote: 'Copied by hand at every step — nothing reports a mismatch',
        unrecorded: 'No record kept',
      },
      chain: {
        alt: 'Four steps from defining the process to applying AI run as preconditions, and skipping the order returns you to the first step',
        inOrder: 'In order — weeks',
        steps: [
          { title: 'Define process', note: 'person-bound → delegable' },
          { title: 'Fix in / out', note: 'records begin' },
          { title: 'Data · pattern', note: 'where it stalls' },
          { title: 'Apply AI', note: 'only beyond rules' },
        ],
        reversed: 'Skip it and you come back here — half a year, then step one again',
        footnote: 'Each step makes the material for the next. Without it, the next step is a guess.',
      },
      selfApply: {
        alt: 'The same four steps were applied to our own work first, the products are what that produced, and the same procedure is then applied to client work',
        ourWorkBand: 'Our own work',
        ourWork: ['Expenses · invoices · receivables', 'Requirements from meetings', 'To-do · state of play', 'Held together by memory'],
        procedure: 'The same four steps',
        procedureSteps: 'define → in/out → data → AI',
        procedureNote: 'identical to what we propose',
        outputBand: 'What had to be built along the way',
        outputs: [
          'Voice records — so nothing said is lost',
          'Expenses · approval — for what returns monthly',
          'Intake · tracking — to give requests a number',
        ],
        loopNote: 'This is where the procedure is shown to work',
        closing: 'The same procedure is applied to client work. The products are evidence of what it produces.',
      },
    },

    servicesSection: {
      eyebrow: 'Services',
      heading: 'Listed by problem, not by project',
      lede: 'Written as problem names rather than project names. If one of them has the name of what you are living with, that is where we start.',
      allLink: 'See how it runs',
    },
  },

  products: [
    {
      slug: 'class',
      name: 'EZClass',
      tagline: 'Members, attendance and billing in one place.',
      description:
        'An operations system for multi-site academies and studios. Billing conditions that differ per member are held as rules, so nothing is recalculated by hand each month.',
      features: [
        { title: 'Billing becomes lookup', body: 'The amount follows join date, billing date and contract end. A person confirms the first cycle; the rest is automatic.' },
        { title: 'No payment method, no auto-run', body: 'Those records drop out of automatic processing and stay on a list. Nothing fails quietly.' },
        { title: 'Per site and consolidated', body: 'Sites can work differently and head office still reads them on one basis.' },
      ],
      cta: { label: 'Get in touch about EZClass', href: '/contact/?interest=class' },
      seoTitle: 'EZClass — multi-site membership, attendance and billing',
      seoDescription:
        'Membership, classes, attendance and billing for academies and studios running several sites. Billing conditions that differ per member are handled as rules.',
    },
    {
      slug: 'haru',
      name: 'EZHaru',
      tagline: 'Record. Everything else is done for you.',
      description:
        'An AI voice recorder that files itself. Tap a category and record — the transcript, the summary and a tidy note file appear in your own cloud, already in the right folder.',
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
      cta: { label: 'See EZHaru', href: '/haru/' },
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
      cta: { label: 'Get in touch about Expense', href: '/contact/?interest=expense' },
      seoTitle: 'EZWorks Expense — receipt and expense workflow for small companies',
      seoDescription:
        'Capture receipts, read them automatically, route approvals by your own rules, and hand off to accounting. Get in touch about putting it to work.',
    },
  ] as Product[],

  /** Card verb on a product that has its own page. `{name}` is substituted. */
  productExploreLabel: 'Explore {name}',

  /**
   * Service catalogue. Adding an entry here updates the home summary and
   * /services/ — no page component edits.
   *
   * Only capabilities we can actually deliver. No partner or certification
   * claims: "connect with the systems your business already uses" is the ceiling.
   */
  problemNames: [
    { title: 'The same number is typed twice', note: 'A value entered in one place gets retyped in another.', area: 'systems' },
    { title: 'Progress has to be asked for', note: 'Answering “where are we?” means calling a meeting.', area: 'visibility' },
    { title: 'Approvals happen, records do not', note: 'The decision was made; who approved it and when is nowhere.', area: 'systems' },
    { title: 'A spreadsheet is the system', note: 'One person actually understands its structure.', area: 'systems' },
    { title: 'Requests scatter across chat and email', note: 'No way to count what came in or what is left.', area: 'define' },
    { title: 'The same report is rebuilt monthly', note: 'By the time it is done the numbers are old.', area: 'visibility' },
    { title: 'A person bridges two systems', note: 'The integration is automatic; the gap is copied by hand.', area: 'visibility' },
    { title: 'Each person handles it differently', note: 'Throughput changes on the days the experienced one is away.', area: 'decisions' },
  ] as ProblemName[],

  services: [
    {
      slug: 'define',
      title: 'Assessment and definition',
      summary: 'Deciding what to do first. You do not need requirements written up.',
      body: 'Adding a tool to undefined work adds one more workaround. First we settle what goes in and what comes out, and count where and how often hands are involved. Most engagements start here, and stopping here still leaves something behind.',
      when: [
        'It is not settled what should be done first',
        'Requirements cannot yet be written down',
        'Departments describe the same work differently',
      ],
      outputs: [
        'Current-state read — position on the two readiness axes, with reasoning',
        'Bottleneck list — the top three, with counts',
        'Now / later / never — including what not to do, and why',
        'Process definition — input, output, owner, completion condition',
        'Exception list and data lineage',
      ],
      cases: [
        {
          title: 'When the bottleneck was neither equipment nor headcount',
          body: 'The stated problem was slow shipping and no visibility. The two systems of record were already exchanging data automatically; to see progress you had to look at a scheduling calendar instead, because someone changed a colour by hand at every step.',
          result: 'Classified as a layer to remove rather than improve — evidenced by counting five manual updates per shipment.',
        },
      ],
    },
    {
      slug: 'systems',
      title: 'Operational systems',
      summary: 'Intake, approval and billing — the daily work, moved inside a system.',
      body: 'When the rules live in someone’s head they get recalculated every month, and a mistake is invisible until later. We move the rules into data so calculation becomes lookup, and reduce the points a person must judge to the one that needs judgement. Web screens, mobile apps and store release sit in the same scope.',
      when: [
        'Work where the conditions differ per case and are calculated by hand',
        'Approvals that happen in chat and leave no record',
        'Work that stops the day when it stops',
      ],
      outputs: [
        'A working system — one process end to end',
        'Decision configuration — thresholds as values, not code',
        'Failure procedure — the manual path, written before the feature',
        'Handover — permissions, how to change it, how to roll it back',
      ],
      cases: [
        {
          title: 'When fees differed per member and a person did the maths',
          body: 'Join date, contract term, sibling discounts and mid-term changes overlapped, so the amount differed for every member. The rules were absorbed into three columns rather than code branches — join date, billing date, contract end.',
          result: 'The judgement point went from every member every month to one first cycle. Records without a payment method drop out of automatic processing and stay on a list, so nothing fails quietly.',
        },
        {
          title: 'When approvals existed but approval records did not',
          body: 'Receipts arrived by email and the same figures were copied into spreadsheets and then accounting. The path from capture to posting was fixed at nine steps, with the validation gate placed before approval.',
          result: 'The re-entry step is gone. While any exception is open an item cannot reach approval, so nothing already approved has to be reversed.',
        },
      ],
    },
    {
      slug: 'visibility',
      title: 'Integration and operational visibility',
      summary: 'Read from the systems you already have, so the floor and the office see the same data.',
      body: 'Often a system already knows the state and a person is copying it across. That layer is something to remove, not improve. The first connection is read-only, and the source for each metric is fixed in writing before anything is built.',
      when: [
        'Checking progress means asking a person',
        'The same metric shows different values on different screens',
        'Several sites, in different time zones',
      ],
      outputs: [
        'A floor screen and an office screen — same data, different altitude',
        'Data lineage — one source per metric, fixed',
        'Read-only integration — starting without writing to your systems',
      ],
      cases: [
        {
          title: 'When a person was bridging two systems',
          body: 'Rather than improve the manual calendar, we removed it. The systems already knew the state, so we read them directly and put the result on a floor board and an office screen. Trucks register on the timetable when they are scheduled, and a supervisor assigns the stage to prepare.',
          result: 'Manual updates per shipment: five to none. Dock duplicate entry: three or more people on station, to one supervisor assigning stages. Five sites across three time zones aggregated on a common interval. Loading order follows the screen rather than the driver’s experience.',
        },
      ],
    },
    {
      slug: 'decisions',
      title: 'Automatic decisions',
      summary: 'The logic stays fixed; only its authority to act moves up.',
      body: '“What if it decides wrong” cannot be answered with a guarantee. It is answered with an order: the same logic goes from record-only, to confirm-after-a-delay, to immediate. Agreement does not decide when it is switched on — agreement with human decisions does.',
      when: [
        'Work approved by hand every time against the same criteria',
        'Criteria that could be written down',
        'Work where reversing a wrong decision is expensive',
      ],
      outputs: [
        'Decision logic — identical across all three stages',
        'Criteria in configuration — changed by the owner, without a developer',
        'Change control — delay, effective date, pre-release impact count, instant rollback',
      ],
      cases: [
        {
          title: 'When every case was reviewed by hand',
          body: 'The logic was completed first, then its authority split into three stages. Stage one records only, sitting alongside the human decisions for comparison; stage two confirms automatically after a set interval, with a window for a person to stop it.',
          result: 'The decision to switch on is made from data. Criteria live in configuration, changes carry a delay and an effective date, and the number of records that would come out differently is counted before release.',
        },
      ],
    },
  ],
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
        title: 'EZWorks — Groundwork before automation',
        description:
          'Define the work, make it leave records, move repeated judgements to the system. AI comes after that.',
      } as PageMeta,
    },

    products: {
      meta: {
        title: 'Products',
        description:
          'Software we build and run ourselves. EZClass for multi-site membership and billing, EZHaru for voice records, EZWorks Expense for expenses and approval.',
        ogTitle: 'EZWorks products',
        ogDescription: 'What we build and run ourselves — EZClass · EZHaru · EZWorks Expense.',
      } as PageMeta,
      eyebrow: 'Products',
      title: 'Built while applying the procedure to our own work.',
      lede: 'Not products planned in order to be sold — things that had to be built while applying the same procedure to our own operation first. They also serve as a starting point after an assessment.',
      finalCta: {
        heading: 'Not sure which one fits',
        body: 'Name the process that takes the most hands and we will say first whether a product fits or whether something has to be built.',
      },
    },

    method: {
      meta: {
        title: 'How it runs — assessment, definition, build',
        description:
          'Three segments, with the end of each of the first two a formal exit. Each segment leaves documents in a fixed format.',
      } as PageMeta,
      eyebrow: 'How it runs',
      title: 'Three segments, and two places to stop.',
      lede: 'You do not need to arrive with requirements written up. We start on the assumption that they cannot be written yet.',
    },

    services: {
      meta: {
        title: 'Services — assessment, systems, integration, automatic decisions',
        description:
          'Assessment and definition, operational systems, integration and visibility, automatic decisions. Each area carries the work actually done in it.',
        ogTitle: 'EZWorks services',
        ogDescription:
          'Four areas, each with the work actually done in it. What we can do and what we have done, in the same place.',
      } as PageMeta,
      eyebrow: 'Services',
      title: 'Four areas, and what was actually done in each.',
      lede: 'List capabilities in one place and cases in another, and the reader has to connect them. So each area carries its own work directly underneath.',
      problemsEyebrow: 'Start Here',
      problemsHeading: 'If one of these has the name of your situation, start there',
      problemsLede: 'Written as problem names rather than project names. Each one moves to the area that handles it.',
      areasEyebrow: 'Areas',
      whenLabel: 'When',
      outputsLabel: 'What is left',
      casesLabel: 'What was done',
      resultLabel: 'Result',
      finalCta: {
        heading: 'Name the process that takes the most hands.',
        body: 'We answer first whether this is a situation that warrants a review, or whether it is not the moment.',
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
      image: {
        src: '/photo/about.jpg',
        alt: 'Notes being taken while walking a process on site',
        subject: 'About photograph — a workspace or site, a person may appear. 3:2, 1400px wide or more',
      },
      title: 'We start with defining the work.',
      lede: 'EZWorks is a software studio in Georgia, United States. For organisations whose procedure lives in people rather than documents, we run the work to one standard — from definition through to a system that operates.',
      factsTitle: 'At a glance',
      facts: [
        { term: 'Based in', detail: 'Georgia, United States' },
        { term: 'What we do', detail: 'Assessment · definition · systems · integration · automatic decisions' },
        { term: 'Who we meet', detail: 'US subsidiaries of Korean companies, and companies with no IT function of their own' },
        { term: 'What we attach to', detail: 'SAP · Microsoft 365 and the Power Platform · accounting including QuickBooks · CRMs · warehouse and record systems' },
        { term: 'What we build', detail: 'Operations screens and dashboards · intake and tracking · automatic decisions · mobile apps and store release' },
        { term: 'Contact', detail: 'Email' },
      ],
      whyHeading: 'Why we work on this',
      whyParagraphs: [
        'It is not that local subsidiaries have no systems. Head office supplied one. The problem is that it does not match local work, so workarounds accumulate — in spreadsheets, in chat, in a scheduling calendar — until that layer becomes the operational standard in practice.',
        'Buying another system does not answer this. Adding a tool to undefined work adds one more workaround. The first thing to settle is what goes in and what comes out.',
        'Sixteen years of practice have accumulated in that seat: logistics and shipping, membership and billing, expenses and approval, decision automation, assembly, intake and tracking. None of it began from a requirements document handed over — each started by finding the problem on site and deriving the requirements first-hand.',
      ],
      halvesTitle: 'Two forms the work takes',
      halves: [
        {
          term: 'Projects',
          detail:
            'Assessment, definition and build for work that differs per company. Most of what we do sits here.',
        },
        {
          term: 'Products',
          detail:
            'Built ahead of time for problems that recur in the same shape across companies. They serve as the first thing adopted after an assessment.',
        },
      ],
      halvesNote:
        'The products came out of problems met repeatedly in project work, and were applied to our own operation first.',
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
      beliefs: {
        eyebrow: 'What we hold to',
        heading: 'Three things we keep to when we design.',
        items: [
          {
            title: 'Data stays in systems the client owns.',
            body: 'We design so the data ends up in your storage, your accounts, your accounting software. Where a product genuinely needs a server, its own page says so. We do not make a blanket promise we cannot keep everywhere.',
          },
          {
            title: 'We do not build lock-in.',
            body: 'Stop using our app tomorrow and what accumulated is still yours, still readable as it stands. Notes are ordinary markdown files in your own folder, and records export in standard formats. Leaving should be dull.',
          },
          {
            title: 'The way back is settled first.',
            body: 'For work that stops the day when it stops, the manual fallback is written before the feature. Automation without a fallback is not an improvement — it is a new single point of failure.',
          },
        ],
      },
    },

    contact: {
      meta: {
        title: 'Contact',
        description:
          'Tell us about the process that costs you the most time. We read every message ourselves.',
        ogTitle: 'Contact EZWorks',
        ogDescription:
          'Tell us about the process that costs you the most time.',
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
      inviteCta: 'Get in touch about EZHaru',
      privacyCta: 'Read the privacy policy',
      setupNote:
        'Android first, iOS after. Because it runs on your own accounts, first-time setup takes about ten minutes.',
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
      statusHeading: 'Before you start',
      statusItems: [
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
      { value: 'haru', label: 'EZHaru' },
      { value: 'expense', label: 'EZWorks Expense' },
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
          text: 'This site is a set of static files served by Vercel. Like any web host, the provider processes technical connection data — such as IP address, browser user agent and requested URL — in order to deliver the page and to protect the service. We do not receive, store or analyse those logs.',
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
