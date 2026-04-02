'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import XEmbed from './XEmbed'
import InstagramEmbed from './InstagramEmbed'

const X_USERNAME = 'Bremch20231101'
const IG_USERNAME = 'bremch20231101'
const INSTAGRAM_POSTS: string[] = []

export default function SocialFeedSection() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <span className="text-sm font-medium tracking-[0.2em] text-forest-600 uppercase">
              Social Media
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
              SNS
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* ── X (Twitter) ── */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-forest-700/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <svg className="h-6 w-6 text-forest-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div>
                  <h3 className="font-display text-lg font-bold text-forest-900">
                    X（Twitter）
                  </h3>
                  <span className="text-xs text-forest-900/50">@{X_USERNAME}</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl">
                <XEmbed username={X_USERNAME} height={480} />
              </div>

              <div className="mt-4 text-center">
                <a
                  href={`https://x.com/${X_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-forest-700 px-6 py-3 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-lg"
                >
                  Xをフォローする
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Instagram ── */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-forest-700/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <svg className="h-6 w-6 text-forest-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <div>
                  <h3 className="font-display text-lg font-bold text-forest-900">
                    Instagram
                  </h3>
                  <span className="text-xs text-forest-900/50">@{IG_USERNAME}</span>
                </div>
              </div>

              <div>
                <InstagramEmbed
                  username={IG_USERNAME}
                  postUrls={INSTAGRAM_POSTS.length > 0 ? INSTAGRAM_POSTS : undefined}
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  href={`https://www.instagram.com/${IG_USERNAME}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-forest-700 px-6 py-3 text-sm font-semibold text-cream transition-all hover:-translate-y-0.5 hover:bg-forest-600 hover:shadow-lg"
                >
                  Instagramをフォローする
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
