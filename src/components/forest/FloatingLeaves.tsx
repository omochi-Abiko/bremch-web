'use client'

import { useEffect, useState } from 'react'
import styles from '@/styles/forest-animations.module.css'

interface Leaf {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  rotation: number
}

const STATIC_LEAVES: Leaf[] = [
  { id: 0, left: 5, size: 18, delay: 0, duration: 14, rotation: 45 },
  { id: 1, left: 15, size: 22, delay: 3, duration: 16, rotation: 120 },
  { id: 2, left: 28, size: 16, delay: 7, duration: 13, rotation: 200 },
  { id: 3, left: 40, size: 25, delay: 1, duration: 18, rotation: 80 },
  { id: 4, left: 55, size: 14, delay: 5, duration: 15, rotation: 310 },
  { id: 5, left: 65, size: 20, delay: 9, duration: 17, rotation: 160 },
  { id: 6, left: 75, size: 17, delay: 2, duration: 14, rotation: 250 },
  { id: 7, left: 85, size: 23, delay: 6, duration: 19, rotation: 30 },
  { id: 8, left: 92, size: 15, delay: 10, duration: 16, rotation: 190 },
  { id: 9, left: 48, size: 19, delay: 4, duration: 15, rotation: 100 },
]

export default function FloatingLeaves() {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (!mounted || reducedMotion) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {STATIC_LEAVES.map((leaf) => (
        <svg
          key={leaf.id}
          className={styles.floatLeaf}
          style={{
            position: 'absolute',
            top: '-30px',
            left: `${leaf.left}%`,
            width: leaf.size,
            height: leaf.size,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            transform: `rotate(${leaf.rotation}deg)`,
            opacity: 0.7,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.5-3 11-8a2.46 2.46 0 0 0-.39-2.34A2.76 2.76 0 0 0 17 8z"
            fill="var(--moss)"
            opacity="0.6"
          />
          <path
            d="M12 12c-1 1-2 3-2.5 5"
            stroke="var(--forest-700)"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  )
}
