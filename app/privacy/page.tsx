import type { Metadata } from 'next';
import Link from 'next/link';
import {
  LegalCallout,
  LegalHeading,
  LegalItem,
  LegalList,
  LegalPage,
  LegalText,
} from '@/components/layout/LegalPage';
import { site } from '@/content/site';

/**
 * Website privacy policy — covers ezworks.co itself.
 * The EZHaru app has its own, separate policy at /haru/privacy/.
 */
export const metadata: Metadata = {
  title: 'Website Privacy',
  description:
    'How ezworks.co handles data: no analytics, no tracking scripts, no advertising cookies, and no third-party fonts. The only personal data we receive is what you send us.',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Website Privacy"
      effectiveDate="August 14, 2026"
      backHref="/"
      backLabel="EZWorks"
    >
      <LegalCallout>
        <p>
          <b>The short version:</b> this website has no analytics, no tracking
          scripts, no advertising cookies and no third-party fonts. The only
          personal data we hold is what you choose to send us through the contact
          form or by email.
        </p>
      </LegalCallout>

      <LegalHeading>Scope</LegalHeading>
      <LegalText>
        This policy covers the ezworks.co website. Our EZHaru mobile app is
        covered by its own separate policy —{' '}
        <Link href="/haru/privacy/" className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover">
          read the EZHaru privacy policy
        </Link>
        .
      </LegalText>

      <LegalHeading>What this site does not do</LegalHeading>
      <LegalList>
        <LegalItem>No analytics or measurement product is installed.</LegalItem>
        <LegalItem>
          No advertising, remarketing or social tracking pixels are present.
        </LegalItem>
        <LegalItem>
          No cookies are set for tracking or profiling. The site works without
          you accepting anything.
        </LegalItem>
        <LegalItem>
          No third-party fonts, stylesheets or scripts are loaded, so visiting
          this site does not disclose your visit to another company through page
          assets.
        </LegalItem>
      </LegalList>

      <LegalHeading>Hosting</LegalHeading>
      <LegalText>
        This site is a set of static files served by GitHub Pages. Like any web
        host, the provider processes technical connection data — such as IP
        address, browser user agent and requested URL — in order to deliver the
        page and to protect the service. We do not receive, store or analyse
        those logs.
      </LegalText>

      <LegalHeading>The contact form</LegalHeading>
      <LegalText>
        The form asks for your name, email address, an optional company name,
        what your enquiry is about, and your message. If a form endpoint has not
        been configured, the form simply opens a prefilled draft in your own mail
        app and nothing is transmitted until you send it. Where an endpoint is
        configured, the fields above are sent to it so that the message reaches
        our inbox.
      </LegalText>
      <LegalText>
        We use what you send only to reply to you and to carry on the resulting
        conversation. We do not sell it, share it for marketing, or add you to a
        mailing list.
      </LegalText>

      <LegalHeading>Retention</LegalHeading>
      <LegalText>
        Enquiries live in our email for as long as the conversation is
        commercially relevant. You may ask us to delete your enquiry and our
        replies at any time, and we will.
      </LegalText>

      <LegalHeading>Your choices</LegalHeading>
      <LegalText>
        Write to us and we will tell you what we hold about you, correct it, or
        delete it. Because we collect nothing automatically, in almost every case
        that is simply the email thread you started.
      </LegalText>

      <LegalHeading>Children</LegalHeading>
      <LegalText>
        This website is intended for business use and is not directed to
        children.
      </LegalText>

      <LegalHeading>Changes</LegalHeading>
      <LegalText>
        If we add anything that changes the picture above — a measurement tool, a
        different form provider — we will update this page and change the
        effective date before it takes effect.
      </LegalText>

      <LegalHeading>Contact</LegalHeading>
      <LegalText>
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover"
        >
          {site.email}
        </a>
      </LegalText>
    </LegalPage>
  );
}
