'use client';

import { Button } from '@/components/ui/Button';
import { analyticsEvents, track } from '@/lib/analytics';

/**
 * Alpha-invite CTA. Sends visitors to the contact form with EZHaru
 * preselected, and emits `haru_invite_click`.
 */
export function HaruInviteButton({ className }: { className?: string }) {
  return (
    <span className="inline-flex" onClick={() => track(analyticsEvents.haruInviteClick)}>
      <Button href="/contact/?interest=haru" className={className}>
        Request an alpha invite
      </Button>
    </span>
  );
}
