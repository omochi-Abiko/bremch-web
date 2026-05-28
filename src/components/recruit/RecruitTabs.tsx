'use client'

import { useState } from 'react'
import { recruitListings, type RecruitListing } from '@/data/recruit'

export default function RecruitTabs() {
  const [active, setActive] = useState<RecruitListing['key']>('novice')
  const current = recruitListings.find((l) => l.key === active) ?? recruitListings[0]

  return (
    <div>
      {/* Tabs */}
      <div role="tablist" aria-label="採用情報" className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {recruitListings.map((listing) => {
          const isActive = listing.key === active
          return (
            <button
              key={listing.key}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`recruit-panel-${listing.key}`}
              id={`recruit-tab-${listing.key}`}
              onClick={() => setActive(listing.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:text-base ${
                isActive
                  ? 'bg-forest-700 text-cream shadow-md'
                  : 'border border-forest-700/20 bg-white text-forest-800 hover:border-forest-700/40 hover:bg-forest-700/5'
              }`}
            >
              {listing.title}
            </button>
          )
        })}
      </div>

      {/* Panel */}
      <div
        key={current.key}
        id={`recruit-panel-${current.key}`}
        role="tabpanel"
        aria-labelledby={`recruit-tab-${current.key}`}
        className="mt-10"
      >
        <div className="mb-8 text-center">
          <h3 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
            {current.title}
          </h3>
          <p className="mt-2 text-sm text-forest-900/70 sm:text-base">{current.subtitle}</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-forest-700/10 bg-white shadow-sm">
          <dl>
            {current.items.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-start sm:gap-6 ${
                  i % 2 === 1 ? 'bg-forest-700/[0.03]' : ''
                } ${i < current.items.length - 1 ? 'border-b border-forest-700/10' : ''}`}
              >
                <dt className="min-w-[140px] text-sm font-bold text-forest-800 sm:min-w-[160px]">
                  {item.label}
                </dt>
                <dd className="whitespace-pre-line text-sm leading-relaxed text-forest-900/80">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
