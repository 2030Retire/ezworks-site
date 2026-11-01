import Image from 'next/image';
import Link from 'next/link';
import { PageHero, ProductCard, ProductMockup, SectionHead } from '@/components/Site';
import { products } from '@/components/data';

export const metadata = { title: 'Products' };

export default function ProductsPage() {
  return <>
    <PageHero eyebrow="EZHARU PRODUCTS" title="Simple tools for real work." copy="Built while applying our own method to recurring operational problems — useful on their own, stronger as part of a clear process." visual={<div className="product-stack">{products.map((product, index) => <div key={product.slug} style={{'--i': index} as React.CSSProperties}><ProductMockup type={product.slug} compact /></div>)}</div>}/>
    <section className="section product-origin"><div className="shell split"><div><SectionHead eyebrow="FIRST APPLICATION" title="We applied the method to our own operation first."/><p>Starting a business brought expenses, invoices, receivables, meeting requirements, and the state of unfinished work all at once. Memory did not scale.</p><p>Recorder, Expense, Invoice, and Class are not arbitrary product ideas. They are working systems produced by defining the process, fixing inputs and outputs, and making the work leave records.</p><div className="origin-flow"><span>Work held in memory</span><i>→</i><span>Define the path</span><i>→</i><strong>A finished starting point</strong></div></div><div className="origin-photo"><Image src="/images/products-workday-v2.png" alt="An organized workspace representing recording, expenses, invoices, and class operations" fill sizes="(max-width: 800px) 100vw, 50vw"/></div></div></section>
    <section className="section"><div className="shell"><SectionHead eyebrow="PRODUCT FAMILY" title="Start with the work that costs you time." copy="Each product removes a familiar chain of copying, chasing, renaming, or recalculating."/><div className="product-grid product-grid-large">{products.map(product => <ProductCard product={product} key={product.slug}/>)}</div></div></section>
    <section className="soft-cta"><div className="shell product-contact product-contact-graphic"><div className="product-rings" aria-hidden="true"><i/><i/><i/><i/></div><div><p className="eyebrow">NOT SURE WHICH FITS?</p><h2>Name the process that takes the most hands.</h2><p>We will tell you whether a product fits, whether something must be defined first, or whether your existing tools are already enough.</p><Link className="button" href="/contact/">Start a conversation →</Link></div></div></section>
  </>;
}
