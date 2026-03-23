'use client'

import { useEffect, useRef, useState } from 'react'

export default function ParallaxForest() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion])

  const layerStyle = (speed: number): React.CSSProperties => ({
    transform: reducedMotion ? 'none' : `translateY(${offset * speed}px)`,
    willChange: reducedMotion ? 'auto' : 'transform',
  })

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 1 – distant mountains */}
      <div className="absolute inset-x-0 bottom-0" style={layerStyle(0.1)}>
        <svg
          viewBox="0 0 1440 320"
          className="block w-full"
          preserveAspectRatio="none"
          style={{ opacity: 0.25 }}
        >
          <path
            fill="var(--forest-900)"
            d="M0,320 L0,220 Q120,100 240,180 Q360,80 480,160 Q600,60 720,140 Q840,40 960,130 Q1080,50 1200,150 Q1320,70 1440,200 L1440,320 Z"
          />
        </svg>
      </div>

      {/* Layer 2 – mid-ground trees */}
      <div className="absolute inset-x-0 bottom-0" style={layerStyle(0.3)}>
        <svg
          viewBox="0 0 1440 400"
          className="block w-full"
          preserveAspectRatio="none"
          style={{ opacity: 0.4 }}
        >
          <path
            fill="var(--forest-800)"
            d="M0,400 L0,300
              L60,300 L80,200 L100,300
              L180,300 L200,180 L220,300
              L320,300 L350,160 L380,300
              L460,300 L480,210 L500,300
              L580,300 L610,150 L640,300
              L720,300 L740,190 L760,300
              L860,300 L890,140 L920,300
              L1000,300 L1020,200 L1040,300
              L1120,300 L1150,160 L1180,300
              L1260,300 L1280,190 L1300,300
              L1380,300 L1400,210 L1420,300
              L1440,300 L1440,400 Z"
          />
        </svg>
      </div>

      {/* Layer 3 – foreground canopy */}
      <div className="absolute inset-x-0 bottom-0" style={layerStyle(0.5)}>
        <svg
          viewBox="0 0 1440 300"
          className="block w-full"
          preserveAspectRatio="none"
          style={{ opacity: 0.55 }}
        >
          <path
            fill="var(--forest-700)"
            d="M0,300 L0,260
              Q40,200 80,240 Q120,180 160,230 Q200,160 240,220
              Q280,170 320,240 Q360,190 400,250 Q440,180 480,230
              Q520,160 560,220 Q600,170 640,240 Q680,190 720,250
              Q760,180 800,230 Q840,160 880,220 Q920,170 960,240
              Q1000,190 1040,250 Q1080,180 1120,230 Q1160,160 1200,220
              Q1240,170 1280,240 Q1320,190 1360,250 Q1400,210 1440,260
              L1440,300 Z"
          />
        </svg>
      </div>
    </div>
  )
}
