'use client'

import { useEffect, useState } from 'react'

export default function HeroContent() {
  const [showTitle, setShowTitle] = useState(false)
  const [showTagline, setShowTagline] = useState(false)

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 2460)
    const taglineTimer = setTimeout(() => setShowTagline(true), 3080)
    return () => {
      clearTimeout(titleTimer)
      clearTimeout(taglineTimer)
    }
  }, [])

  return (
    <div className="relative z-10 flex flex-col items-center text-center">
      <h1
        className="font-display text-5xl font-bold tracking-wider text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        style={{
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
        }}
      >
        Bremch
      </h1>
      <p
        className="mt-4 max-w-lg text-base font-medium text-cream/90 sm:text-lg md:mt-6 md:text-xl"
        style={{
          opacity: showTagline ? 1 : 0,
          transform: showTagline ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
        }}
      >
        ITを通して人に寄り添える「居場所」を提供する
      </p>
    </div>
  )
}
