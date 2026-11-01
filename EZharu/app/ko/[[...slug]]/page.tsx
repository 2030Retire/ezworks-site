import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KoreanAboutPage, KoreanContactPage, KoreanHomePage, KoreanHowPage, KoreanProductPage, KoreanProductsPage, KoreanSolutionsPage } from '@/components/KoreanPages';
import type { ProductKey } from '@/components/data';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';
import { DeleteAccountPage } from '@/components/DeleteAccountPage';

const paths = [
  [], ['products'], ['products','recorder'], ['products','recorder','privacy'], ['products','recorder','delete-account'], ['products','expense'], ['products','invoice'], ['products','class'],
  ['solutions'], ['how-we-work'], ['about'], ['contact'],
];

export function generateStaticParams() {
  return paths.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug = [] } = await params;
  const key = slug.join('/');
  const titles: Record<string, string> = {'':'홈','products':'제품','products/recorder':'Recorder','products/recorder/privacy':'Recorder 개인정보처리방침','products/recorder/delete-account':'Recorder 계정 삭제','products/expense':'Expense','products/invoice':'Invoice','products/class':'Class','solutions':'솔루션','how-we-work':'진행 방식','about':'회사 소개','contact':'문의'};
  return { title: titles[key] ?? 'EZHaru', description: '실제 업무를 위한 실용적인 소프트웨어와 자동화.' };
}

export default async function KoreanRoute({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const key = slug.join('/');
  if (key === '') return <KoreanHomePage/>;
  if (key === 'products') return <KoreanProductsPage/>;
  if (key === 'solutions') return <KoreanSolutionsPage/>;
  if (key === 'how-we-work') return <KoreanHowPage/>;
  if (key === 'about') return <KoreanAboutPage/>;
  if (key === 'contact') return <KoreanContactPage/>;
  if (key === 'products/recorder/privacy') return <PrivacyPolicy locale="ko"/>;
  if (key === 'products/recorder/delete-account') return <DeleteAccountPage locale="ko"/>;
  const match = key.match(/^products\/(recorder|expense|invoice|class)$/);
  if (match) return <KoreanProductPage slug={match[1] as ProductKey}/>;
  notFound();
}
