import type { Metadata } from 'next';
import { DeleteAccountPage } from '@/components/DeleteAccountPage';

export const metadata: Metadata = {
  title: 'Delete your Recorder account',
  description: 'Request permanent deletion of your EZHaru Recorder account and server-side account data.',
  alternates: {
    canonical: 'https://ezharu.co/products/recorder/delete-account/',
    languages: {
      en: 'https://ezharu.co/products/recorder/delete-account/',
      ko: 'https://ezharu.co/ko/products/recorder/delete-account/',
    },
  },
};

export default function Page() {
  return <DeleteAccountPage/>;
}
