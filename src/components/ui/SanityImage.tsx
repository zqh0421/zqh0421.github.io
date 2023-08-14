import { generateImageSizeProps, type Image } from '../../utils/santiyImage';
import { ElementRef, forwardRef, HTMLAttributes } from 'react';

type SanityImageHTMLElement = ElementRef<'img'>;

interface SanityImageProps extends HTMLAttributes<SanityImageHTMLElement> {
  image: Image;
  sizes?: string | undefined;
  maxWidth?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  isAboveTheFold?: boolean | undefined;
}

const SanityImage = forwardRef<SanityImageHTMLElement, SanityImageProps>(
  (
    {
      image,
      sizes = undefined,
      maxWidth = undefined,
      width = undefined,
      height = undefined,
      isAboveTheFold = false,
      ...props
    },
    ref,
  ) => (
    <img
      style={{
        backgroundColor: image.asset.metadata.palette.dominant.background,
      }}
      alt={image.alt}
      loading={isAboveTheFold ? 'eager' : 'lazy'}
      decoding={isAboveTheFold ? 'sync' : 'async'}
      {...generateImageSizeProps({ image, sizes, maxWidth, width, height })}
      ref={ref}
      {...props}
    />
  ),
);
SanityImage.displayName = 'SanityImage';

export default SanityImage;