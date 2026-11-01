import { ProductDetail } from '@/components/Site';
import { productBySlug } from '@/components/data';
export const metadata = { title: 'Recorder' };
export default function Page(){ return <ProductDetail product={productBySlug.recorder}/>; }
