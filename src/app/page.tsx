import ParallaxForest from '@/components/forest/ParallaxForest'
import FloatingLeaves from '@/components/forest/FloatingLeaves'
import GrowingTree from '@/components/forest/GrowingTree'
import BranchDivider from '@/components/forest/BranchDivider'
import WoodCard from '@/components/forest/WoodCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import HeroContent from '@/components/home/HeroContent'
import ScrollIndicator from '@/components/home/ScrollIndicator'

const values = [
  {
    title: 'BRave',
    subtitle: '勇気を持って挑戦し続ける',
    description:
      '未知の領域にも臆せず飛び込み、失敗を恐れず前に進む。その姿勢が新しい価値を生み出します。',
  },
  {
    title: 'EMpathy',
    subtitle: '人に寄り添い、共に歩む',
    description:
      '技術の先にいるのは、いつも「人」。一人ひとりの声に耳を傾け、本当に必要とされるものを届けます。',
  },
  {
    title: 'TeCH / CHallenge',
    subtitle: '技術と挑戦で未来を切り拓く',
    description:
      '最新の技術を武器に、社会の課題に立ち向かう。テクノロジーの力で、より良い未来を共に創ります。',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative -mt-16 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest-900">
        <ParallaxForest />
        <FloatingLeaves />

        <div className="relative z-10 mb-24 flex flex-col items-center gap-4 px-4">
          <GrowingTree />
          <HeroContent />
        </div>

        <ScrollIndicator />
      </section>

      {/* ── Vision Section ── */}
      <section className="relative bg-cream px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <BranchDivider />

          <ScrollReveal>
            <h2 className="text-center font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
              Vision
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <WoodCard className="h-full p-6 sm:p-8">
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-2xl font-bold tracking-wide text-forest-700">
                      {item.title}
                    </span>
                    <span className="text-sm font-semibold text-bark-500">
                      {item.subtitle}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-forest-900/80">
                      {item.description}
                    </p>
                  </div>
                </WoodCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-loose text-forest-900/80 sm:text-lg">
              様々な方から頂いた暖かい居場所を、
              <br className="hidden sm:inline" />
              今度は私たちが社会に届けていく。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="bg-cream px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl">
              Bremchについて
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-base leading-loose text-forest-900/80 sm:text-lg">
              合同会社Bremchは、ITエンジニアリング事業・SES事業・IT人材育成事業を通じて、
              人と技術をつなぎ、誰もが安心して成長できる「居場所」を創り出す企業です。
              社名の由来でもある「BRave（勇気）」「EMpathy（共感）」「TeCH / CHallenge（技術と挑戦）」を
              核に、一人ひとりが輝ける社会の実現を目指しています。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Button href="/company" size="lg">
                もっと詳しく
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative overflow-hidden bg-forest-900 px-4 py-20 sm:px-6 md:py-28">
        {/* Forest silhouette at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 200"
            className="block w-full opacity-20"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--forest-800)"
              d="M0,200 L0,160 Q40,100 80,140 Q120,80 160,130 Q200,60 240,120 Q280,70 320,140 Q360,90 400,150 Q440,80 480,130 Q520,60 560,120 Q600,70 640,140 Q680,90 720,150 Q760,80 800,130 Q840,60 880,120 Q920,70 960,140 Q1000,90 1040,150 Q1080,80 1120,130 Q1160,60 1200,120 Q1240,70 1280,140 Q1320,90 1360,150 Q1400,110 1440,160 L1440,200 Z"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
              お気軽にお問い合わせください
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-cream/70 sm:text-lg">
              サービスに関するご質問やご相談など、お待ちしております。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <Button href="/contact" variant="ghost" size="lg">
                お問い合わせ
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
