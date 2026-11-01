export type ProductKey = 'recorder' | 'expense' | 'invoice' | 'class';
export type Locale = 'en' | 'ko';

export type Product = {
  slug: ProductKey;
  name: string;
  shortName: string;
  logo: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  cardLine: string;
  description: string;
  closing: string;
  features: { title: string; body: string }[];
  workflow: { title: string; body: string }[];
  assurances: { title: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: 'recorder',
    name: 'EZHaru Recorder',
    shortName: 'Recorder',
    logo: '/images/logo-recorder-trimmed.png',
    image: '/images/product-recorder.png',
    imageAlt: 'A professional reviewing meeting notes with a recorder beside the laptop',
    eyebrow: 'Capture what was said',
    title: 'Record. Everything else is done for you.',
    cardLine: 'Capture, transcribe, and organize your meetings.',
    description: 'Tap a category and record. The transcript, summary, action items, and a tidy note file appear in the right folder of your own cloud.',
    closing: 'Turn conversations into searchable, useful progress — without another filing task.',
    features: [
      { title: 'Files itself', body: 'Every recording routes to the cloud folder you chose for that category.' },
      { title: 'Transcribes and summarizes', body: 'Key points and action items sit beside the full transcript.' },
      { title: 'Learns your vocabulary', body: 'Fix project names or specialist terms once and future notes improve.' },
      { title: 'Keeps the original safe', body: 'Recordings survive lost connections and remain until upload is confirmed.' },
    ],
    workflow: [
      { title: 'Choose a category', body: 'Work meetings, site visits, classes, or personal notes can each point to their own folder.' },
      { title: 'Record', body: 'Capture the conversation without stopping to rename files or organize notes.' },
      { title: 'Review', body: 'Read the summary and action items, then check only passages marked as uncertain.' },
      { title: 'Find it later', body: 'The audio and plain Markdown note are already together in the folder you chose.' },
    ],
    assurances: [
      { title: 'Your storage', body: 'Audio goes from your phone to your own OneDrive rather than an EZHaru storage account.' },
      { title: 'Your AI connection', body: 'Transcription runs through the AI service and API key you choose.' },
      { title: 'Portable notes', body: 'Notes stay readable as ordinary Markdown files in your own folders.' },
    ],
  },
  {
    slug: 'expense',
    name: 'EZHaru Expense',
    shortName: 'Expense',
    logo: '/images/logo-expense-trimmed.png',
    image: '/images/product-expense.png',
    imageAlt: 'A receipt being captured with a phone at a bright desk',
    eyebrow: 'Receipts in. Reports out.',
    title: 'Less time on expenses. More time on your work.',
    cardLine: 'Turn receipts into accurate expense reports.',
    description: 'A receipt and expense workflow for companies that still move numbers by hand: capture, read, route for approval, and hand off to accounting.',
    closing: 'One clear trail from the receipt in your hand to the record in your books.',
    features: [
      { title: 'Capture where it happens', body: 'Photograph a receipt on the spot instead of mailing it for re-entry.' },
      { title: 'Reads the document', body: 'Vendor, date, total, and tax are extracted for a quick confirmation.' },
      { title: 'Routes the right approval', body: 'Amount, category, and team determine who needs to review it.' },
      { title: 'Hands off to accounting', body: 'Approved expenses move to the books instead of a monthly re-entry session.' },
    ],
    workflow: [
      { title: 'Capture', body: 'Photograph or upload the receipt where the expense occurs.' },
      { title: 'Validate', body: 'Confirm the extracted vendor, date, total, tax, and category before it moves on.' },
      { title: 'Approve', body: 'Route the item according to the company rules and keep the decision record.' },
      { title: 'Post', body: 'Hand approved information to accounting without typing the same numbers again.' },
    ],
    assurances: [
      { title: 'Exceptions stay visible', body: 'An item does not reach approval while a validation issue remains open.' },
      { title: 'One audit trail', body: 'Receipt, correction, approval, and final handoff remain connected.' },
      { title: 'Rules before automation', body: 'The normal path and the manual exception path are defined before automatic processing.' },
    ],
  },
  {
    slug: 'invoice',
    name: 'EZHaru Invoice',
    shortName: 'Invoice',
    logo: '/images/logo-invoice-trimmed.png',
    image: '/images/product-invoice.png',
    imageAlt: 'An organized invoicing workspace with a laptop, calculator, and notebook',
    eyebrow: 'Invoicing made simple',
    title: 'Create clearly. Track confidently. Get paid.',
    cardLine: 'Create, send, and manage invoices easily.',
    description: 'A focused workspace for professional invoices, client details, due dates, and payment status — without rebuilding the same document each time.',
    closing: 'Keep the work moving with a simple, dependable view of what was sent and what is still due.',
    features: [
      { title: 'Professional invoices', body: 'Create clear, consistent documents from reusable business details.' },
      { title: 'Client management', body: 'Keep the right contact and billing information in one place.' },
      { title: 'Payment tracking', body: 'See what is sent, due, overdue, or paid without checking separate files.' },
      { title: 'Simple by design', body: 'The common path stays fast while exceptions remain visible.' },
    ],
    workflow: [
      { title: 'Prepare', body: 'Reuse your business and client details instead of rebuilding the document.' },
      { title: 'Send', body: 'Create a consistent invoice with a clear due date and payment instruction.' },
      { title: 'Track', body: 'Keep sent, due, overdue, and paid work in one dependable view.' },
      { title: 'Follow through', body: 'Make the next action visible without searching through files or email threads.' },
    ],
    assurances: [
      { title: 'One source of status', body: 'Invoice state is held in the workflow rather than inferred from scattered documents.' },
      { title: 'Reusable details', body: 'Client and business information remains consistent across new invoices.' },
      { title: 'Clear exceptions', body: 'Changes and overdue items stay visible instead of quietly falling out of the process.' },
    ],
  },
  {
    slug: 'class',
    name: 'EZHaru Class',
    shortName: 'Class',
    logo: '/images/logo-class-trimmed.png',
    image: '/images/product-class.png',
    imageAlt: 'An instructor reviewing class operations on a tablet in a training studio',
    eyebrow: 'Run every class with clarity',
    title: 'Members, classes, attendance, and progress in one place.',
    cardLine: 'Manage attendance, progress, classes, and operations.',
    description: 'Built from martial-arts school operations and designed to grow with academies, studios, training programs, and other class-based businesses.',
    closing: 'Share knowledge today, see progress clearly, and build a stronger learning operation tomorrow.',
    features: [
      { title: 'Class operations', body: 'Schedules, capacity, instructors, and locations stay together.' },
      { title: 'Attendance that matters', body: 'A quick check-in becomes a useful record for staff and families.' },
      { title: 'Progress over time', body: 'Track milestones, curriculum, and what each learner is ready for next.' },
      { title: 'Flexible foundations', body: 'Martial-arts roots, with a model broad enough for other learning communities.' },
    ],
    workflow: [
      { title: 'Set the class', body: 'Keep schedule, instructor, capacity, location, and curriculum together.' },
      { title: 'Check in', body: 'Turn attendance into a quick operational record rather than a separate admin task.' },
      { title: 'Track progress', body: 'See milestones, readiness, and the next learning step for each member.' },
      { title: 'Run the operation', body: 'Review class activity by instructor or location without rebuilding a report.' },
    ],
    assurances: [
      { title: 'Rules become data', body: 'Join date, billing date, contract term, and exceptions can be held as operational values.' },
      { title: 'No quiet failures', body: 'Records missing required information remain on a visible manual-work list.' },
      { title: 'Built to broaden', body: 'The model began in martial arts but supports studios, academies, and other class-based programs.' },
    ],
  },
];

export const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p])) as Record<ProductKey, Product>;

export const productsKo: Product[] = [
  {
    ...products[0],
    imageAlt: '노트북 옆에서 회의 노트를 검토하는 업무 담당자',
    eyebrow: '말한 내용을 놓치지 않게',
    title: '녹음만 하세요. 나머지는 알아서 정리됩니다.',
    cardLine: '회의를 녹음하고, 전사하고, 알맞은 곳에 정리합니다.',
    description: '분류를 선택하고 녹음하세요. 전사본, 요약, 할 일, 정돈된 노트 파일이 내 클라우드의 지정한 폴더에 저장됩니다.',
    closing: '대화를 다시 찾을 수 있는 실행 가능한 기록으로 바꾸세요. 별도의 파일 정리는 필요 없습니다.',
    features: [
      { title: '스스로 정리되는 파일', body: '분류별로 지정한 내 클라우드 폴더에 녹음과 노트가 자동으로 정리됩니다.' },
      { title: '전사와 요약', body: '전체 전사본과 함께 핵심 내용과 할 일을 한눈에 확인합니다.' },
      { title: '업무 용어 학습', body: '프로젝트명이나 전문 용어를 한 번 고치면 다음 기록의 정확도가 높아집니다.' },
      { title: '안전한 원본', body: '연결이 끊겨도 녹음은 유지되며 업로드가 확인될 때까지 원본을 보존합니다.' },
    ],
    workflow: [
      { title: '분류 선택', body: '업무 회의, 현장 방문, 수업, 개인 메모마다 저장 폴더를 지정합니다.' },
      { title: '녹음', body: '파일 이름이나 노트 정리를 멈춰서 고민하지 않고 대화에 집중합니다.' },
      { title: '검토', body: '요약과 할 일을 읽고 확신이 낮게 표시된 부분만 확인합니다.' },
      { title: '다시 찾기', body: '음성과 Markdown 노트가 지정한 폴더에 함께 정리되어 있습니다.' },
    ],
    assurances: [
      { title: '내 저장소', body: '음성은 EZHaru 저장소가 아니라 사용자의 OneDrive 또는 Google Drive에 저장됩니다.' },
      { title: '선택 가능한 AI 연결', body: '기본 제공 사용량 또는 사용자가 직접 연결한 AI 서비스와 API 키로 전사합니다.' },
      { title: '이식 가능한 노트', body: '노트는 내 폴더에 일반 Markdown 파일로 남아 언제든 읽고 옮길 수 있습니다.' },
    ],
  },
  {
    ...products[1],
    imageAlt: '밝은 업무 공간에서 휴대폰으로 영수증을 촬영하는 모습',
    eyebrow: '영수증에서 보고서까지',
    title: '경비 처리 시간은 줄이고, 중요한 일에 집중하세요.',
    cardLine: '영수증을 정확한 경비 보고서로 바꿉니다.',
    description: '아직 숫자를 손으로 옮기는 회사를 위한 영수증·경비 흐름입니다. 촬영, 인식, 승인, 회계 인계까지 한 경로로 연결합니다.',
    closing: '손에 든 영수증부터 장부의 기록까지 하나의 명확한 흐름으로 이어집니다.',
    features: [
      { title: '발생한 곳에서 촬영', body: '영수증을 모아 다시 입력하지 않고 지출 즉시 촬영합니다.' },
      { title: '문서 자동 인식', body: '거래처, 날짜, 합계, 세금을 읽어 빠르게 확인할 수 있습니다.' },
      { title: '알맞은 승인 경로', body: '금액, 분류, 팀 기준에 따라 필요한 승인자에게 전달합니다.' },
      { title: '회계로 바로 인계', body: '승인된 경비를 월말에 다시 입력하지 않고 회계로 넘깁니다.' },
    ],
    workflow: [
      { title: '촬영', body: '지출이 발생한 곳에서 영수증을 촬영하거나 업로드합니다.' },
      { title: '확인', body: '추출된 거래처, 날짜, 합계, 세금, 분류를 확인합니다.' },
      { title: '승인', body: '회사 규칙에 따라 전달하고 결정 기록을 남깁니다.' },
      { title: '반영', body: '같은 숫자를 다시 입력하지 않고 승인 정보를 회계로 인계합니다.' },
    ],
    assurances: [
      { title: '보이는 예외', body: '확인할 문제가 남아 있으면 승인 단계로 넘어가지 않습니다.' },
      { title: '하나의 감사 기록', body: '영수증, 수정, 승인, 최종 인계 기록이 서로 연결됩니다.' },
      { title: '자동화보다 규칙 먼저', body: '정상 경로와 수동 예외 경로를 정의한 뒤 자동 처리합니다.' },
    ],
  },
  {
    ...products[2],
    imageAlt: '노트북과 계산기, 노트로 정돈된 청구 업무 공간',
    eyebrow: '간결한 인보이스 관리',
    title: '명확하게 만들고, 놓치지 않고 추적하고, 제때 받으세요.',
    cardLine: '인보이스 작성, 발송, 관리를 간편하게 합니다.',
    description: '매번 같은 문서를 다시 만들지 않고 전문적인 인보이스, 고객 정보, 지급기한, 결제 상태를 한곳에서 관리합니다.',
    closing: '무엇을 보냈고 무엇이 남았는지 단순하고 신뢰할 수 있는 화면으로 업무를 이어가세요.',
    features: [
      { title: '전문적인 인보이스', body: '재사용 가능한 사업자 정보로 일관된 문서를 만듭니다.' },
      { title: '고객 정보 관리', body: '정확한 담당자와 청구 정보를 한곳에 유지합니다.' },
      { title: '결제 상태 추적', body: '발송, 예정, 연체, 결제 완료 상태를 별도 파일 없이 확인합니다.' },
      { title: '단순한 설계', body: '일반적인 처리는 빠르게, 예외는 눈에 보이게 유지합니다.' },
    ],
    workflow: [
      { title: '준비', body: '사업자와 고객 정보를 재사용해 문서를 다시 만들지 않습니다.' },
      { title: '발송', body: '명확한 지급기한과 결제 안내가 담긴 일관된 인보이스를 만듭니다.' },
      { title: '추적', body: '발송, 예정, 연체, 완료 상태를 하나의 화면에서 확인합니다.' },
      { title: '후속 처리', body: '파일과 이메일을 뒤지지 않고 다음 할 일을 바로 확인합니다.' },
    ],
    assurances: [
      { title: '하나의 상태 기준', body: '흩어진 문서로 추측하지 않고 업무 흐름 안에서 상태를 관리합니다.' },
      { title: '재사용 가능한 정보', body: '새 인보이스를 만들 때도 고객과 사업자 정보가 일관되게 유지됩니다.' },
      { title: '명확한 예외', body: '변경과 연체 항목이 조용히 누락되지 않고 눈에 보입니다.' },
    ],
  },
  {
    ...products[3],
    imageAlt: '트레이닝 스튜디오에서 태블릿으로 수업 운영을 확인하는 지도자',
    eyebrow: '모든 수업을 명확하게',
    title: '회원, 수업, 출석, 성장 기록을 한곳에서.',
    cardLine: '출석, 성장, 수업, 운영을 하나로 관리합니다.',
    description: '무술 도장 운영에서 시작해 아카데미, 스튜디오, 교육 프로그램 등 다양한 수업 기반 비즈니스로 확장할 수 있도록 설계했습니다.',
    closing: '오늘의 배움을 공유하고, 성장을 분명하게 확인하며, 더 탄탄한 교육 운영을 만드세요.',
    features: [
      { title: '수업 운영', body: '일정, 정원, 지도자, 장소를 한곳에서 관리합니다.' },
      { title: '의미 있는 출석', body: '빠른 체크인이 직원과 가족에게 유용한 기록이 됩니다.' },
      { title: '시간에 따른 성장', body: '단계, 커리큘럼, 다음 준비 항목을 회원별로 확인합니다.' },
      { title: '확장 가능한 기반', body: '무술 도장의 뿌리를 유지하면서 다른 학습 공동체까지 지원합니다.' },
    ],
    workflow: [
      { title: '수업 설정', body: '일정, 지도자, 정원, 장소, 커리큘럼을 함께 관리합니다.' },
      { title: '출석 확인', body: '출석을 별도 행정이 아닌 빠른 운영 기록으로 만듭니다.' },
      { title: '성장 추적', body: '회원별 단계와 준비 상태, 다음 학습 항목을 확인합니다.' },
      { title: '운영 확인', body: '보고서를 다시 만들지 않고 지도자와 지점별 활동을 검토합니다.' },
    ],
    assurances: [
      { title: '규칙을 데이터로', body: '가입일, 결제일, 계약기간, 예외를 운영 값으로 관리합니다.' },
      { title: '조용한 실패 방지', body: '필수 정보가 빠진 기록은 눈에 보이는 수동 처리 목록에 남습니다.' },
      { title: '넓어지는 구조', body: '무술에서 시작했지만 스튜디오, 아카데미, 다양한 수업 프로그램을 지원합니다.' },
    ],
  },
];

export const productBySlugKo = Object.fromEntries(productsKo.map((p) => [p.slug, p])) as Record<ProductKey, Product>;
