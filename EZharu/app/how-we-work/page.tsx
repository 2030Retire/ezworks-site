import Image from 'next/image';
import Link from 'next/link';
import { BrandGlyph, PageHero, SectionHead } from '@/components/Site';

const phases = [
  { icon:'search', n:'01', title:'Assessment', meta:'2 weeks · fixed price', copy:'We look at the week you actually have: the spreadsheet, the inbox, the handoff, and the person holding it together.', out:['Current-state read','Top three bottlenecks','Now / later / never roadmap'] },
  { icon:'process', n:'02', title:'Definition', meta:'A formal exit', copy:'Inputs, outputs, owners, completion conditions, exceptions, and data lineage are made explicit.', out:['One end-to-end process','Exception list','Smallest useful scope'] },
  { icon:'settings', n:'03', title:'Build & adoption', meta:'Weeks, not quarters', copy:'We build the smallest complete version, migrate the data, set permissions, train users, and stay through first use.', out:['Working system','Handover and rollback','Support through adoption'] },
] as const;

const steps = [
  ['search','Understand','We listen and learn about your needs.'],
  ['process','Plan','We identify practical solutions and quick wins.'],
  ['settings','Implement','We put the smallest complete solution in place.'],
  ['support','Support','We stay through adoption and real work.'],
] as const;

const fit = [
  'Operations run, but the procedure lives in people rather than documents',
  'A head-office system does not match local work and workarounds have accumulated',
  'Requests scatter across email and chat with no count of volume or waiting time',
  'The same judgement is made by hand every time and its criteria can be written down',
];

const notFit = [
  'Nobody can spare time to explain how the work runs',
  'A rewrite of a large system several teams already depend on',
  'AI adoption before anyone has settled what it is for',
  'Day-to-day desktop support or physical infrastructure',
];

const deliverables = [
  ['01', 'Current-state read', 'Where the process sits on the two readiness axes, with the reasoning.'],
  ['02', 'Bottleneck list', 'The top three, each with a count of where and how often hands are involved.'],
  ['03', 'Now / later / never', 'What should happen now, what should wait, and what should not be built.'],
  ['04', 'Process definition', 'Input, output, owner, and completion condition for each step.'],
  ['05', 'Exception list', 'Every departure from the normal path and how it is handled.'],
  ['06', 'Data lineage', 'The source from which every operational metric is read.'],
  ['07', 'Decision configuration', 'Thresholds and tolerances held as values rather than hidden in code.'],
  ['08', 'Failure procedure', 'The manual path for the day the feature or connection stops.'],
  ['09', 'Handover', 'Permissions, ownership, change instructions, and an immediate way back.'],
];

const disciplines = [
  ['connect', 'The first connection is read-only', 'We confirm what the data means before any system is allowed to write back.'],
  ['search', 'Remove a layer before adding one', 'If an existing system already knows the state, the manual copy in between is removed.'],
  ['data', 'One source per metric', 'The source of each number is fixed in writing before views and reports are built.'],
  ['support', 'The manual fallback comes first', 'For work that cannot stop, the way to continue by hand is defined before automation.'],
] as const;

export const metadata = { title: 'How We Work' };

export default function HowPage() {
  return <>
    <PageHero eyebrow="HOW WE WORK" title="Practical. Focused. Together." copy="Contracting everything as one block makes it hard to stop when the facts change. We work in clear segments, and the first two end with a real choice." visual={<div className="steps-visual">{steps.map(([icon,title,body]) => <div key={title}><BrandGlyph name={icon}/><p><b>{title}</b><small>{body}</small></p></div>)}</div>}/>
    <section className="method-photo method-photo-v2"><div className="shell"><Image src="/images/method-workshop-v2.png" alt="A working session arranging process steps on a table" fill sizes="1180px"/><div><p className="eyebrow">SEE THE WORK</p><h2>We start with the week you actually have.</h2><p>The inbox, spreadsheet, handoff, exception, and person holding it together all belong in the same picture.</p></div></div></section>
    <section className="section fit-section"><div className="shell"><SectionHead eyebrow="APPLIES TO" title="A clear fit — and a clear no." copy="A useful engagement needs access to the real work and a scope small enough to finish."/><div className="fit-grid"><article><span>GOOD FIT</span><ul>{fit.map(item => <li key={item}>✓ {item}</li>)}</ul></article><article className="not-fit"><span>NOT A FIT</span><ul>{notFit.map(item => <li key={item}>× {item}</li>)}</ul></article></div></div></section>
    <section className="section"><div className="shell"><SectionHead eyebrow="THE ENGAGEMENT" title="Three segments. Two places to stop." copy="Every segment leaves useful work behind, whether or not you continue."/><div className="phase-grid">{phases.map(phase => <article key={phase.n}><BrandGlyph name={phase.icon}/><span>{phase.n}</span><small>{phase.meta}</small><h2>{phase.title}</h2><p>{phase.copy}</p><ul>{phase.out.map(item => <li key={item}>✓ {item}</li>)}</ul></article>)}</div></div></section>
    <section className="section deliverables-section"><div className="shell"><SectionHead eyebrow="DELIVERABLES" title="Nine things that remain yours." copy="If the work stops at an exit, everything completed up to that point remains usable by your team or another firm."/><div className="deliverable-grid">{deliverables.map(([n,title,body], index) => <article key={n} data-segment={index < 3 ? 'Assessment' : index < 6 ? 'Definition' : 'Build & adoption'}><span>{n}</span><small>{index < 3 ? 'ASSESSMENT' : index < 6 ? 'DEFINITION' : 'BUILD & ADOPTION'}</small><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section discipline-section"><div className="shell"><SectionHead eyebrow="OPERATING DISCIPLINE" title="Four decisions made before the build."/><div className="discipline-grid">{disciplines.map(([icon,title,body]) => <article key={title}><BrandGlyph name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section decision-section"><div className="shell decision-layout"><div><SectionHead eyebrow="AUTOMATIC DECISIONS" title="The logic stays fixed. Its authority moves up." copy="“What if it decides wrong?” is answered with evidence and controlled stages, not a guarantee."/><p>Criteria remain in configuration, changes carry an effective date, and the number of records affected is counted before release.</p></div><ol><li><span>01</span><div><h3>Record only</h3><p>The system records its decision beside the human one. Live work is unaffected.</p></div></li><li><span>02</span><div><h3>Confirm after a delay</h3><p>The decision takes effect after a window in which a person can stop it.</p></div></li><li><span>03</span><div><h3>Immediate</h3><p>Authority rises only after agreement is sufficient and interventions have nearly stopped.</p></div></li></ol></div></section>
    <section className="review-detail"><div className="shell"><div><p className="eyebrow">THE REVIEW</p><h2>Fixed price. Fixed output.</h2><p>One process, two weeks, a current-state read, three bottlenecks, and a do-now / do-later / do-not list.</p></div><dl><div><dt>Duration</dt><dd>2 weeks</dd></div><div><dt>Price</dt><dd>$2,400 fixed</dd></div><div><dt>If it leads to a build</dt><dd>Credited in full</dd></div></dl></div></section>
    <section className="quote-band"><div className="shell"><p>Small enough to finish. Clear enough to hand over.</p><Link className="button" href="/contact/">Discuss your process →</Link></div></section>
  </>;
}
