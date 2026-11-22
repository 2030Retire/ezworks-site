import { FormDetail, formSlugs } from '@/components/FormDetail';

export function generateStaticParams() {
  return formSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: `${slug} · Form template` };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <FormDetail slug={slug} locale="en" />;
}
