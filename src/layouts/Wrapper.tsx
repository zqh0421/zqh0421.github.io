import { cn } from '../utils/cn';
import { ElementRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

type WrapperHTMLElement = ElementRef<'div'>;

interface WrapperProps extends HTMLAttributes<WrapperHTMLElement> {
  children: ReactNode;
}

const Wrapper = forwardRef<WrapperHTMLElement, WrapperProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={cn('mx-auto my-1/24 w-11/12 max-w-7xl 2xl:w-4/5 2xl:my-1/10', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
);
Wrapper.displayName = 'Wrapper';

export default Wrapper;