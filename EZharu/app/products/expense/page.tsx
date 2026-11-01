import { ProductDetail } from '@/components/Site';
import { productBySlug } from '@/components/data';
export const metadata = { title: 'Expense' };
export default function Page(){ return <ProductDetail product={productBySlug.expense}/>; }
