import type { Locale } from './data';

/**
 * 양식 목록·상세가 **함께 쓰는** 것. ⛔ 문구를 두 벌로 두면 한쪽만 고쳐진다.
 *
 * ⚠️ `forms-data.json` 은 손으로 쓰지 않는다 — EZVoice 저장소의
 *   `tools/export_forms.py` 가 앱 안의 양식 원본에서 내보낸다.
 */
export type FormField = { label: string; repeated: boolean };
export type FormSection = { title: string; fields: FormField[] };
export type FormRow = {
  slug: string;
  title: string;
  pack: string;
  blurb: string;
  bytes: number;
  sha256: string;
  sections: FormSection[];
  sample: boolean;
};

/** ⛔ 주소에서 `.html` 을 뗀다 — 상세 페이지의 주소는 파일이 아니라 **문서**다. */
export const slugId = (slug: string) => slug.replace(/\.html$/, '');

export const formsCopy: Record<Locale, {
  eyebrow: string; title: string; lede: string;
  trust: string; trustBody: string;
  back: string; backList: string; how: string; steps: string[]; note: string;
  search: string; filterLabel: string; all: string;
  sortLabel: string; sortName: string; sortSize: string;
  count: (n: number, total: number) => string;
  fieldCount: (n: number) => string;
  colName: string; colPack: string; colFields: string; colSize: string;
  none: string;
  preview: string; download: string; sample: string; sampleHint: string;
  whatItAsks: string; repeats: string; repeatsHint: string;
  fileFacts: string; size: string; checksum: string;
}> = {
  en: {
    eyebrow: 'EZHaru Recorder',
    title: 'Form templates',
    lede: 'A form tells the recorder what to write down. Pick one, change anything you like, and bring it into the app.',
    trust: 'Yours stays yours',
    trustBody: 'Once you change a form, we never replace it. Updates are offered here; applying one is always your choice.',
    back: 'Back to Recorder',
    backList: 'All form templates',
    how: 'How to use one',
    steps: [
      'Download a template, or open it first to see what it asks for.',
      'Change the wording, add your own sections, drop in your logo — it is an ordinary HTML file.',
      'In the app, open the category, tap Form, then Import from a file.',
    ],
    note: 'The app reads only the {{ }} markers. Everything else in the file is yours and comes back out untouched.',
    search: 'Search templates',
    filterLabel: 'Filter by kind of work',
    all: 'All',
    sortLabel: 'Sort',
    sortName: 'By name',
    sortSize: 'Longest first',
    count: (n, total) => (n === total ? `${total} templates` : `${n} of ${total} templates`),
    fieldCount: n => `${n} fields`,
    colName: 'Template', colPack: 'Used for', colFields: 'Fields', colSize: 'Size',
    none: 'No templates match what you typed.',
    preview: 'Open the template',
    download: 'Download',
    sample: 'See it filled in',
    sampleHint: 'An example with made-up details, so you can see what a finished one looks like.',
    whatItAsks: 'What it asks for',
    repeats: 'repeats',
    repeatsHint: 'Marked rows repeat — one entry per item, so the same subject gathers across recordings.',
    fileFacts: 'About the file',
    size: 'Size',
    checksum: 'Checksum',
  },
  ko: {
    eyebrow: 'EZHaru Recorder',
    title: '양식 템플릿',
    lede: '양식은 녹음기에게 무엇을 적을지 알려 줍니다. 하나 고르고, 원하는 대로 고쳐서, 앱에 넣으세요.',
    trust: '고치신 양식은 그대로 둡니다',
    trustBody: '한 번 손대신 양식은 저희가 절대 바꾸지 않습니다. 새 양식은 여기에 올려 두고, 바꿀지는 늘 본인이 정합니다.',
    back: 'Recorder 로 돌아가기',
    backList: '양식 목록으로',
    how: '쓰는 방법',
    steps: [
      '템플릿을 받습니다. 먼저 열어 무엇을 묻는지 봐도 됩니다.',
      '문구를 고치고, 필요한 항목을 더하고, 회사 로고를 넣으세요 — 그냥 HTML 파일입니다.',
      '앱에서 카테고리를 열고 Form → Import from a file 을 고릅니다.',
    ],
    note: '앱이 읽는 것은 {{ }} 표식뿐입니다. 파일의 나머지는 그대로 두었다가 그대로 돌려드립니다.',
    search: '양식 검색',
    filterLabel: '업무별로 보기',
    all: '전체',
    sortLabel: '정렬',
    sortName: '이름순',
    sortSize: '긴 것부터',
    count: (n, total) => (n === total ? `양식 ${total}개` : `${total}개 중 ${n}개`),
    fieldCount: n => `${n}칸`,
    colName: '양식', colPack: '쓰는 곳', colFields: '칸', colSize: '크기',
    none: '검색어에 맞는 양식이 없습니다.',
    preview: '빈 양식 보기',
    download: '받기',
    sample: '채워진 모습 보기',
    sampleHint: '지어낸 내용으로 채운 예시입니다. 완성되면 어떻게 보이는지 볼 수 있습니다.',
    whatItAsks: '무엇을 적는 양식인가',
    repeats: '반복',
    repeatsHint: '반복 표시가 붙은 줄은 항목마다 한 줄씩 쌓입니다 — 그래서 여러 녹음의 같은 대상이 한 줄로 모입니다.',
    fileFacts: '파일 정보',
    size: '크기',
    checksum: '체크섬',
  },
};
