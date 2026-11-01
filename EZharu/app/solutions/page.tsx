import Image from 'next/image';
import Link from 'next/link';
import { BrandGlyph, PageHero, ReviewBanner, SectionHead } from '@/components/Site';

const problems = [
  ['The same number is typed twice', 'A value entered in one place gets retyped in another.'],
  ['Progress has to be asked for', 'Answering “where are we?” means calling a meeting.'],
  ['Approvals happen, records do not', 'The decision was made; who approved it and when is nowhere.'],
  ['A spreadsheet is the system', 'One person actually understands its structure.'],
  ['Requests scatter across chat and email', 'There is no reliable count of what came in or what is left.'],
  ['The same report is rebuilt monthly', 'By the time it is done, the numbers are already old.'],
  ['A person bridges two systems', 'The gap is copied by hand even when both systems hold the state.'],
  ['Each person handles it differently', 'Throughput changes when the experienced person is away.'],
];

const readiness = [
  { state: 'Neither is in place', signal: 'Requests scatter across email and chat; records end up in spreadsheets.', start: 'Build intake and history first so every request receives a number.' },
  { state: 'A system exists, but the process is undefined', signal: 'The head-office system does not match local work, so workarounds multiply.', start: 'Define the process. Buying more software is not the answer.' },
  { state: 'Process and system are both in place', signal: 'Systems produce data and each step has clear inputs and outputs.', start: 'Attach automation and AI directly, with controlled authority.' },
];

const areas = [
  {
    icon: 'search', n: '01', title: 'Assessment and definition', summary: 'Deciding what to do first. You do not need requirements written up.',
    when: ['It is not settled what should be done first', 'Departments describe the same work differently', 'Requirements cannot yet be written down'],
    leaves: ['Current-state read', 'Top three bottlenecks, with counts', 'Now / later / never roadmap', 'Process definition and exception list'],
    caseTitle: 'When the bottleneck was neither equipment nor headcount',
    caseBody: 'Shipping looked slow and invisible. The actual issue was a manual scheduling layer requiring five updates per shipment, even though the systems of record already exchanged data.',
  },
  {
    icon: 'process', n: '02', title: 'Operational systems', summary: 'Intake, approval, and billing — the daily work, moved inside a system.',
    when: ['Conditions differ by case and are calculated by hand', 'Approvals happen in chat and leave no record', 'The work stops completely when the workaround stops'],
    leaves: ['One working process end to end', 'Rules held as configuration', 'Manual failure procedure', 'Permissions, change, and rollback handover'],
    caseTitle: 'When fees differed for every member',
    caseBody: 'Join date, contract term, discounts, and mid-term changes were moved from monthly mental arithmetic into operational values. Only the first cycle still required judgement.',
  },
  {
    icon: 'connect', n: '03', title: 'Integration and operational visibility', summary: 'Read from the systems you already have so the floor and office see the same state.',
    when: ['Checking progress means asking a person', 'The same metric differs between screens', 'Several sites operate across time zones'],
    leaves: ['Floor and office views at different levels', 'One documented source per metric', 'A read-only first connection', 'A common operational refresh interval'],
    caseTitle: 'When a person was bridging two systems',
    caseBody: 'Instead of improving the manual calendar, it was removed. Existing systems supplied the state directly to a floor board and an office view across five sites and three time zones.',
  },
  {
    icon: 'automation', n: '04', title: 'Automatic decisions', summary: 'The logic stays fixed; only its authority to act moves up.',
    when: ['The same criteria are reviewed by hand every time', 'The criteria can be written down', 'Reversing a wrong decision is expensive'],
    leaves: ['Decision logic and configurable criteria', 'Record-only comparison period', 'Delayed confirmation window', 'Impact count, effective date, and rollback'],
    caseTitle: 'When every case was reviewed by hand',
    caseBody: 'The system first recorded decisions beside human ones, then confirmed after a delay, and only acted immediately after agreement and interventions proved the rules.',
  },
] as const;

export const metadata = { title: 'Solutions' };

export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="CONSULTING & SOLUTIONS" title="From challenges to practical solutions." copy="We define the work, build operational systems, connect what already works, and automate only after the groundwork is ready." visual={<div className="photo-panel solutions-photo"><Image src="/images/solutions-workshop-v2.png" alt="A consultant and business owner mapping an operational process" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>}/>

    <section className="section problem-finder"><div className="shell"><SectionHead eyebrow="START HERE" title="Does one of these sound like your week?" copy="Written as problem names rather than project names. The symptom tells us where to start." />
      <div className="problem-grid">{problems.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="section readiness-section"><div className="shell"><SectionHead eyebrow="READINESS" title="Two things set the starting point." copy="Is the process defined? Does core operational data live in a system of its own? The answer decides the first project." />
      <div className="readiness-table"><div className="readiness-head"><span>Current state</span><span>What it looks like</span><span>First project</span></div>{readiness.map((row, index) => <article key={row.state}><b><i>0{index + 1}</i>{row.state}</b><p>{row.signal}</p><p>{row.start}</p></article>)}</div>
      <p className="readiness-note">The middle row is common in US subsidiaries of Korean companies: headquarters supplied a system, but no one locally owns the gap between that system and the work.</p>
    </div></section>

    <section className="section service-areas"><div className="shell"><SectionHead eyebrow="FOUR AREAS" title="The work inside each solution." copy="Each area shows when it applies, what remains when the engagement ends, and the kind of operating problem it resolves."/>
      <div className="service-area-list">{areas.map(area => <article key={area.n}>
        <header><BrandGlyph name={area.icon}/><div><small>{area.n}</small><h2>{area.title}</h2><p>{area.summary}</p></div></header>
        <div className="area-columns"><div><h3>When this fits</h3><ul>{area.when.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>What is left</h3><ul>{area.leaves.map(item => <li key={item}>{item}</li>)}</ul></div></div>
        <aside><span>FROM THE WORK</span><h3>{area.caseTitle}</h3><p>{area.caseBody}</p></aside>
      </article>)}</div>
    </div></section>

    <section className="quote-band"><div className="shell"><p>Adding a tool to undefined work adds one more workaround.</p><Link className="button" href="/how-we-work/">See how the work runs →</Link></div></section>
    <ReviewBanner/>
  </>;
}
