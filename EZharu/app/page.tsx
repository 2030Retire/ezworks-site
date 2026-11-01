import Image from 'next/image';
import Link from 'next/link';
import { BrandGlyph, GroundworkBanner, ProductCard, ReviewBanner, SectionHead } from '@/components/Site';
import { products } from '@/components/data';

export default function HomePage() {
  return <>
    <section className="home-hero">
      <Image src="/images/hero-office.png" alt="A bright, calm workspace prepared for the day" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="shell hero-copy">
        <p className="eyebrow">PEOPLE + PROCESSES + A SMARTER TOMORROW</p>
        <h1>Making every<br />workday <span>easier.</span></h1>
        <p>Practical tools and services for real work. Start simple. Save time. Focus on what matters.</p>
        <div className="actions"><Link href="/solutions/" className="button">Explore Solutions <span>→</span></Link><Link href="/products/" className="button secondary">Explore Products</Link></div>
        <div className="hero-proof"><span><BrandGlyph name="people"/>Real business experience</span><span><BrandGlyph name="settings"/>Practical solutions</span><span><BrandGlyph name="data"/>Measurable progress</span></div>
      </div>
      <p className="hand-note">Less work.<br />More progress.</p>
    </section>

    <section className="section ways"><div className="shell">
      <SectionHead eyebrow="TWO WAYS WE HELP" title="From understanding to real results." copy="Whether you need hands-on support or focused tools, EZHaru meets you where the work is." centered />
      <div className="ways-grid">
        <article><BrandGlyph name="workflow" className="big-icon consulting-icon"/><div><h3>Consulting &amp; Solutions</h3><p>We study how the work actually happens, define the process, connect the systems, and automate what makes sense.</p><Link href="/solutions/">Explore Solutions →</Link></div></article>
        <article><BrandGlyph name="products" className="big-icon cubes"/><div><h3>EZHaru Products</h3><p>Simple, focused tools built from operational problems we have had to solve ourselves.</p><Link href="/products/">Explore Products →</Link></div></article>
      </div>
    </div></section>

    <section className="section reality-section"><div className="shell">
      <SectionHead eyebrow="THE REALITY" title="When people become the operating system." copy="Small teams carry work across inboxes, spreadsheets, calendars, and memory. The company stays busy, but the system cannot show where the work is waiting." />
      <div className="reality-grid">
        {[
          ['Your own work starts after hours', 'Customers and incoming requests consume the day.'],
          ['Procedure lives in people', 'Time off becomes a burden. A resignation becomes an incident.'],
          ['Progress has to be asked for', 'Answering “where are we?” means calling a meeting.'],
          ['The same report is rebuilt monthly', 'By the time it is finished, the numbers are already old.'],
        ].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}
      </div>
      <div className="reality-action"><p>The problem is usually not a weak tool. It is that the work was never defined in a form a tool can use.</p><Link className="text-link" href="/solutions/">Find your starting point →</Link></div>
    </div></section>

    <section className="section products-section"><div className="shell">
      <div className="section-row"><SectionHead eyebrow="OUR PRODUCTS" title="Tools for a simpler workday." copy="Use them individually or together — each one keeps the next step clear." /><Link className="text-link" href="/products/">View all products →</Link></div>
      <div className="product-grid">{products.map(p => <ProductCard product={p} key={p.slug} />)}</div>
    </div></section>
    <GroundworkBanner />

    <section className="section process-preview"><div className="shell">
      <div className="section-row"><SectionHead eyebrow="HOW WE WORK" title="A practical path from friction to progress." copy="Each stage leaves something useful behind. The first two include a clear place to stop." /><Link className="text-link" href="/how-we-work/">See the full process →</Link></div>
      <ol className="process-line">{['Understand', 'Define', 'Build', 'Put it to work'].map((x, i) => <li key={x}><span>{i + 1}</span><div><h3>{x}</h3><p>{['See the week you actually have.', 'Fix inputs, outputs, owners, and exceptions.', 'Make the smallest complete version.', 'Migrate, train, and stay through real use.'][i]}</p></div></li>)}</ol>
    </div></section>
    <ReviewBanner />
  </>;
}
