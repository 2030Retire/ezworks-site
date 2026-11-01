import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Recorder Privacy Policy',
  description: 'EZHaru Recorder Privacy Policy. Learn what data is processed, where it is stored, and how long it is retained.',
  alternates: {
    canonical: 'https://ezharu.co/products/recorder/privacy/',
    languages: {
      en: 'https://ezharu.co/products/recorder/privacy/',
      ko: 'https://ezharu.co/ko/products/recorder/privacy/',
    },
  },
};

export default function Page() {
  return <PrivacyPolicy />;
}
