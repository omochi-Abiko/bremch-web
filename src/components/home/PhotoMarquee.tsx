'use client'

import Image from 'next/image'
import { withBasePath } from '@/lib/basePath'

const images = [
  { src: withBasePath('/gallery-1.webp'), alt: 'チームの様子' },
  { src: withBasePath('/gallery-2.webp'), alt: 'インタビュー風景' },
  { src: withBasePath('/gallery-3.webp'), alt: '業務の様子' },
]

export default function PhotoMarquee() {
  // Duplicate images for seamless loop
  const allImages = [...images, ...images, ...images, ...images]

  return (
    <div className="relative overflow-hidden py-10">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

      {/* Scrolling track */}
      <div
        className="flex gap-6"
        style={{
          animation: 'marqueeScroll 30s linear infinite',
          width: 'max-content',
        }}
      >
        {allImages.map((img, i) => (
          <div
            key={i}
            className="h-48 w-72 shrink-0 overflow-hidden rounded-2xl shadow-md sm:h-56 sm:w-80 md:h-64 md:w-96"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
