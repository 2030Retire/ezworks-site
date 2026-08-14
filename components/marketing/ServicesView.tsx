'use client';

import { useEffect } from 'react';
import { analyticsEvents, track } from '@/lib/analytics';

/**
 * Fires the `services_view` event once on mount. Renders nothing.
 * No analytics provider is wired up — see lib/analytics.ts.
 */
export function ServicesView() {
  useEffect(() => {
    track(analyticsEvents.servicesView);
  }, []);

  return null;
}
