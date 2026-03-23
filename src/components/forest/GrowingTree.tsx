'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/forest-animations.module.css'

export default function GrowingTree() {
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const showAnimation = visible && !reducedMotion
  const trunkLength = 1200
  const branchLength = 600

  const speed = 1.3
  const strokeProps = (
    length: number,
    delay: number
  ): React.CSSProperties => ({
    strokeDasharray: length,
    strokeDashoffset: showAnimation ? 0 : reducedMotion ? 0 : length,
    transition: showAnimation
      ? `stroke-dashoffset ${3 / speed}s ease-out ${delay / speed}s`
      : 'none',
  })

  const leafFade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : reducedMotion ? 1 : 0,
    transition: visible ? `opacity ${1.2 / speed}s ease-out ${delay / speed}s` : 'none',
  })

  return (
    <div className="flex justify-center" aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 -80 400 680"
        className="h-[500px] w-auto max-w-full"
        fill="none"
      >
        {/* Trunk */}
        <path
          d="M200,580 C200,580 198,500 200,420 C202,340 195,260 200,180"
          stroke="var(--forest-800)"
          strokeWidth="12"
          strokeLinecap="round"
          style={strokeProps(trunkLength, 0)}
        />

        {/* Main branch left */}
        <path
          d="M200,350 C180,330 140,310 100,290"
          stroke="var(--forest-800)"
          strokeWidth="6"
          strokeLinecap="round"
          style={strokeProps(branchLength, 0.8)}
        />

        {/* Main branch right */}
        <path
          d="M200,320 C220,300 260,280 310,270"
          stroke="var(--forest-800)"
          strokeWidth="6"
          strokeLinecap="round"
          style={strokeProps(branchLength, 1.0)}
        />

        {/* Upper branch left */}
        <path
          d="M200,260 C175,240 150,230 110,220"
          stroke="var(--forest-700)"
          strokeWidth="4"
          strokeLinecap="round"
          style={strokeProps(branchLength, 1.2)}
        />

        {/* Upper branch right */}
        <path
          d="M200,240 C225,225 260,215 290,200"
          stroke="var(--forest-700)"
          strokeWidth="4"
          strokeLinecap="round"
          style={strokeProps(branchLength, 1.4)}
        />

        {/* Small branches */}
        <path
          d="M200,210 C185,195 160,185 140,170"
          stroke="var(--forest-700)"
          strokeWidth="3"
          strokeLinecap="round"
          style={strokeProps(branchLength, 1.6)}
        />
        <path
          d="M200,200 C220,185 245,175 270,160"
          stroke="var(--forest-700)"
          strokeWidth="3"
          strokeLinecap="round"
          style={strokeProps(branchLength, 1.7)}
        />

        {/* Leaf clusters – fade in after branches grow */}
        <g style={leafFade(2.8)}>
          {/* Lower left cluster */}
          <ellipse cx="80" cy="280" rx="50" ry="40" fill="var(--forest-600)" opacity="0.85" />
          <ellipse cx="110" cy="265" rx="42" ry="35" fill="var(--forest-500)" opacity="0.75" />
          <ellipse cx="65" cy="295" rx="35" ry="28" fill="var(--forest-700)" opacity="0.6" />
          <ellipse cx="130" cy="285" rx="30" ry="25" fill="var(--moss)" opacity="0.55" />

          {/* Lower right cluster */}
          <ellipse cx="320" cy="260" rx="48" ry="38" fill="var(--forest-600)" opacity="0.85" />
          <ellipse cx="295" cy="248" rx="40" ry="32" fill="var(--forest-500)" opacity="0.75" />
          <ellipse cx="340" cy="275" rx="32" ry="26" fill="var(--forest-700)" opacity="0.6" />
          <ellipse cx="275" cy="270" rx="28" ry="24" fill="var(--moss)" opacity="0.5" />

          {/* Mid left cluster */}
          <ellipse cx="95" cy="215" rx="48" ry="38" fill="var(--forest-600)" opacity="0.85" />
          <ellipse cx="125" cy="200" rx="40" ry="32" fill="var(--forest-500)" opacity="0.7" />
          <ellipse cx="70" cy="225" rx="35" ry="28" fill="var(--moss)" opacity="0.6" />
          <ellipse cx="145" cy="215" rx="30" ry="24" fill="var(--forest-700)" opacity="0.55" />

          {/* Mid right cluster */}
          <ellipse cx="300" cy="195" rx="45" ry="36" fill="var(--forest-600)" opacity="0.85" />
          <ellipse cx="275" cy="182" rx="38" ry="30" fill="var(--forest-500)" opacity="0.7" />
          <ellipse cx="325" cy="205" rx="32" ry="26" fill="var(--moss)" opacity="0.6" />
          <ellipse cx="260" cy="200" rx="28" ry="22" fill="var(--forest-700)" opacity="0.55" />

          {/* Upper left cluster */}
          <ellipse cx="120" cy="160" rx="45" ry="35" fill="var(--forest-500)" opacity="0.8" />
          <ellipse cx="145" cy="148" rx="38" ry="30" fill="var(--forest-600)" opacity="0.75" />
          <ellipse cx="95" cy="170" rx="32" ry="26" fill="var(--moss)" opacity="0.6" />

          {/* Upper right cluster */}
          <ellipse cx="280" cy="150" rx="45" ry="35" fill="var(--forest-500)" opacity="0.8" />
          <ellipse cx="255" cy="138" rx="38" ry="30" fill="var(--forest-600)" opacity="0.75" />
          <ellipse cx="305" cy="160" rx="32" ry="26" fill="var(--moss)" opacity="0.6" />

          {/* Top canopy — lush crown */}
          <ellipse cx="200" cy="105" rx="65" ry="50" fill="var(--forest-600)" opacity="0.9" />
          <ellipse cx="170" cy="115" rx="50" ry="40" fill="var(--forest-500)" opacity="0.8" />
          <ellipse cx="235" cy="112" rx="48" ry="38" fill="var(--forest-500)" opacity="0.8" />
          <ellipse cx="200" cy="85" rx="55" ry="42" fill="var(--forest-500)" opacity="0.85" />
          <ellipse cx="160" cy="95" rx="40" ry="32" fill="var(--moss)" opacity="0.65" />
          <ellipse cx="245" cy="92" rx="40" ry="32" fill="var(--moss)" opacity="0.65" />
          <ellipse cx="200" cy="70" rx="42" ry="32" fill="var(--forest-600)" opacity="0.75" />
          <ellipse cx="180" cy="130" rx="35" ry="28" fill="var(--forest-700)" opacity="0.55" />
          <ellipse cx="220" cy="128" rx="35" ry="28" fill="var(--forest-700)" opacity="0.55" />

          {/* Outer scattered leaves */}
          <ellipse cx="55" cy="250" rx="22" ry="18" fill="var(--forest-500)" opacity="0.5" />
          <ellipse cx="350" cy="240" rx="22" ry="18" fill="var(--forest-500)" opacity="0.5" />
          <ellipse cx="150" cy="140" rx="20" ry="16" fill="var(--forest-600)" opacity="0.45" />
          <ellipse cx="250" cy="135" rx="20" ry="16" fill="var(--forest-600)" opacity="0.45" />
        </g>

        {/* Roots */}
        <g style={leafFade(0.3)}>
          <path
            d="M200,580 C190,590 170,595 155,592"
            stroke="var(--bark-500)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M200,580 C210,592 235,596 250,590"
            stroke="var(--bark-500)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}
