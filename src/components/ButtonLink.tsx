import { buttonVariants } from './Button';
import { cn } from '../utils/cn';
import type { VariantProps } from 'class-variance-authority';
import { type AnchorHTMLAttributes, type ElementRef, type ReactNode, forwardRef } from 'react';

type ButtonLinkHTMLElement = ElementRef<'a'>;

interface ButtonLinkProps
  extends AnchorHTMLAttributes<ButtonLinkHTMLElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const ButtonLink = forwardRef<ButtonLinkHTMLElement, ButtonLinkProps>(
  (
    { foreground, background, size, isGhost, children, className, ...props },
    ref,
  ) => (
    <a
      className={cn(
        buttonVariants({
          foreground,
          background,
          size,
          isGhost,
          className,
        }),
      )}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  ),
);
ButtonLink.displayName = 'ButtonLink';


export default ButtonLink;