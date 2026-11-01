import Image from 'next/image';
import Link from 'next/link';
import type { Locale, Product, ProductKey } from './data';
import { products } from './data';

const Arrow = () => <span aria-hidden="true">→</span>;
export const localizePath = (locale: Locale, path: string) => locale === 'ko' ? (path === '/' ? '/ko/' : `/ko${path}`) : path;

type GlyphName = 'people' | 'workflow' | 'products' | 'search' | 'process' | 'document' | 'data' | 'connect' | 'settings' | 'sparkles' | 'check' | 'automation' | 'support';

const glyphPaths: Record<GlyphName, React.ReactNode> = {
  people: <><circle cx="11" cy="9" r="3"/><circle cx="21" cy="10" r="2.5"/><path d="M4 24c0-4 3-7 7-7s7 3 7 7M18 18c4-1 8 2 8 6"/></>,
  workflow: <><rect x="4" y="6" width="8" height="7" rx="2"/><rect x="20" y="6" width="8" height="7" rx="2"/><rect x="12" y="21" width="8" height="7" rx="2"/><path d="M12 9.5h8M8 13v4h8v4M24 13v4h-8"/></>,
  products: <><rect x="5" y="5" width="9" height="9" rx="2"/><rect x="18" y="5" width="9" height="9" rx="2"/><rect x="5" y="18" width="9" height="9" rx="2"/><rect x="18" y="18" width="9" height="9" rx="2"/></>,
  search: <><circle cx="14" cy="14" r="7"/><path d="m20 20 6 6"/></>,
  process: <><rect x="6" y="5" width="20" height="22" rx="3"/><path d="M11 11h10M11 16h10M11 21h6"/></>,
  document: <><path d="M8 4h11l5 5v19H8Z"/><path d="M19 4v6h6M12 16h8m-8 5h8"/></>,
  data: <><ellipse cx="16" cy="8" rx="9" ry="4"/><path d="M7 8v8c0 2 4 4 9 4s9-2 9-4V8M7 16v8c0 2 4 4 9 4s9-2 9-4v-8"/></>,
  connect: <><circle cx="7" cy="16" r="3"/><circle cx="24" cy="8" r="3"/><circle cx="24" cy="24" r="3"/><path d="m10 15 11-6M10 17l11 6"/></>,
  settings: <><circle cx="16" cy="16" r="4"/><path d="M16 4v4m0 16v4M4 16h4m16 0h4M7.5 7.5l3 3m11 11 3 3m0-17-3 3m-11 11-3 3"/></>,
  sparkles: <><path d="m16 4 2.2 6.8L25 13l-6.8 2.2L16 22l-2.2-6.8L7 13l6.8-2.2L16 4Z"/><path d="m25 21 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/></>,
  check: <><rect x="5" y="5" width="22" height="22" rx="6"/><path d="m10 16 4 4 8-9"/></>,
  automation: <><path d="M8 12a9 9 0 0 1 16-3l2 3M24 20a9 9 0 0 1-16 3l-2-3"/><path d="M26 6v6h-6M6 26v-6h6"/></>,
  support: <><path d="M6 17v-2a10 10 0 0 1 20 0v2"/><path d="M6 17h4v8H8a2 2 0 0 1-2-2v-6Zm20 0h-4v8h2a2 2 0 0 0 2-2v-6ZM22 25c-1 3-5 3-7 3"/></>,
};

export function BrandGlyph({ name, className = '' }: { name: GlyphName; className?: string }) {
  return <span className={`brand-glyph ${className}`}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{glyphPaths[name]}</svg></span>;
}

export function Header({ locale = 'en', alternateHref }: { locale?: Locale; alternateHref?: string }) {
  const ko = locale === 'ko';
  const href = (path: string) => localizePath(locale, path);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href={href('/')} className="brand" aria-label={ko ? 'EZHaru 홈' : 'EZHaru home'}>
          <Image src="/ezharu-logo.svg" alt="EZHaru — Making every workday easier" width={1500} height={420} priority />
        </Link>
        <nav className="desktop-nav" aria-label={ko ? '주요 메뉴' : 'Primary navigation'}>
          <Link href={href('/')}>{ko ? '홈' : 'Home'}</Link>
          <Link href={href('/solutions/')}>{ko ? '솔루션' : 'Solutions'}</Link>
          <Link href={href('/products/')}>{ko ? '제품' : 'Products'}</Link>
          <Link href={href('/how-we-work/')}>{ko ? '진행 방식' : 'How We Work'}</Link>
          <Link href={href('/about/')}>{ko ? '회사 소개' : 'About'}</Link>
        </nav>
        <Link className="language-switch" href={alternateHref ?? (ko ? '/' : '/ko/')} hrefLang={ko ? 'en' : 'ko'} aria-label={ko ? 'View in English' : '한국어로 보기'}>{ko ? 'EN' : '한국어'}</Link>
        <Link className="button button-small" href={href('/contact/')}>{ko ? '검토 요청' : 'Request a Review'} <Arrow /></Link>
        <details className="mobile-menu">
          <summary aria-label={ko ? '메뉴 열기' : 'Open menu'}><i /><i /><i /></summary>
          <nav>
            <Link href={href('/')}>{ko ? '홈' : 'Home'}</Link><Link href={href('/solutions/')}>{ko ? '솔루션' : 'Solutions'}</Link><Link href={href('/products/')}>{ko ? '제품' : 'Products'}</Link>
            <Link href={href('/how-we-work/')}>{ko ? '진행 방식' : 'How We Work'}</Link><Link href={href('/about/')}>{ko ? '회사 소개' : 'About'}</Link><Link href={href('/contact/')}>{ko ? '문의' : 'Contact'}</Link><Link href={ko ? '/' : '/ko/'}>{ko ? 'English' : '한국어'}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer({ locale = 'en' }: { locale?: Locale }) {
  const ko = locale === 'ko';
  const href = (path: string) => localizePath(locale, path);
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="footer-logo"><Image src="/footer-logo-official.svg" alt="EZHaru — Making every workday easier" width={1500} height={420} /></span>
          <p>{ko ? '작은 회사와 그 안에서 일하는 사람을 위한 실용적인 소프트웨어와 자동화.' : 'Practical software and automation for small companies — and the people who run them.'}</p>
        </div>
        <div><h3>{ko ? '제품' : 'Products'}</h3>{products.map(p => <Link key={p.slug} href={href(`/products/${p.slug}/`)}>{p.shortName}</Link>)}</div>
        <div><h3>{ko ? '솔루션' : 'Solutions'}</h3><Link href={href('/solutions/')}>{ko ? '업무 진단' : 'Assessment'}</Link><Link href={href('/solutions/')}>{ko ? '운영 시스템' : 'Operational systems'}</Link><Link href={href('/solutions/')}>{ko ? '연결' : 'Integration'}</Link><Link href={href('/solutions/')}>{ko ? '자동화' : 'Automation'}</Link></div>
        <div><h3>{ko ? '회사' : 'Company'}</h3><Link href={href('/about/')}>{ko ? '회사 소개' : 'About'}</Link><Link href={href('/how-we-work/')}>{ko ? '진행 방식' : 'How We Work'}</Link><Link href={href('/contact/')}>{ko ? '문의' : 'Contact'}</Link><Link href={href('/products/recorder/privacy/')}>{ko ? 'Recorder 개인정보처리방침' : 'Recorder Privacy'}</Link></div>
        <p className="script-note">{ko ? <>일은 줄이고.<br />진전은 더 크게.</> : <>Less work.<br />More progress.</>}</p>
      </div>
      <div className="shell footer-bottom"><span>© 2026 EZHaru, LLC. {ko ? '모든 권리 보유.' : 'All rights reserved.'} · 200 Mill Crossing Ct, Sugar Hill, GA 30518 · (770) 366-6336</span><span>Groundwork before AI.</span></div>
    </footer>
  );
}

export function SectionHead({ eyebrow, title, copy, centered = false }: { eyebrow?: string; title: string; copy?: string; centered?: boolean }) {
  return <div className={`section-head ${centered ? 'centered' : ''}`}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function ProductLogo({ product, compact = false }: { product: Product; compact?: boolean }) {
  return <div className={`product-logo ${compact ? 'compact' : ''}`}><Image src={product.logo} alt={product.name} width={1536} height={1024} /></div>;
}

const icons: Record<ProductKey, React.ReactNode> = {
  recorder: <><path d="M8 12v3m4-7v11m4-14v17m4-13v9m4-6v4" /></>,
  expense: <><path d="M9 5h14v22l-3-2-3 2-3-2-3 2-2-2V5Z" /><path d="M13 11h6m-6 5h6" /></>,
  invoice: <><path d="M9 4h11l4 4v20H9Z" /><path d="M20 4v5h5M13 15h8m-8 5h8" /></>,
  class: <><path d="m7 11 9-5 9 5-9 5-9-5Z" /><path d="m9 16 7 4 7-4m-14 5 7 4 7-4" /></>,
};

export function ProductIcon({ type }: { type: ProductKey }) {
  return <span className={`product-icon ${type}`}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[type]}</svg></span>;
}

export function ProductCard({ product, locale = 'en' }: { product: Product; locale?: Locale }) {
  return (
    <article className="product-card">
      <div className="product-card-top"><ProductIcon type={product.slug} /><div><small>EZHaru</small><h3>{product.shortName}</h3></div></div>
      <ProductMockup type={product.slug} compact locale={locale} />
      <p>{product.cardLine}</p>
      <Link href={localizePath(locale, `/products/${product.slug}/`)}>{locale === 'ko' ? '자세히 보기' : 'Learn more'} <Arrow /></Link>
    </article>
  );
}

export function ProductMockup({ type, compact = false, locale = 'en' }: { type: ProductKey; compact?: boolean; locale?: Locale }) {
  const ko = locale === 'ko';
  const rows = ko
    ? (type === 'recorder' ? ['월요일 프로젝트 회의', '현장 방문 기록', '팀 의사결정'] : type === 'expense' ? ['사무용품 구매', '출장 호텔', '주차비'] : type === 'invoice' ? ['노스스타 스튜디오', '그린필드 그룹', '서밋 트레이닝'] : ['초급반', '리더십 팀', '토요일 워크숍'])
    : (type === 'recorder' ? ['Monday project sync', 'Site visit notes', 'Team decisions'] : type === 'expense' ? ['Bright Office Supply', 'Northline Hotel', 'City Parking'] : type === 'invoice' ? ['Northstar Studio', 'Greenfield Group', 'Summit Training'] : ['Beginner Class', 'Leadership Team', 'Saturday Workshop']);
  return (
    <div className={`device-scene ${type} ${compact ? 'is-compact' : ''}`} aria-label={`${type} product interface preview`}>
      <div className="device">
        <div className="device-bar"><span className="mini-mark">EZ</span><i /><i /></div>
        <div className="device-title"><b>{ko ? (type === 'recorder' ? '내 녹음' : type === 'expense' ? '경비' : type === 'invoice' ? '인보이스' : '오늘의 수업') : (type === 'recorder' ? 'Your recordings' : type === 'expense' ? 'Expenses' : type === 'invoice' ? 'Invoices' : 'Today’s classes')}</b><span>•••</span></div>
        <div className="device-content">
          {type === 'recorder' && <div className="wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>}
          {rows.map((row, i) => <div className="ui-row" key={row}><span className={`ui-dot ${i === 0 ? 'active' : ''}`}>{i + 1}</span><p><b>{row}</b><small>{ko ? (type === 'class' ? `${8 + i * 4}명 · ${i === 0 ? '진행 중' : '예정'}` : i === 0 ? '검토 준비' : '정리 및 저장 완료') : (type === 'class' ? `${8 + i * 4} members · ${i === 0 ? 'In progress' : 'Scheduled'}` : i === 0 ? 'Ready to review' : 'Organized and saved')}</small></p><em>{i === 0 ? (ko ? '열기' : 'Open') : '✓'}</em></div>)}
        </div>
      </div>
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, visual, actions = true, locale = 'en', className = '' }: { eyebrow: string; title: string; copy: string; visual?: React.ReactNode; actions?: boolean; locale?: Locale; className?: string }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="shell split hero-split">
        <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{copy}</p>{actions && <div className="actions"><Link className="button" href={localizePath(locale, '/contact/')}>{locale === 'ko' ? '문의하기' : 'Talk to us'} <Arrow /></Link><Link className="button secondary" href={localizePath(locale, '/how-we-work/')}>{locale === 'ko' ? '진행 방식' : 'How we work'}</Link></div>}</div>
        <div>{visual}</div>
      </div>
    </section>
  );
}

export function ReviewBanner({ locale = 'en' }: { locale?: Locale }) {
  const ko = locale === 'ko';
  return (
    <section className="review-wrap"><div className="shell review-banner">
      <Image src="/images/operational-review.png" alt="Two professionals reviewing a business process together" fill sizes="(max-width: 800px) 100vw, 1100px" />
      <div className="review-copy"><p className="eyebrow">{ko ? '더 현명한 시작' : 'START SMARTER'}</p><h2>{ko ? '2주 운영 진단' : 'Two-Week Operational Review'}</h2><h3>{ko ? '고정가 $2,400' : '$2,400 fixed price'}</h3><p>{ko ? '현재 운영을 살펴보고 가장 큰 병목 세 가지를 찾아, 지금 할 일 / 나중에 할 일 / 하지 않을 일 로드맵을 제공합니다.' : 'We review your current operation, identify the top three bottlenecks, and leave you with a practical now / later / never roadmap.'}</p><Link className="button" href={localizePath(locale, '/contact/')}>{ko ? '진단 요청' : 'Request a Review'} <Arrow /></Link></div>
    </div></section>
  );
}

export function GroundworkBanner({ locale = 'en' }: { locale?: Locale }) {
  const ko = locale === 'ko';
  const steps: { label: string; icon: GlyphName }[] = ko ? [{label:'업무 이해',icon:'search'},{label:'프로세스 정의',icon:'process'},{label:'입력·출력 정리',icon:'document'},{label:'데이터 연결',icon:'connect'},{label:'자동화',icon:'settings'},{label:'필요한 곳에 AI',icon:'sparkles'}] : [{label:'Understand the work',icon:'search'},{label:'Define the process',icon:'process'},{label:'Fix inputs & outputs',icon:'document'},{label:'Connect the data',icon:'connect'},{label:'Automate',icon:'settings'},{label:'Add AI where useful',icon:'sparkles'}];
  return <section className="groundwork"><Image className="groundwork-image" src="/images/groundwork-mountain.png" alt="" fill sizes="100vw"/><div className="groundwork-wash"/><div className="shell"><div className="groundwork-title"><p className="eyebrow">{ko ? '우리의 접근법' : 'OUR APPROACH'}</p><h2>Groundwork before AI.</h2><p>{ko ? '프로세스, 데이터, 시스템이 준비되어야 AI도 제대로 작동합니다. 우리는 그 기반부터 함께 만듭니다.' : 'AI works best when your processes, data, and systems are ready. We help you build that foundation first.'}</p></div><ol>{steps.map((s, i) => <li key={s.label}><BrandGlyph name={s.icon}/><b>{s.label}</b>{i < steps.length - 1 && <i>→</i>}</li>)}</ol></div></section>;
}

export function FeatureGrid({ product, locale = 'en' }: { product: Product; locale?: Locale }) {
  const featureIcons: GlyphName[] = ['check','process','connect','sparkles'];
  return <section className="section"><div className="shell"><SectionHead eyebrow={locale === 'ko' ? '실제 업무를 위한 설계' : 'BUILT FOR REAL WORK'} title={locale === 'ko' ? '손은 덜 거치고, 흐름은 더 명확하게.' : 'Less handling. More clarity.'} copy={product.description} centered /><div className="feature-grid">{product.features.map((f, i) => <article key={f.title}><BrandGlyph name={featureIcons[i]}/><h3>{f.title}</h3><p>{f.body}</p></article>)}</div></div></section>;
}

export function ProductDetail({ product, locale = 'en' }: { product: Product; locale?: Locale }) {
  const ko = locale === 'ko';
  return <><PageHero className="product-detail-hero" locale={locale} eyebrow={`EZHaru ${product.shortName}`} title={product.title} copy={product.description} visual={<div className="detail-visual"><ProductLogo product={product} compact /><ProductMockup type={product.slug} locale={locale} /></div>} />{product.slug === 'recorder' && <div className="product-privacy-strip"><div className="shell"><BrandGlyph name="check"/><div><b>{ko ? '내 녹음과 노트, 어디에 저장되는지 확인하세요.' : 'Know where your recordings and notes go.'}</b><span>{ko ? 'Recorder의 데이터 처리 방식과 보관 기간을 명확하게 안내합니다.' : 'See exactly how Recorder handles data and how long it is retained.'}</span></div><Link className="button secondary" href={localizePath(locale, '/products/recorder/privacy/')}>{ko ? '개인정보처리방침' : 'Privacy Policy'} <Arrow /></Link></div></div>}<FeatureGrid product={product} locale={locale} /><section className="section product-flow"><div className="shell"><SectionHead eyebrow={ko ? '입력에서 결과까지' : 'FROM INPUT TO OUTCOME'} title={ko ? '기능 하나가 아니라 전체 흐름을 완성합니다.' : 'The whole path, not one isolated feature.'} copy={ko ? '단계 사이의 반복 작업을 없애고 예외를 보이게 만들 때 비로소 유용한 결과가 나옵니다.' : 'The useful result comes from removing the handling between steps and keeping exceptions visible.'}/><ol>{product.workflow.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol></div></section><section className={`product-story photo-${product.slug}`}><div className="shell story-photo"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 700px) 100vw, 1180px"/><div className="story-wash"/><div className="story-copy"><p className="eyebrow">{ko ? '더 나은 하루' : 'A BETTER WORKDAY'}</p><h2>{product.closing}</h2><p>{ko ? '중요한 것은 기능 하나를 더하는 일이 아닙니다. 업무 주변의 반복 작업을 없애고 다음 행동을 분명하게 만드는 일입니다.' : 'The useful part is not one more feature. It is removing the repeated handling around the work and making the next step obvious.'}</p><Link className="text-link" href={localizePath(locale, '/contact/')}>{ko ? '업무 흐름 상담하기' : 'Talk about your workflow'} <Arrow /></Link></div></div></section><section className="section product-assurance"><div className="shell"><SectionHead eyebrow={ko ? '설계에 담긴 원칙' : 'BUILT-IN DISCIPLINE'} title={ko ? '명확한 책임. 보이는 예외. 돌아갈 수 있는 방법.' : 'Clear ownership. Visible exceptions. A way back.'}/><div>{product.assurances.map(item => <article key={item.title}><BrandGlyph name="check"/><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div></section></>;
}
