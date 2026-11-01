import Image from 'next/image';
import Link from 'next/link';
import { BrandGlyph, PageHero, SectionHead } from '@/components/Site';

export const metadata = { title: 'About' };

const facts = [
  ['Based in', 'Georgia, United States'],
  ['What we do', 'Assessment · systems · integration · automation'],
  ['Who we help', 'Small companies and US subsidiaries without an IT function of their own'],
  ['What we build', 'Operational screens · intake · tracking · mobile apps'],
];

const principles = [
  ['search', 'Start from the week', 'What did somebody do by hand five times this week that they should not have had to?'],
  ['check', 'Small enough to finish', 'A scope that is built, delivered, and adopted beats one that only impresses in a meeting.'],
  ['process', 'Say when not to build', 'Sometimes changing how an existing tool is used is the honest and useful answer.'],
  ['support', 'Adoption is part of delivery', 'Migration, permissions, training, and the first weeks of use belong inside the work.'],
] as const;

export default function AboutPage() {
  return <>
    <PageHero eyebrow="ABOUT EZHARU" title="Practical tools. Real operational impact." copy="EZHaru is a software studio in Georgia, United States. We help organizations whose procedures live in people rather than documents — from definition through a system that operates." visual={<div className="photo-panel about-photo"><Image src="/images/about-operations-v2.png" alt="An operations team working across an office and logistics floor" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>}/>

    <section className="section"><div className="shell split about-story"><div><SectionHead eyebrow="WHY WE WORK ON THIS" title="The gap is rarely another missing tool."/><p>Head office may have supplied a system, yet local work still accumulates in spreadsheets, chat, calendars, and memory. That workaround layer quietly becomes the real operating standard.</p><p>Buying another system does not solve undefined work. We start by fixing what goes in, what comes out, and who owns the next move.</p><p>Sixteen years of practice have accumulated in that seat — across logistics and shipping, membership and billing, expenses and approval, assembly, intake, tracking, and decision automation.</p></div><div className="facts">{facts.map(([term, detail]) => <div key={term}><b>{term}</b><span>{detail}</span></div>)}</div></div></section>

    <section className="section work-forms"><div className="shell"><SectionHead eyebrow="TWO FORMS" title="The work becomes projects or products."/><div><article><BrandGlyph name="workflow"/><span>01</span><h3>Projects</h3><p>Assessment, definition, and build for work that differs by company. Most of our client work sits here.</p></article><article><BrandGlyph name="products"/><span>02</span><h3>Products</h3><p>Built ahead of time for operational problems that recur in the same shape. They can become the first useful step after an assessment.</p></article></div></div></section>

    <section className="section section-blue"><div className="shell"><SectionHead eyebrow="HOW WE THINK" title="Four habits we do not trade away."/><div className="feature-grid">{principles.map(([icon,title,body]) => <article key={title}><BrandGlyph name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div><Link className="button" href="/contact/">Tell us about the work →</Link></div></section>

    <section className="section ownership-section"><div className="shell"><SectionHead eyebrow="WHAT WE HOLD TO" title="The system should still belong to you after we leave."/><div className="ownership-grid"><article><h3>Data stays in systems you own.</h3><p>We design toward your storage, accounts, accounting software, and standard export formats.</p></article><article><h3>We do not build lock-in.</h3><p>Stop using an app and what accumulated should remain yours and readable as it stands.</p></article><article><h3>The way back is settled first.</h3><p>For work that cannot stop, the manual fallback is written before the automated feature.</p></article></div></div></section>
  </>;
}
