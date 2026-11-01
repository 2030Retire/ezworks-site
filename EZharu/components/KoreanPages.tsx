import Image from 'next/image';
import Link from 'next/link';
import { BrandGlyph, GroundworkBanner, PageHero, ProductCard, ProductDetail, ProductMockup, ReviewBanner, SectionHead } from './Site';
import { productBySlugKo, productsKo, type ProductKey } from './data';

const k = (path: string) => path === '/' ? '/ko/' : `/ko${path}`;

export function KoreanHomePage() {
  return <>
    <section className="home-hero">
      <Image src="/images/hero-office.png" alt="하루를 준비한 밝고 차분한 업무 공간" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="shell hero-copy">
        <p className="eyebrow">사람 + 프로세스 + 더 나은 내일</p>
        <h1>매일의 일을<br /><span>더 쉽게.</span></h1>
        <p>실제 업무를 위한 실용적인 도구와 서비스. 작게 시작하고, 시간을 아끼고, 중요한 일에 집중하세요.</p>
        <div className="actions"><Link href={k('/solutions/')} className="button">솔루션 보기 <span>→</span></Link><Link href={k('/products/')} className="button secondary">제품 보기</Link></div>
        <div className="hero-proof"><span><BrandGlyph name="people"/>현장에서 쌓은 경험</span><span><BrandGlyph name="settings"/>실용적인 해결책</span><span><BrandGlyph name="data"/>확인 가능한 진전</span></div>
      </div>
      <p className="hand-note">일은 줄이고.<br />진전은 더 크게.</p>
    </section>

    <section className="section ways"><div className="shell">
      <SectionHead eyebrow="두 가지 도움" title="이해에서 실제 결과까지." copy="직접 함께 해결하는 지원이 필요하든, 집중된 도구가 필요하든 EZHaru는 실제 업무가 있는 곳에서 시작합니다." centered />
      <div className="ways-grid">
        <article><BrandGlyph name="workflow" className="big-icon consulting-icon"/><div><h3>컨설팅 &amp; 솔루션</h3><p>업무가 실제로 어떻게 돌아가는지 살펴보고, 프로세스를 정의하고, 시스템을 연결한 뒤 적합한 부분을 자동화합니다.</p><Link href={k('/solutions/')}>솔루션 살펴보기 →</Link></div></article>
        <article><BrandGlyph name="products" className="big-icon cubes"/><div><h3>EZHaru 제품</h3><p>우리가 직접 마주하고 해결해 온 운영 문제에서 출발한 단순하고 집중된 도구입니다.</p><Link href={k('/products/')}>제품 살펴보기 →</Link></div></article>
      </div>
    </div></section>

    <section className="section reality-section"><div className="shell">
      <SectionHead eyebrow="현실의 업무" title="사람이 운영 시스템이 되어버릴 때." copy="작은 팀은 이메일, 스프레드시트, 캘린더, 기억을 오가며 일을 이어갑니다. 회사는 바쁘지만 일이 어디에서 기다리는지는 보이지 않습니다." />
      <div className="reality-grid">{[
        ['내 일은 퇴근 후에 시작됩니다', '고객과 들어오는 요청을 처리하면 하루가 끝납니다.'],
        ['절차가 사람 안에만 있습니다', '휴가는 부담이 되고 퇴사는 곧 운영 사고가 됩니다.'],
        ['진행 상황을 물어봐야 합니다', '“어디까지 됐나요?”에 답하려면 회의를 열어야 합니다.'],
        ['같은 보고서를 매달 다시 만듭니다', '완성할 때쯤이면 숫자는 이미 과거가 됩니다.'],
      ].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      <div className="reality-action"><p>문제는 도구가 약해서가 아니라, 도구가 사용할 수 있는 형태로 업무가 정의되지 않았기 때문인 경우가 많습니다.</p><Link className="text-link" href={k('/solutions/')}>시작점 찾기 →</Link></div>
    </div></section>

    <section className="section products-section"><div className="shell"><div className="section-row"><SectionHead eyebrow="제품" title="더 단순한 하루를 위한 도구." copy="하나씩 또는 함께 사용하세요. 모든 제품은 다음 행동을 분명하게 만듭니다."/><Link className="text-link" href={k('/products/')}>모든 제품 보기 →</Link></div><div className="product-grid">{productsKo.map(p => <ProductCard product={p} locale="ko" key={p.slug}/>)}</div></div></section>
    <GroundworkBanner locale="ko" />
    <section className="section process-preview"><div className="shell"><div className="section-row"><SectionHead eyebrow="진행 방식" title="불편함에서 진전으로 가는 현실적인 경로." copy="각 단계마다 실제로 쓸 수 있는 결과가 남고, 첫 두 단계에는 분명한 중단 지점이 있습니다."/><Link className="text-link" href={k('/how-we-work/')}>전체 과정 보기 →</Link></div><ol className="process-line">{[
      ['이해', '지금 실제로 보내는 한 주를 봅니다.'], ['정의', '입력, 출력, 담당자, 예외를 정리합니다.'], ['구축', '작지만 완전한 버전을 만듭니다.'], ['현장 적용', '이관하고 교육하며 실제 사용까지 함께합니다.'],
    ].map(([title, body], i) => <li key={title}><span>{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></div></section>
    <ReviewBanner locale="ko" />
  </>;
}

export function KoreanProductsPage() {
  return <>
    <PageHero locale="ko" eyebrow="EZHARU 제품" title="실제 업무를 위한 단순한 도구." copy="반복되는 운영 문제에 우리의 방법을 직접 적용해 만들었습니다. 각각으로도 유용하고, 명확한 프로세스 안에서는 더 강력합니다." visual={<div className="product-stack">{productsKo.map((product, index) => <div key={product.slug} style={{'--i': index} as React.CSSProperties}><ProductMockup type={product.slug} compact locale="ko"/></div>)}</div>}/>
    <section className="section product-origin"><div className="shell split"><div><SectionHead eyebrow="첫 번째 적용" title="우리 운영에 먼저 적용했습니다."/><p>사업을 시작하자 경비, 인보이스, 미수금, 회의, 미완료 업무가 한꺼번에 생겼습니다. 기억만으로는 감당할 수 없었습니다.</p><p>Recorder, Expense, Invoice, Class는 임의로 고른 제품 아이디어가 아닙니다. 프로세스를 정의하고 입력과 출력을 정리하며 업무가 기록을 남기도록 만든 실제 시스템입니다.</p><div className="origin-flow"><span>기억에 의존하는 업무</span><i>→</i><span>경로 정의</span><i>→</i><strong>완성된 시작점</strong></div></div><div className="origin-photo"><Image src="/images/products-workday-v2.png" alt="녹음, 경비, 인보이스, 수업 운영을 보여주는 정돈된 업무 공간" fill sizes="(max-width: 800px) 100vw, 50vw"/></div></div></section>
    <section className="section"><div className="shell"><SectionHead eyebrow="제품군" title="가장 많은 시간을 빼앗는 업무부터 시작하세요." copy="각 제품은 복사, 확인 요청, 파일명 변경, 재계산으로 이어지는 익숙한 반복을 없앱니다."/><div className="product-grid product-grid-large">{productsKo.map(product => <ProductCard product={product} locale="ko" key={product.slug}/>)}</div></div></section>
    <section className="soft-cta"><div className="shell product-contact product-contact-graphic"><div className="product-rings" aria-hidden="true"><i/><i/><i/><i/></div><div><p className="eyebrow">어떤 제품이 맞을지 모르겠다면</p><h2>가장 많은 손을 거치는 업무를 알려주세요.</h2><p>제품이 맞는지, 먼저 정의할 것이 있는지, 기존 도구만으로 충분한지 솔직하게 말씀드리겠습니다.</p><Link className="button" href={k('/contact/')}>대화 시작하기 →</Link></div></div></section>
  </>;
}

const problems = [
  ['요청이 여러 곳에 흩어집니다', '이메일, 채팅, 구두 요청이 한 줄의 업무 목록이 되지 못합니다.'],
  ['같은 내용을 반복해서 입력합니다', '시스템 사이를 연결하는 사람이 복사와 붙여넣기를 담당합니다.'],
  ['상태를 아무도 믿지 못합니다', '진행 상황이 시스템이 아니라 특정 사람의 기억 속에 있습니다.'],
  ['판단 기준이 사람마다 다릅니다', '반복되는 결정을 매번 처음부터 다시 검토합니다.'],
];

const serviceAreas = [
  { n:'01', icon:'search', title:'업무 진단', summary:'업무가 실제로 어떻게 움직이는지 보고 병목과 시작점을 찾습니다.', when:['문제는 분명하지만 범위가 불명확할 때','새 도구를 사기 전에 우선순위를 정할 때'], leaves:['현재 상태 진단','상위 세 가지 병목','지금 / 나중 / 하지 않을 일'], caseTitle:'월말 보고 업무', caseBody:'보고서 자체보다 데이터를 모으고 맞추는 데 시간이 쓰이는 지점을 확인합니다.' },
  { n:'02', icon:'process', title:'운영 시스템', summary:'입력, 출력, 담당자, 예외가 있는 완전한 업무 흐름을 만듭니다.', when:['절차가 사람의 기억에만 있을 때','스프레드시트가 사실상 핵심 시스템일 때'], leaves:['업무 정의','운영 화면과 기록','권한과 인계 문서'], caseTitle:'회원·결제 운영', caseBody:'계약, 결제일, 예외를 값으로 만들고 누락된 정보는 수동 처리 목록에 남깁니다.' },
  { n:'03', icon:'connect', title:'시스템 연결', summary:'이미 잘 작동하는 시스템 사이의 반복 입력과 확인을 제거합니다.', when:['같은 데이터를 두 번 이상 입력할 때','본사 시스템과 현지 업무 사이에 틈이 있을 때'], leaves:['데이터 출처 정의','읽기 전용 검증','추적 가능한 연결'], caseTitle:'회계 인계', caseBody:'승인된 정보만 회계로 보내고 오류는 조용히 넘어가지 않도록 표시합니다.' },
  { n:'04', icon:'settings', title:'자동화', summary:'기준이 정해진 반복 작업을 안전한 단계로 자동화합니다.', when:['같은 판단을 반복할 때','처리량이 늘어 사람의 확인이 병목일 때'], leaves:['설정 가능한 기준','실패 시 수동 경로','단계별 자동 권한'], caseTitle:'반복 의사결정', caseBody:'처음에는 판단만 기록하고, 충분히 검증된 뒤에만 실제 업무에 적용합니다.' },
] as const;

export function KoreanSolutionsPage() {
  const readiness = [
    ['프로세스도 데이터도 없음', '업무가 대화와 개인 파일에 흩어져 있습니다.', '업무 진단과 한 개 프로세스 정의'],
    ['시스템은 있지만 프로세스가 없음', '도구는 있어도 그 사이를 사람이 메웁니다.', '현지 업무 정의와 연결 구조'],
    ['프로세스와 데이터가 준비됨', '입력, 출력, 담당자와 기준이 분명합니다.', '연결 또는 자동화'],
  ];
  return <>
    <PageHero locale="ko" eyebrow="컨설팅 & 솔루션" title="문제를 실용적인 해결책으로." copy="업무를 정의하고 운영 시스템을 만들며, 이미 잘 작동하는 것을 연결합니다. 기반이 준비된 뒤에만 자동화합니다." visual={<div className="photo-panel solutions-photo"><Image src="/images/solutions-workshop-v2.png" alt="운영 프로세스를 함께 정리하는 컨설턴트와 사업자" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>}/>
    <section className="section problem-finder"><div className="shell"><SectionHead eyebrow="여기서 시작하세요" title="이 중 하나가 이번 주의 모습인가요?" copy="프로젝트 이름이 아니라 문제의 이름으로 적었습니다. 증상이 시작점을 알려줍니다."/><div className="problem-grid">{problems.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section readiness-section"><div className="shell"><SectionHead eyebrow="준비 상태" title="두 가지가 시작점을 결정합니다." copy="프로세스가 정의되어 있는가? 핵심 운영 데이터가 자기 시스템 안에 있는가? 답에 따라 첫 프로젝트가 달라집니다."/><div className="readiness-table"><div className="readiness-head"><span>현재 상태</span><span>현장의 모습</span><span>첫 프로젝트</span></div>{readiness.map((row, index) => <article key={row[0]}><b><i>0{index + 1}</i>{row[0]}</b><p>{row[1]}</p><p>{row[2]}</p></article>)}</div><p className="readiness-note">한국 기업의 미국 법인에서 두 번째 상황이 흔합니다. 본사 시스템은 있지만 현지 업무와 시스템 사이의 틈을 맡는 사람이 없습니다.</p></div></section>
    <section className="section service-areas"><div className="shell"><SectionHead eyebrow="네 가지 영역" title="각 솔루션 안에서 하는 일." copy="언제 필요한지, 작업 후 무엇이 남는지, 어떤 운영 문제를 해결하는지 보여드립니다."/><div className="service-area-list">{serviceAreas.map(area => <article key={area.n}><header><BrandGlyph name={area.icon}/><div><small>{area.n}</small><h2>{area.title}</h2><p>{area.summary}</p></div></header><div className="area-columns"><div><h3>이럴 때 맞습니다</h3><ul>{area.when.map(item => <li key={item}>{item}</li>)}</ul></div><div><h3>남는 결과</h3><ul>{area.leaves.map(item => <li key={item}>{item}</li>)}</ul></div></div><aside><span>실제 업무에서</span><h3>{area.caseTitle}</h3><p>{area.caseBody}</p></aside></article>)}</div></div></section>
    <GroundworkBanner locale="ko"/><ReviewBanner locale="ko"/>
    <section className="quote-band"><div className="shell"><p>정의되지 않은 업무에 도구를 더하면 우회로만 하나 늘어납니다.</p><Link className="button" href={k('/how-we-work/')}>진행 방식 보기 →</Link></div></section>
  </>;
}

export function KoreanHowPage() {
  const fit = ['절차가 문서가 아니라 사람 안에 있는 운영','본사 시스템과 현지 업무가 맞지 않아 우회 작업이 쌓인 경우','요청이 이메일과 채팅에 흩어져 처리량과 대기시간을 모르는 경우','반복하는 판단의 기준을 글로 정리할 수 있는 경우'];
  const notFit = ['업무를 설명할 시간을 아무도 낼 수 없는 경우','여러 팀이 의존하는 대형 시스템 전체 재구축','목적이 정해지기 전의 AI 도입','일상적인 PC 지원이나 물리 인프라 업무'];
  const phases = [
    {icon:'search',n:'01',title:'업무 진단',meta:'2주 · 고정가',copy:'스프레드시트, 이메일, 인계, 그리고 업무를 붙들고 있는 사람까지 실제 한 주를 봅니다.',out:['현재 상태 진단','상위 세 가지 병목','지금 / 나중 / 하지 않을 일']},
    {icon:'process',n:'02',title:'업무 정의',meta:'공식 중단 지점',copy:'입력, 출력, 담당자, 완료 조건, 예외, 데이터 출처를 명확하게 만듭니다.',out:['처음부터 끝까지 한 개 흐름','예외 목록','가장 작은 유효 범위']},
    {icon:'settings',n:'03',title:'구축 & 정착',meta:'분기가 아닌 주 단위',copy:'작지만 완전한 버전을 만들고 데이터를 옮기며 권한과 교육, 첫 실제 사용까지 함께합니다.',out:['작동하는 시스템','인계와 복구 방법','정착 기간 지원']},
  ] as const;
  const deliverables = [['01','현재 상태 진단','두 가지 준비 축에서 현재 위치와 그 이유.'],['02','병목 목록','손이 개입하는 위치와 빈도로 정리한 상위 세 가지.'],['03','지금 / 나중 / 하지 않을 일','바로 할 일, 기다릴 일, 만들지 않을 일.'],['04','프로세스 정의','각 단계의 입력, 출력, 담당자, 완료 조건.'],['05','예외 목록','정상 경로에서 벗어나는 모든 경우와 처리 방식.'],['06','데이터 흐름','각 운영 지표를 읽는 원천 시스템.'],['07','판단 설정','코드 속이 아니라 값으로 관리되는 기준과 허용 범위.'],['08','실패 대응 절차','기능이나 연결이 멈춘 날 사용할 수동 경로.'],['09','인계','권한, 소유권, 변경 방법, 즉시 돌아갈 방법.']];
  return <>
    <PageHero locale="ko" eyebrow="진행 방식" title="실용적으로. 집중해서. 함께." copy="모든 일을 한 덩어리로 계약하면 사실이 바뀌었을 때 멈추기 어렵습니다. 우리는 명확한 구간으로 일하며 첫 두 구간은 실제 선택으로 끝납니다." visual={<div className="steps-visual">{[['search','이해','필요를 듣고 실제 업무를 배웁니다.'],['process','계획','실용적인 해결책과 빠른 개선을 찾습니다.'],['settings','구현','작지만 완전한 해결책을 적용합니다.'],['support','지원','정착과 실제 사용까지 함께합니다.']].map(([icon,title,body]) => <div key={title}><BrandGlyph name={icon as 'search'}/><p><b>{title}</b><small>{body}</small></p></div>)}</div>}/>
    <section className="method-photo method-photo-v2"><div className="shell"><Image src="/images/method-workshop-v2.png" alt="테이블에서 프로세스 단계를 정리하는 업무 세션" fill sizes="1180px"/><div><p className="eyebrow">실제 업무 보기</p><h2>지금 실제로 보내는 한 주에서 시작합니다.</h2><p>이메일, 스프레드시트, 인계, 예외, 그리고 업무를 붙들고 있는 사람이 모두 한 그림 안에 들어갑니다.</p></div></div></section>
    <section className="section fit-section"><div className="shell"><SectionHead eyebrow="적합한 경우" title="분명한 적합 — 그리고 분명한 거절." copy="유용한 프로젝트에는 실제 업무에 대한 접근과 끝낼 수 있을 만큼 작은 범위가 필요합니다."/><div className="fit-grid"><article><span>잘 맞습니다</span><ul>{fit.map(item => <li key={item}>✓ {item}</li>)}</ul></article><article className="not-fit"><span>맞지 않습니다</span><ul>{notFit.map(item => <li key={item}>× {item}</li>)}</ul></article></div></div></section>
    <section className="section"><div className="shell"><SectionHead eyebrow="프로젝트 구성" title="세 구간. 두 번의 중단 지점." copy="계속 진행하지 않더라도 각 구간에서 완료한 결과는 실제로 사용할 수 있습니다."/><div className="phase-grid">{phases.map(phase => <article key={phase.n}><BrandGlyph name={phase.icon}/><span>{phase.n}</span><small>{phase.meta}</small><h2>{phase.title}</h2><p>{phase.copy}</p><ul>{phase.out.map(item => <li key={item}>✓ {item}</li>)}</ul></article>)}</div></div></section>
    <section className="section deliverables-section"><div className="shell"><SectionHead eyebrow="결과물" title="아홉 가지 결과가 고객에게 남습니다." copy="중단 지점에서 일이 끝나도 지금까지 완료한 모든 것은 고객 팀이나 다른 업체가 이어서 사용할 수 있습니다."/><div className="deliverable-grid">{deliverables.map(([n,title,body], index) => <article key={n}><span>{n}</span><small>{index < 3 ? '업무 진단' : index < 6 ? '업무 정의' : '구축 & 정착'}</small><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="section discipline-section"><div className="shell"><SectionHead eyebrow="운영 원칙" title="구축 전에 정하는 네 가지."/><div className="discipline-grid">{[['connect','첫 연결은 읽기 전용','쓰기 전에 데이터가 무엇을 뜻하는지 확인합니다.'],['search','더하기 전에 한 겹 제거','기존 시스템이 이미 아는 상태라면 중간의 수동 복사를 없앱니다.'],['data','지표마다 하나의 출처','화면과 보고서를 만들기 전 숫자의 출처를 문서로 고정합니다.'],['support','수동 대체 경로를 먼저','멈출 수 없는 업무는 자동화 전에 손으로 이어갈 방법을 정합니다.']].map(([icon,title,body]) => <article key={title}><BrandGlyph name={icon as 'connect'}/><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="review-detail"><div className="shell"><div><p className="eyebrow">운영 진단</p><h2>고정 가격. 고정 결과.</h2><p>한 개 프로세스, 2주, 현재 상태 진단, 병목 세 가지, 지금 / 나중 / 하지 않을 일 목록.</p></div><dl><div><dt>기간</dt><dd>2주</dd></div><div><dt>가격</dt><dd>$2,400 고정</dd></div><div><dt>구축으로 이어질 경우</dt><dd>전액 반영</dd></div></dl></div></section>
    <section className="quote-band"><div className="shell"><p>끝낼 수 있을 만큼 작게. 인계할 수 있을 만큼 명확하게.</p><Link className="button" href={k('/contact/')}>업무 상담하기 →</Link></div></section>
  </>;
}

export function KoreanAboutPage() {
  const facts = [['위치','미국 조지아'],['하는 일','업무 진단 · 시스템 · 연결 · 자동화'],['도움을 드리는 곳','자체 IT 조직이 없는 작은 회사와 미국 진출 법인'],['만드는 것','운영 화면 · 접수 · 추적 · 모바일 앱']];
  const principles = [['search','이번 주에서 시작','이번 주 누군가가 손으로 다섯 번이나 반복했지만 하지 않아도 되었을 일은 무엇인가?'],['check','끝낼 수 있을 만큼 작게','회의에서만 멋진 범위보다 실제로 구축하고 전달하고 정착한 범위가 낫습니다.'],['process','만들지 않을 때도 말하기','기존 도구의 사용 방식을 바꾸는 것이 더 정직하고 유용한 답일 때가 있습니다.'],['support','정착도 납품의 일부','데이터 이관, 권한, 교육, 첫 사용 기간까지 프로젝트 안에 포함합니다.']] as const;
  return <>
    <PageHero locale="ko" eyebrow="EZHARU 소개" title="실용적인 도구. 실제 운영의 변화." copy="EZHaru는 미국 조지아에 있는 소프트웨어 스튜디오입니다. 절차가 문서보다 사람 안에 있는 조직을 위해 업무 정의부터 실제로 작동하는 시스템까지 함께합니다." visual={<div className="photo-panel about-photo"><Image src="/images/about-operations-v2.png" alt="사무실과 물류 현장에서 협업하는 운영팀" fill sizes="(max-width: 800px) 100vw, 50vw"/></div>}/>
    <section className="section"><div className="shell split about-story"><div><SectionHead eyebrow="이 일을 하는 이유" title="빈자리를 채우는 답이 또 하나의 도구인 경우는 드뭅니다."/><p>본사가 시스템을 제공했어도 현지 업무는 스프레드시트, 채팅, 캘린더, 기억에 계속 쌓일 수 있습니다. 그 우회 작업이 조용히 실제 운영 표준이 됩니다.</p><p>정의되지 않은 업무는 새 시스템을 산다고 해결되지 않습니다. 무엇이 들어오고, 무엇이 나가고, 다음 행동을 누가 맡는지부터 바로잡습니다.</p><p>물류와 운송, 회원과 결제, 경비와 승인, 조립, 접수, 추적, 의사결정 자동화에 걸친 16년의 경험이 그 자리에서 쌓였습니다.</p></div><div className="facts">{facts.map(([term,detail]) => <div key={term}><b>{term}</b><span>{detail}</span></div>)}</div></div></section>
    <section className="section work-forms"><div className="shell"><SectionHead eyebrow="두 가지 형태" title="일은 프로젝트 또는 제품이 됩니다."/><div><article><BrandGlyph name="workflow"/><span>01</span><h3>프로젝트</h3><p>회사마다 다른 업무를 진단하고 정의해 구축합니다. 고객 업무의 대부분이 여기에 해당합니다.</p></article><article><BrandGlyph name="products"/><span>02</span><h3>제품</h3><p>같은 형태로 반복되는 운영 문제를 위해 미리 만들었습니다. 진단 이후 첫 유용한 단계가 될 수 있습니다.</p></article></div></div></section>
    <section className="section section-blue"><div className="shell"><SectionHead eyebrow="생각하는 방식" title="타협하지 않는 네 가지 습관."/><div className="feature-grid">{principles.map(([icon,title,body]) => <article key={title}><BrandGlyph name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div><Link className="button" href={k('/contact/')}>업무 이야기하기 →</Link></div></section>
    <section className="section ownership-section"><div className="shell"><SectionHead eyebrow="지키는 원칙" title="우리가 떠난 뒤에도 시스템은 고객의 것이어야 합니다."/><div className="ownership-grid"><article><h3>데이터는 고객이 소유한 시스템에 남습니다.</h3><p>고객의 저장소, 계정, 회계 소프트웨어, 표준 내보내기 형식을 중심으로 설계합니다.</p></article><article><h3>종속을 만들지 않습니다.</h3><p>앱 사용을 중단해도 지금까지 쌓인 것은 고객의 것이며 그대로 읽을 수 있어야 합니다.</p></article><article><h3>돌아가는 방법을 먼저 정합니다.</h3><p>멈출 수 없는 업무는 자동화 기능보다 수동 대체 경로를 먼저 문서화합니다.</p></article></div></div></section>
  </>;
}

export function KoreanContactPage() {
  return <>
    <section className="contact-hero"><div className="shell contact-hero-grid"><div><p className="eyebrow">문의하기</p><h1>이제 손으로 그만하고 싶은 일을 알려주세요.</h1><p>짧은 설명이면 충분합니다. 없애기 위해 만들 가치가 있는지, 가장 작은 유용한 다음 단계가 무엇인지 솔직하게 말씀드리겠습니다.</p><div className="contact-direct"><BrandGlyph name="document"/><div><small>이메일로 직접 문의</small><a href="mailto:Help@ezharu.co">Help@ezharu.co</a></div></div></div>
      <form className="contact-form" action="mailto:Help@ezharu.co" method="post" encType="text/plain"><div className="field-row"><label>이름<input name="name" required/></label><label>이메일<input name="email" type="email" required/></label></div><label>회사 <small>선택 사항</small><input name="company"/></label><label>문의 분야<select name="interest" defaultValue="서비스"><option>서비스 — 자동화, 연결 또는 구현</option><option>EZHaru Recorder</option><option>EZHaru Expense</option><option>EZHaru Invoice</option><option>EZHaru Class</option><option>기타</option></select></label><label>무엇을 바꾸고 싶으신가요?<textarea name="message" rows={6} placeholder="가장 많은 시간을 쓰는 업무부터 적어주세요." required/></label><button className="button" type="submit">이메일 준비하기 →</button><p className="form-note">입력한 내용으로 이메일 앱을 엽니다. 이 사이트에는 정보가 저장되지 않습니다.</p></form>
    </div></section>
    <section className="section"><div className="shell contact-grid"><div><SectionHead eyebrow="문의 전 확인" title="좋은 첫 메모는 단순합니다." copy="중간에 영업팀이 없습니다. 우리가 직접 읽고 답합니다."/></div><div className="faq"><article><h3>무엇을 적으면 되나요?</h3><p>가장 많은 시간을 쓰는 업무, 대략 몇 명이 관여하는지, 현재 어떤 도구를 거치는지 알려주세요.</p></article><article><h3>요구사항이 필요한가요?</h3><p>아니요. 아직 요구사항을 쓸 수 없다는 전제에서 시작합니다. 그것을 정의하는 일이 프로젝트의 일부입니다.</p></article><article><h3>다음에는 무엇을 하나요?</h3><p>운영 진단이 필요한지, 기존 도구의 사용 방식을 바꾸는 것만으로 충분한지 먼저 답합니다.</p></article><article><h3>Recorder 문의인가요?</h3><p>회의, 현장 방문, 수업 등 무엇을 녹음하려는지 알려주시면 사용 상황을 이해하는 데 도움이 됩니다.</p></article><article><h3>가격을 공개하나요?</h3><p>2주 운영 진단은 한 개 프로세스 기준 $2,400입니다. 구축 업무는 현재 상태를 확인한 뒤에만 범위를 정합니다.</p></article><article><h3>고객이 준비할 것은 무엇인가요?</h3><p>전체 흐름을 설명할 한 명과 해당 업무 책임자와의 작업 세션이 필요합니다.</p></article></div></div></section>
  </>;
}

export function KoreanProductPage({ slug }: { slug: ProductKey }) {
  return <ProductDetail product={productBySlugKo[slug]} locale="ko"/>;
}
