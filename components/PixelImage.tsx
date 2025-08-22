'use client';

import Image from 'next/image';
import { isGif } from '@/utils/imageUtils';

interface PixelImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

export default function PixelImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  sizes 
}: PixelImageProps) {
  // For GIFs, use plain img tag to preserve animation
  if (isGif(src)) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-auto object-contain pixelated ${className}`}
        style={{
          imageRendering: 'pixelated',
        }}
      />
    );
  }

  // For non-GIFs, use next/image with unoptimized for pixel-perfect rendering
  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 300}
      className={`pixelated ${className}`}
      unoptimized={true}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
      style={{
        imageRendering: 'pixelated',
      }}
    />
  );
}
