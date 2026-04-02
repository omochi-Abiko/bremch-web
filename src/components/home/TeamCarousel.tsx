'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { members } from '@/data/members'

const VISIBLE = 3

export default function TeamCarousel() {
  const [offset, setOffset] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const maxOffset = Math.max(0, members.length - VISIBLE)

  const updateCardWidth = useCallback(() => {
    if (containerRef.current) {
      const gap = 16 // gap-4 = 16px
      setCardWidth((containerRef.current.offsetWidth - gap * (VISIBLE - 1)) / VISIBLE)
    }
  }, [])

  useEffect(() => {
    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [updateCardWidth])

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  const translateX = offset * (cardWidth + 16)

  return (
    <div className="relative" ref={containerRef}>
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {members.map((member) => {
            const hasInterview = member.interview.length > 0
            const cardClass = `group relative flex shrink-0 flex-col justify-end overflow-hidden rounded-xl shadow-md ${
              hasInterview ? 'cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''
            }`
            const cardStyle = {
              width: cardWidth > 0 ? `${cardWidth}px` : `calc((100% - 32px) / 3)`,
              height: 280,
            }

            const cardContent = (
              <>
                {/* Background photo or gradient */}
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.initials}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-forest-700 to-forest-900" />
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-5">
                  <h3 className="text-xl font-bold text-white">{member.initials}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                      {member.mainSkill}
                    </span>
                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                      {member.hobby}
                    </span>
                  </div>
                  {hasInterview && (
                    <p className="mt-2 text-[10px] text-white/60">
                      クリックしてインタビューを見る →
                    </p>
                  )}
                </div>
              </>
            )

            return hasInterview ? (
              <Link key={member.slug} href={`/team/${member.slug}`} className={cardClass} style={cardStyle}>
                {cardContent}
              </Link>
            ) : (
              <div key={member.slug} className={cardClass} style={cardStyle}>
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>

      {/* Arrows - only show when there are more than VISIBLE members */}
      {members.length > VISIBLE && (
        <>
          <button
            onClick={prev}
            disabled={offset === 0}
            aria-label="前へ"
            className={`absolute top-1/2 -left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-forest-700 text-cream shadow-lg transition-all hover:bg-forest-600 hover:scale-110 active:scale-95 sm:-left-5 ${
              offset === 0 ? 'opacity-30 pointer-events-none' : ''
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={offset === maxOffset}
            aria-label="次へ"
            className={`absolute top-1/2 -right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-forest-700 text-cream shadow-lg transition-all hover:bg-forest-600 hover:scale-110 active:scale-95 sm:-right-5 ${
              offset === maxOffset ? 'opacity-30 pointer-events-none' : ''
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
