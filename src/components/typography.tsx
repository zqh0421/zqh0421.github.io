import { cn } from '../utils/cn';
import type { ElementRef, HTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends HTMLAttributes<ElementRef<'h2'>> {
  children: ReactNode;
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        'mb-6 text-2xl font-bold leading-tight text-slate-900 md:text-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

interface CaptionProps extends HTMLAttributes<ElementRef<'p'>> {
  children: ReactNode;
}

function Caption({ children, className, ...props }: CaptionProps) {
  return (
    <p
      className={cn(
        'mb-6 inline-block text-sm font-medium uppercase text-blue-500 md:text-lg',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

interface ParagraphProps extends HTMLAttributes<ElementRef<'p'>> {
  children: ReactNode;
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('max-w-prose leading-relaxed text-slate-600 mb-2', className)}
      {...props}
    >
      {children}
    </p>
  );
}

function SubHeading({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        'mb-6 text-base font-bold leading-tight uppercase text-slate-900 md:text-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function Note({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('max-w-prose leading-relaxed text-blue-300 mb-2 text-sm ', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { Caption, Heading, Paragraph, SubHeading, Note };