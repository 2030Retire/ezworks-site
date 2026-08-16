'use client';

import { Button } from '@/components/ui/Button';
import { analyticsEvents, track } from '@/lib/analytics';

/**
 * Alpha-invite CTA. Sends visitors to the contact form with EZHaru
 * preselected, and emits `haru_invite_click`.
 */
export function HaruInviteButton({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <span className="inline-flex" onClick={() => track(analyticsEvents.haruInviteClick)}>
      <Button href={href} className={className}>
        {label}
      </Button>
    </span>
  );
}
