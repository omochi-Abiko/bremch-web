'use client'

import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3850)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 1s ease-out',
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest text-cream/70">SCROLL</span>
        <svg
          className="h-6 w-6 animate-bounce text-cream/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}
