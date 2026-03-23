'use client'

import { useRef, type MouseEvent, type ReactNode } from 'react'
import styles from '@/styles/forest-animations.module.css'

interface WoodCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function WoodCard({
  children,
  className = '',
  hover = true,
}: WoodCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    if (!hover || !cardRef.current || !rippleRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    rippleRef.current.style.left = `${x}px`
    rippleRef.current.style.top = `${y}px`
    rippleRef.current.classList.remove(styles.ripple)
    // trigger reflow
    void rippleRef.current.offsetWidth
    rippleRef.current.classList.add(styles.ripple)
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className={`relative overflow-hidden transition-transform transition-shadow duration-300 ${
        hover ? 'hover:-translate-y-1 hover:shadow-lg' : ''
      } ${className}`}
      style={{
        borderRadius: '12px 16px 14px 18px',
        background: `
          repeating-linear-gradient(
            90deg,
            var(--cream) 0px,
            #efe9dc 1px,
            var(--cream) 2px,
            #f2ece3 4px,
            var(--cream) 5px,
            #eee7dd 8px,
            var(--cream) 10px
          ),
          repeating-linear-gradient(
            180deg,
            transparent 0px,
            rgba(139,111,71,0.04) 40px,
            transparent 80px
          )
        `,
        border: '1px solid var(--bark-300)',
        boxShadow: '0 2px 8px rgba(26,46,26,0.08)',
      }}
    >
      {hover && (
        <span
          ref={rippleRef}
          className="pointer-events-none absolute h-40 w-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(74,140,74,0.12) 0%, transparent 70%)',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
