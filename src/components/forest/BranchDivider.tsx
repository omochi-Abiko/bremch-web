'use client'

import { useEffect, useRef, useState } from 'react'

export default function BranchDivider() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const el = svgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const branchDash = 1600
  const show = visible || reducedMotion

  return (
    <div className="my-12 w-full overflow-hidden py-4" aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 800 60"
        className="block h-[60px] w-full"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        {/* Main branch */}
        <path
          d="M0,30 C50,28 100,35 200,30 C300,25 400,32 500,28 C600,24 700,33 800,30"
          stroke="var(--bark-500)"
          strokeWidth="4"
          strokeLinecap="round"
          style={{
            strokeDasharray: branchDash,
            strokeDashoffset: show ? 0 : branchDash,
            transition: show && !reducedMotion
              ? 'stroke-dashoffset 1.5s ease-out'
              : 'none',
          }}
        />

        {/* Small sub-branches */}
        {[
          'M150,30 C145,22 140,16 135,12',
          'M300,28 C305,20 310,14 315,10',
          'M450,30 C445,22 438,17 432,14',
          'M600,27 C605,19 612,14 618,10',
          'M250,30 C255,38 260,44 265,48',
          'M500,28 C495,36 490,42 485,47',
          'M700,31 C695,39 690,44 686,48',
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="var(--bark-500)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: show ? 0 : 200,
              transition: show && !reducedMotion
                ? `stroke-dashoffset 0.8s ease-out ${0.8 + i * 0.1}s`
                : 'none',
            }}
          />
        ))}

        {/* Leaf buds */}
        {[
          { cx: 133, cy: 10 },
          { cx: 317, cy: 8 },
          { cx: 430, cy: 12 },
          { cx: 620, cy: 8 },
          { cx: 267, cy: 50 },
          { cx: 483, cy: 49 },
          { cx: 684, cy: 50 },
        ].map((pos, i) => (
          <ellipse
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            rx="6"
            ry="4"
            fill="var(--forest-600)"
            style={{
              opacity: show ? 0.8 : 0,
              transition: show && !reducedMotion
                ? `opacity 0.6s ease-out ${1.2 + i * 0.1}s`
                : 'none',
              transform: `rotate(${i % 2 === 0 ? -30 : 30}deg)`,
              transformOrigin: `${pos.cx}px ${pos.cy}px`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
