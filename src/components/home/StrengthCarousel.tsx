'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface StrengthItem {
  title: string
  headline: string
  points: string[]
}

const strengths: StrengthItem[] = [
  {
    title: 'Bremchの強み①',
    headline: 'インフラエンジニアを10年経験し独立した社長と仕事ができる。',
    points: [
      '将来はフリーランスや独立を視野に入れれる。',
      '未経験エンジニアを教育しプロジェクトに参画させた実績あり。',
      '経験豊富なエンジニア社長になんでも相談OK！',
    ],
  },
  {
    title: 'Bremchの強み②',
    headline: 'インフラエンジニアで長期キャリアアップを前提とした労働環境',
    points: [
      '成長できる福利厚生や教育課題の充実',
      '案件参画後の月1回の面談、2ヶ月に1回のキャリア面談',
      '労働環境（通勤時間・テレワーク）やキャリアアップできる案件の希望選択制',
      '現場参画後も常時、質問ができる体制があり。',
      '幅広くキャリアアップできる教育を提供',
    ],
  },
  {
    title: 'Bremchの強み③',
    headline: '価連動給与性でがんばった分だけもらえる給与',
    points: [
      '将来設計もしやすい',
      '自身の好きな技術領域を伸ばしながら、好きな給与をもらえる。',
      '目指したいエンジニアになりながら、プロジェクト実績とご自身の勉強の頑張りを考慮した給与設計でやりがいを育む。',
    ],
  },
]

const AUTO_PLAY_INTERVAL = 5000

export default function StrengthCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [cardWidth, setCardWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateCardWidth = useCallback(() => {
    if (containerRef.current) {
      setCardWidth(containerRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [updateCardWidth])

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === strengths.length - 1 ? 0 : prev + 1))
    }, AUTO_PLAY_INTERVAL)
  }, [])

  useEffect(() => {
    resetAutoPlay()
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
      if (transitionRef.current) clearTimeout(transitionRef.current)
    }
  }, [resetAutoPlay])

  const transitionRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    resetAutoPlay()
    if (transitionRef.current) clearTimeout(transitionRef.current)
    transitionRef.current = setTimeout(() => setIsTransitioning(false), 400)
  }

  const prev = () => {
    goTo(currentIndex === 0 ? strengths.length - 1 : currentIndex - 1)
  }

  const next = () => {
    goTo(currentIndex === strengths.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
        >
          {strengths.map((item, i) => (
            <div
              key={i}
              className="w-full shrink-0 px-2"
              style={{ minWidth: cardWidth > 0 ? `${cardWidth}px` : '100%' }}
            >
              <div className="flex h-[420px] flex-col rounded-2xl border border-forest-700/20 bg-white p-8 shadow-lg sm:p-10 md:p-12">
                {/* Title badge */}
                <div className="mb-6 inline-block self-start rounded-full bg-forest-700 px-5 py-2">
                  <span className="text-sm font-bold tracking-wider text-cream">
                    {item.title}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="mb-6 text-xl font-bold leading-relaxed text-forest-900 sm:text-2xl">
                  {item.headline}
                </h3>

                {/* Points */}
                <ul className="flex-1 space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest-600 text-xs font-bold text-cream">
                        ◎
                      </span>
                      <span className="text-sm leading-relaxed text-forest-900/80 sm:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        aria-label="前へ"
        className="absolute top-1/2 -left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-forest-700 text-cream shadow-lg transition-all hover:bg-forest-600 hover:scale-110 active:scale-95 sm:-left-6 md:h-14 md:w-14"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="次へ"
        className="absolute top-1/2 -right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-forest-700 text-cream shadow-lg transition-all hover:bg-forest-600 hover:scale-110 active:scale-95 sm:-right-6 md:h-14 md:w-14"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {strengths.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`強み${i + 1}を表示`}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'w-8 bg-forest-700'
                : 'w-3 bg-forest-700/30 hover:bg-forest-700/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
