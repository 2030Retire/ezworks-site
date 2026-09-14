/**
 * Analytics event surface.
 *
 * No provider is wired up, and none may be hardcoded here. This module only
 * names the events and dispatches them as a DOM CustomEvent, so a provider can
 * be attached later by listening for `ezworks:track` — without touching any
 * component.
 */

export const analyticsEvents = {
  contactSubmit: 'contact_submit',
  haruInviteClick: 'haru_invite_click',
  servicesView: 'services_view',
} as const;

export type AnalyticsEvent =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

export const TRACK_EVENT_NAME = 'ezworks:track';

export function track(
  event: AnalyticsEvent,
  detail?: Record<string, string | number | boolean>,
): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(TRACK_EVENT_NAME, { detail: { event, ...detail } }),
  );
}
