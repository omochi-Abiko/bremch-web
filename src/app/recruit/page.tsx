import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import RecruitTabs from '@/components/recruit/RecruitTabs'

export const metadata: Metadata = {
  title: '採用情報 | 合同会社Bremch',
  description:
    '合同会社Bremchの採用情報ページです。インフラエンジニア（未経験者・経験者）を募集しています。',
}

export default function RecruitPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative -mt-16 flex h-64 items-end justify-center overflow-hidden bg-forest-800 pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800" />
        <div className="relative z-10 w-full pb-8">
          <span className="mb-2 block text-center text-sm font-medium tracking-[0.2em] text-forest-500 uppercase">
            Recruit
          </span>
          <h1 className="text-center font-display text-4xl font-bold tracking-wide text-cream sm:text-5xl">
            採用情報
          </h1>
        </div>
      </section>

      {/* ── Recruit Tabs ── */}
      <section className="bg-cream px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
                募集職種
              </h2>
              <p className="mt-3 text-sm text-forest-900/70 sm:text-base">
                Bremchでは、共に成長できる仲間を募集しています。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <RecruitTabs />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-forest-900 px-4 py-20 sm:px-6 md:py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              ご応募・ご質問はお気軽に
            </h2>
            <p className="mt-4 text-base leading-loose text-cream/70 sm:text-lg">
              選考に関するご質問や、まずは話を聞いてみたいというご相談も歓迎です。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10">
              <Button href="/contact" variant="ghost" size="lg">
                お問い合わせはこちら
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
