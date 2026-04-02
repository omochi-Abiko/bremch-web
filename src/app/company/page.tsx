import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '会社概要 | 合同会社Bremch',
  description:
    '合同会社Bremchの会社概要ページです。会社情報やミッションについてご紹介します。',
}

const companyData = [
  { label: '会社名', value: '合同会社Bremch / Bremch LLC.' },
  { label: '会社名（読み方）', value: 'ゴウドウカイシャブランチ' },
  { label: '代表者', value: '代表社員 青木 和博' },
  { label: '創業（設立）', value: '2023年8月30日' },
  { label: '従業員', value: '3名（※業務委託を含む）' },
  { label: '資本金', value: '10,000円' },
  {
    label: '所在地',
    value: '〒336-0031 埼玉県さいたま市南区鹿手袋7-12-11 寿コーポ301号室',
    isAddress: true,
  },
  { label: '営業時間', value: '10:00 – 19:00' },
  { label: '代表電話', value: '048-711-6593', isPhone: true },
  { label: 'メール', value: 'contact@bremch.co.jp', isEmail: true },
  {
    label: '事業内容',
    value: '情報システムの開発、計画、作成、運用・保守の請負業',
  },
  {
    label: '主要取引銀行',
    value: '住信SBI銀行 / GMOあおぞら銀行 / 埼玉縣信用金庫 / 三菱UFJ銀行',
  },
  {
    label: 'コーポレートHP',
    value: 'https://www.bremch.co.jp/',
    isLink: true,
  },
]

export default function CompanyPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative -mt-16 flex h-64 items-end justify-center overflow-hidden bg-forest-800 pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900 to-forest-800" />
        <div className="relative z-10 w-full pb-8">
          <span className="mb-2 block text-center text-sm font-medium tracking-[0.2em] text-forest-500 uppercase">
            Company
          </span>
          <h1 className="text-center font-display text-4xl font-bold tracking-wide text-cream sm:text-5xl">
            会社概要
          </h1>
        </div>
      </section>

      {/* ── Company Info ── */}
      <section className="bg-cream px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              基本情報
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-forest-700/10 bg-white shadow-sm">
              <dl>
                {companyData.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-start sm:gap-0 ${
                      i % 2 === 1 ? 'bg-forest-700/[0.03]' : ''
                    } ${i < companyData.length - 1 ? 'border-b border-forest-700/10' : ''}`}
                  >
                    <dt className="min-w-[180px] text-sm font-bold text-forest-800 sm:min-w-[200px]">
                      {item.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-forest-900/80">
                      {'isEmail' in item && item.isEmail ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-forest-700 underline decoration-forest-700/30 transition-colors hover:text-forest-600"
                        >
                          {item.value}
                        </a>
                      ) : 'isPhone' in item && item.isPhone ? (
                        <a
                          href={`tel:${item.value.replace(/-/g, '')}`}
                          className="text-forest-700 underline decoration-forest-700/30 transition-colors hover:text-forest-600"
                        >
                          {item.value}
                        </a>
                      ) : 'isLink' in item && item.isLink ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-forest-700 underline decoration-forest-700/30 transition-colors hover:text-forest-600"
                        >
                          {item.value}
                        </a>
                      ) : 'isAddress' in item && item.isAddress ? (
                        <div>
                          <p>{item.value}</p>
                          <div className="mt-4 overflow-hidden rounded-xl">
                            <iframe
                              src="https://maps.google.com/maps?q=35.8466072,139.63465&t=m&z=17&output=embed&hl=ja"
                              width="100%"
                              height="250"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="所在地"
                            />
                          </div>
                        </div>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="relative overflow-hidden bg-forest-900 px-4 py-20 sm:px-6 md:py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="text-sm font-medium tracking-[0.2em] text-forest-500 uppercase">
              Mission
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-cream sm:text-3xl">
              私たちの使命
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
      </section>
    </>
  )
}
