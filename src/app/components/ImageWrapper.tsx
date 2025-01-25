'use client';

import Image from 'next/image';

export default function ImageWrapper({ src, alt, className }: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill
      onError={(e) => {
        e.currentTarget.src = "/globe.svg";
      }}
    />
  );
}
