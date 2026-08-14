'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

/**
 * Fades content in once, when it first scrolls into view.
 *
 * The `reveal` styles are gated on `html.js` in globals.css, so with
 * JavaScript disabled the content simply renders in place. `prefers-reduced-
 * motion` disables the transition in CSS.
 */
export function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  children,
}: {
  as?: 'div' | 'li' | 'section';
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
