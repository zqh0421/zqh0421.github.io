import { cn } from '../utils/cn';
import { type ElementRef, type HTMLAttributes, type ReactNode, forwardRef } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const SectionWrapper = forwardRef<HTMLElement, WrapperProps>(
  ({ children, className, ...props }, ref) => (
    <section
      className={cn('mx-auto my-1/24 w-11/12 max-w-7xl 2xl:w-4/5 2xl:my-1/10', className)}
      ref={ref}
      {...props}
    >
      {children}
    </section>
  ),
);
SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;