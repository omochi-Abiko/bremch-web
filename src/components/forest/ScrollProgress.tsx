'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight
          setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (reducedMotion) return null

  // Vine path total length (approximate)
  const vineLength = 900
  const dashOffset = vineLength - (vineLength * progress) / 100

  // Leaf positions along the vine (percentage of total height)
  const leafPositions = [10, 25, 40, 55, 70, 85]

  return (
    <div
      className="fixed left-2 top-0 z-40 hidden h-screen md:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 30 600"
        className="h-full w-[30px]"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Main vine */}
        <path
          d="M15,10 C15,10 12,60 15,110 C18,160 10,210 15,260 C20,310 12,360 15,410 C18,460 10,510 15,560 C17,580 15,590 15,590"
          stroke="var(--forest-600)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            strokeDasharray: vineLength,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 0.1s linear',
          }}
        />

        {/* Leaves at intervals */}
        {leafPositions.map((pct, i) => {
          const y = (pct / 100) * 580 + 10
          const side = i % 2 === 0 ? -1 : 1
          const leafOpacity = progress >= pct ? 1 : 0

          return (
            <g
              key={i}
              style={{
                opacity: leafOpacity,
                transition: 'opacity 0.4s ease-out',
              }}
            >
              <path
                d={`M15,${y} C${15 + side * 8},${y - 6} ${15 + side * 14},${y - 10} ${15 + side * 12},${y - 2}`}
                fill="var(--forest-600)"
                opacity="0.7"
              />
              <path
                d={`M15,${y} C${15 + side * 6},${y + 5} ${15 + side * 12},${y + 8} ${15 + side * 10},${y + 2}`}
                fill="var(--moss)"
                opacity="0.5"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
