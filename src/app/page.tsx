import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import HeroBackground from '@/components/home/HeroBackground'
import StrengthCarousel from '@/components/home/StrengthCarousel'
import AchievementCard from '@/components/home/AchievementCard'
import TeamCarousel from '@/components/home/TeamCarousel'
import PhotoMarquee from '@/components/home/PhotoMarquee'
import SocialFeedSection from '@/components/social/SocialFeedSection'
import { achievements } from '@/data/achievements'

/* ────────────────────────────────────────────
 * Bremchの由来 — 3つの価値観カード
 * ──────────────────────────────────────────── */
const values = [
  { letters: 'BR', word: 'BRave', description: '目標とすることや人生の苦難への<strong>勇気</strong>' },
  { letters: 'EM', word: 'EMpathy', description: '苦楽、つまり辛いときに励まし合えること、<br />挑戦できる勇気がもらえる<strong>居場所</strong>' },
  { letters: 'CH', word: 'TeCHnology・CHallenge', description: '<strong>新しい技術</strong>の習得や、新しいことへの<strong>挑戦</strong>' },
] as const

const VALUE_CARD_CLASS =
  'group relative flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-forest-700/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1'

/* ────────────────────────────────────────────
 * トップページ
 * ──────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── ヒーロー ── */}
      <section className="relative -mt-10 flex min-h-screen overflow-hidden bg-forest-900">
        <HeroBackground />

        <div className="relative z-10 flex w-full items-center px-8 pt-32 pb-20 sm:px-12 md:px-20 lg:px-28">
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            ITを通して
            <br />
            人に寄り添える
            <br />
            <span className="text-forest-500">『居場所』</span>を提供する
          </h1>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest text-cream/40">SCROLL</span>
            <div className="h-8 w-px animate-pulse bg-cream/40" />
          </div>
        </div>
      </section>

      {/* ── Bremchの由来 ── */}
      <section className="bg-cream px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-forest-600 uppercase">Our Values</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
                Bremch(ブランチ)の会社名は、
                <br className="hidden sm:inline" />
                願いを込めた造語
              </h2>
            </div>
          </ScrollReveal>

          {/* 3つの価値観カード */}
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v, i) => (
              <ScrollReveal key={v.word} delay={i * 0.15}>
                <div className={VALUE_CARD_CLASS}>
                  <div className="mb-3 font-display text-5xl font-bold text-forest-600/20">{v.letters}</div>
                  <h3 className="font-display text-xl font-bold text-forest-900">{v.word}</h3>
                  <div className="mx-auto my-4 h-px w-12 bg-forest-600/30" />
                  <p
                    className="text-sm leading-relaxed text-forest-900/70 [&>strong]:text-forest-800"
                    dangerouslySetInnerHTML={{ __html: v.description }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Branch = Bremch 解説 */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-forest-700/10 bg-white p-8 shadow-sm sm:p-12">
              <h3 className="text-center font-display text-xl font-bold text-forest-900 sm:text-2xl">
                <span className="text-forest-700">Branch</span>（木の枝）＝{' '}
                <span className="text-forest-700">Bremch</span>（ブランチ）
              </h3>
              <p className="mt-2 text-center text-sm text-forest-900/60">と言葉を掛けています。</p>

              <div className="mx-auto my-8 h-px w-16 bg-forest-600/20" />

              <div className="space-y-6 text-sm leading-loose text-forest-900/75 sm:text-base [&>p>strong]:text-forest-800">
                <p>木の枝から、やがて大木、根元にたどりつきます。</p>
                <p>
                  丈夫な大木は、<strong>根元</strong>も丈夫です。また、大木は、<strong>根元</strong>からはじまり大木の土台となります。
                  根元を羅針盤に例え、エンジニアとして、
                  &ldquo;<strong>大切な姿勢</strong>は何か&rdquo;と考えたときにエンジニアのキャリアを積む上で、
                  「<strong>勇気・寄り添う・技術・挑戦</strong>」が羅針盤になり得ると感じました。
                </p>
                <p>また、木の枝は、&ldquo;<strong>様々な出会いから頂いた人生を充実させる選択</strong>&rdquo;と捉えています。</p>
                <p>
                  ご自身が目標に向かって、勇気を振り絞るとき、また、落ち込んで前に進めないときなど、
                  &ldquo;<strong>人の励まし</strong>&rdquo;があって、前に進める場合があると思います。
                  その積み重ね（木の枝）が、ご自身の人生を豊かにさせるものと信じています。
                </p>
                <p className="text-center font-medium text-forest-800">
                  そんな想いを込めて、Bremch（ブランチ）を設立いたしました。
                </p>
              </div>

              <div className="mx-auto my-8 h-px w-16 bg-forest-600/20" />

              <p className="text-sm leading-loose text-forest-900/75 sm:text-base [&>strong]:text-forest-800">
                弊社では、エンジニアの技術職を通し、「<strong>勇気・寄り添う・技術・挑戦</strong>」の「<strong>姿勢</strong>」を以って、
                「<strong>人生を豊かにする挑戦</strong>」を「<strong>暖かい居場所を提供</strong>」し、
                より多くの皆様が目標を達成できるように、サポートいたします。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 写真マーキー ── */}
      <section className="bg-cream">
        <PhotoMarquee />
      </section>

      {/* ── Bremchの強み ── */}
      <section className="bg-gradient-to-b from-forest-900 to-forest-800 px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader tag="Our Strengths" title="Bremchの強み" light />
          <ScrollReveal delay={0.15}>
            <StrengthCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 実績 ── */}
      <section className="bg-cream px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader tag="Achievements" title="実績" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <AchievementCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 社員紹介 ── */}
      <section id="team" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader tag="Our Team" title="社員紹介" />
          <ScrollReveal delay={0.15}>
            <TeamCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SNS ── */}
      <SocialFeedSection />

      {/* ── お問い合わせ CTA ── */}
      <section className="relative overflow-hidden bg-forest-900 px-4 py-12 sm:px-6 md:py-16">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream" />
          <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream" />
          <div className="absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
              お気軽にお問い合わせください
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-base text-cream/60 sm:text-lg">
              サービスに関するご質問やご相談など、お待ちしております。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" size="lg">お問い合わせ</Button>
              <Button href="/greeting" variant="ghost" size="lg">代表挨拶を読む</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
