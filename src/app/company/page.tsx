import type { Metadata } from 'next'
import FloatingLeaves from '@/components/forest/FloatingLeaves'
import BranchDivider from '@/components/forest/BranchDivider'
import WoodCard from '@/components/forest/WoodCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '会社概要 | 合同会社Bremch',
  description:
    '合同会社Bremchの会社概要ページです。会社情報やミッションについてご紹介します。',
}

const companyData = [
  { label: '会社名', value: '合同会社Bremch' },
  { label: '設立', value: '2024年' },
  { label: '代表', value: '（仮）' },
  { label: '所在地', value: '東京都（仮）' },
  {
    label: '事業内容',
    value: 'ITエンジニアリング事業、SES事業、IT人材育成事業',
  },
  { label: 'TEL', value: '03-XXXX-XXXX' },
  { label: 'Email', value: 'info@bremch.co.jp' },
]

export default function CompanyPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative -mt-16 flex h-64 items-end justify-center overflow-hidden bg-forest-800 pb-0">
        <FloatingLeaves />
        <div className="relative z-10 w-full pb-4">
          <h1 className="text-center font-display text-4xl font-bold tracking-wide text-cream sm:text-5xl">
            会社概要
          </h1>
          <div className="mx-auto max-w-xl">
            <BranchDivider />
          </div>
        </div>
      </section>

      {/* ── Company Info ── */}
      <section className="bg-cream px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              基本情報
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <WoodCard className="overflow-hidden p-0" hover={false}>
              <dl>
                {companyData.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-0 ${
                      i % 2 === 1 ? 'bg-bark-300/20' : ''
                    } ${i < companyData.length - 1 ? 'border-b border-bark-300/30' : ''}`}
                  >
                    <dt className="min-w-[140px] text-sm font-bold text-forest-800 sm:min-w-[160px]">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-forest-900/80">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </WoodCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="relative overflow-hidden bg-forest-900 px-4 py-20 sm:px-6 md:py-28">
        {/* Forest accent background */}
        <div className="pointer-events-none absolute inset-x-0 top-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            className="block w-full rotate-180 opacity-15"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--forest-700)"
              d="M0,120 L0,80 Q60,20 120,60 Q180,10 240,50 Q300,0 360,40 Q420,10 480,50 Q540,0 600,40 Q660,10 720,60 Q780,20 840,50 Q900,0 960,40 Q1020,10 1080,50 Q1140,0 1200,40 Q1260,10 1320,60 Q1380,30 1440,80 L1440,120 Z"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              Mission
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <blockquote className="mt-10">
              <p className="font-display text-xl leading-loose text-cream/90 sm:text-2xl md:text-3xl md:leading-loose">
                &ldquo;ITを通して人に寄り添える
                <br />
                「居場所」を提供する&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-10 text-base leading-loose text-cream/70 sm:text-lg">
              私たちは、技術力だけでなく「人への想い」を大切にしています。
              エンジニア一人ひとりが安心して挑戦し、成長できる環境を整え、
              その力をクライアントや社会へ届けることで、
              誰もが自分らしくいられる居場所を創り続けます。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <div className="mt-12">
              <Button href="/contact" variant="ghost" size="lg">
                お問い合わせはこちら
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Forest silhouette at bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 100"
            className="block w-full opacity-20"
            preserveAspectRatio="none"
          >
            <path
              fill="var(--forest-800)"
              d="M0,100 L0,70 Q80,30 160,60 Q240,20 320,55 Q400,15 480,50 Q560,25 640,60 Q720,30 800,55 Q880,20 960,50 Q1040,25 1120,60 Q1200,30 1280,55 Q1360,35 1440,70 L1440,100 Z"
            />
          </svg>
        </div>
      </section>
    </>
  )
}
