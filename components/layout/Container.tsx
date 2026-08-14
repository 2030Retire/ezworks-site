import { cn } from '@/lib/cn';

/** Page gutter + max width. Every section uses this so columns stay aligned. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
