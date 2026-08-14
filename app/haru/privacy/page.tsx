import type { Metadata } from 'next';
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
 * EZHaru app privacy policy.
 *
 * ⚠️ This URL is submitted to the Play Store — /haru/privacy/ must not change.
 * The legal wording below is carried over verbatim from the previously
 * published version; only the presentation has been restyled. Do not reword.
 */
export const metadata: Metadata = {
  title: 'EZHaru Privacy Policy',
  description:
    'EZHaru records audio on your phone and turns it into transcripts and summaries. We operate no server and never receive your recordings, transcripts or personal data.',
  alternates: { canonical: '/haru/privacy/' },
  robots: { index: true, follow: true },
};

const dataRows: [string, string, string][] = [
  [
    'Voice recordings',
    'Your device → your own OneDrive (if you connect it) → the transcription service you configured with your own API key',
    'Only you, via your own accounts',
  ],
  [
    'Transcripts & summaries (.md notes)',
    'Your device → your own OneDrive / OneNote (optional)',
    'Only you',
  ],
  [
    'Location (optional)',
    'Stored on your device to label where a recording was made. Never sent to us. You can deny the permission; recording works without it',
    'Only you',
  ],
  [
    'Microsoft account sign-in',
    'An access token is stored encrypted on your device to upload to your own OneDrive. We never see your password or token',
    'Only you',
  ],
  [
    'API keys you enter',
    'Stored encrypted on your device. Sent only to the AI vendor you chose',
    'Only you and your chosen vendor',
  ],
];

export default function HaruPrivacyPage() {
  return (
    <LegalPage
      title="EZHaru Privacy Policy"
      effectiveDate="August 14, 2026"
      backHref="/haru/"
      backLabel="EZHaru"
    >
      <LegalCallout>
        <p>
          <b>The short version:</b> EZHaru records audio on your phone and turns
          it into transcripts and summaries.{' '}
          <b>
            We do not operate any server, and we never receive your recordings,
            transcripts, or personal data.
          </b>{' '}
          Your data goes only to places you own or choose: your device, your own
          Microsoft OneDrive account, and the AI service you connect with your own
          API key.
        </p>
      </LegalCallout>

      <LegalHeading>What data the app handles, and where it goes</LegalHeading>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-[0.9063rem]">
          <thead>
            <tr>
              {['Data', 'Where it goes', 'Who can access it'].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border border-line bg-surface p-3 text-left align-top font-semibold text-ink"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map(([data, where, who]) => (
              <tr key={data}>
                <td className="border border-line p-3 align-top font-medium text-ink">{data}</td>
                <td className="border border-line p-3 align-top leading-relaxed text-soft">{where}</td>
                <td className="border border-line p-3 align-top leading-relaxed text-soft">{who}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <LegalHeading>What we do NOT do</LegalHeading>
      <LegalList>
        <LegalItem>
          We do <b>not</b> operate servers that receive your audio, text, or usage
          data.
        </LegalItem>
        <LegalItem>
          We do <b>not</b> collect analytics, advertising identifiers, or crash
          reports.
        </LegalItem>
        <LegalItem>
          We do <b>not</b> sell, share, or have access to any of your data.
        </LegalItem>
        <LegalItem>
          The app creates <b>no developer-side account</b> — there is nothing for
          us to delete because we hold nothing.
        </LegalItem>
      </LegalList>

      <LegalHeading>Third-party services you may connect</LegalHeading>
      <LegalText>
        When you connect a service, your data is handled under that service&apos;s
        terms with you: Microsoft OneDrive/OneNote (storage you own) and the
        transcription/summary AI vendor you configure (for example Groq or
        Anthropic — using your own API key, under your own agreement with them).
        Choose vendors whose data-retention terms you are comfortable with; the
        app works with any compatible provider, including self-hosted ones.
      </LegalText>

      <LegalHeading>Data deletion</LegalHeading>
      <LegalText>
        Delete recordings in the app (you choose whether the OneDrive copy is
        deleted too). Disconnect OneDrive in Settings to revoke the app&apos;s
        access instantly. Uninstalling the app removes all local data. Files in
        your OneDrive and any data held by your chosen AI vendor are under your
        own control through those accounts.
      </LegalText>

      <LegalHeading>Recording consent</LegalHeading>
      <LegalText>
        You are responsible for complying with the recording-consent laws of your
        location and the policies of your institution when you record other
        people.
      </LegalText>

      <LegalHeading>Children</LegalHeading>
      <LegalText>This app is not directed to children under 13.</LegalText>

      <LegalHeading>Changes</LegalHeading>
      <LegalText>
        If the app&apos;s architecture ever changes in a way that affects this
        policy (for example, introducing an optional server-based plan), we will
        update this policy and note the change here before it takes effect.
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
