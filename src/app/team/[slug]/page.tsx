import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { members } from '@/data/members'
import { withBasePath } from '@/lib/basePath'
import ScrollReveal from '@/components/ui/ScrollReveal'
import TeamCarousel from '@/components/home/TeamCarousel'

export function generateStaticParams() {
  return members
    .filter((m) => m.interview.length > 0)
    .map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const member = members.find((m) => m.slug === slug)
  if (!member) return { title: '社員紹介 | 合同会社Bremch' }
  return {
    title: `${member.initials}さんインタビュー | 合同会社Bremch`,
    description: `合同会社Bremch ${member.initials}さんのインタビューページです。`,
  }
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = members.find((m) => m.slug === slug)

  if (!member || member.interview.length === 0) {
    notFound()
  }

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative -mt-16 flex h-72 items-end justify-center overflow-hidden bg-forest-800 pb-0 sm:h-80">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800" />
        <div className="relative z-10 flex w-full flex-col items-center pb-8">
          {/* Photo */}
          <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-forest-600 to-forest-800 shadow-lg">
            {member.photo ? (
              <Image
                src={withBasePath(member.photo)}
                alt={member.initials}
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            ) : (
              <svg
                className="h-12 w-12 text-cream/60"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            )}
          </div>
          <h1 className="font-display text-3xl font-bold text-cream sm:text-4xl">
            {member.initials}さん
          </h1>
          {member.background && (
            <p className="mt-1 text-sm text-cream/60">（{member.background}）</p>
          )}
          <p className="mt-2 text-sm text-forest-500">
            {member.department}
          </p>
        </div>
      </section>

      {/* ── Video Section (if available) ── */}
      {member.videoUrl && (
        <section className="bg-cream px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div className="relative aspect-video">
                  <iframe
                    src={member.videoUrl}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-presentation"
                    title={`${member.initials}さんインタビュー動画`}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Interview Section with scattered photos ── */}
      <section className="bg-cream px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              インタビュー内容
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {member.interview.map((qa, i) => {
              const gallery = member.gallery ?? []
              // Map: Q3(index 2) -> photo 0, Q7(index 6) -> photo 1
              const photoMap: Record<number, number> = { 2: 0, 6: 1 }
              const photo = i in photoMap && photoMap[i] < gallery.length
                ? gallery[photoMap[i]]
                : null
              const photoRight = i === 6

              return (
                <ScrollReveal key={i} delay={0.05}>
                  <div className="overflow-hidden rounded-2xl border border-forest-700/10 bg-white shadow-sm">
                    {photo ? (
                      <div className={`flex flex-col ${photoRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        {/* Photo side */}
                        <div className="md:w-2/5">
                          <Image
                            src={withBasePath(photo.src)}
                            alt={photo.alt}
                            width={600}
                            height={450}
                            className="h-48 w-full object-cover md:h-full"
                          />
                        </div>
                        {/* Text side */}
                        <div className="flex-1 p-6 sm:p-8">
                          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-700 text-xs font-bold text-cream">
                              Q{i + 1}
                            </span>
                            {qa.question}
                          </h3>
                          <div className="mt-4 border-l-4 border-forest-500/30 pl-4">
                            <p className="whitespace-pre-line text-sm leading-loose text-forest-900/75 sm:text-base">
                              {qa.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 sm:p-8">
                        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-forest-800">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-700 text-xs font-bold text-cream">
                            Q{i + 1}
                          </span>
                          {qa.question}
                        </h3>
                        <div className="mt-4 border-l-4 border-forest-500/30 pl-4">
                          <p className="whitespace-pre-line text-sm leading-loose text-forest-900/75 sm:text-base">
                            {qa.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── Other Members Carousel ── */}
      <section className="bg-white px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-forest-600 uppercase">
                Our Team
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl">
                社員紹介
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TeamCarousel />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
