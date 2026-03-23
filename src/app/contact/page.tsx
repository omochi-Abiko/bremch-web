import type { Metadata } from 'next';
import WoodCard from '@/components/forest/WoodCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ | 合同会社Bremch',
  description: '合同会社Bremchへのお問い合わせはこちらから。お気軽にご連絡ください。',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="flex h-48 items-center justify-center bg-forest-800 md:h-64">
        <h1 className="font-display text-3xl font-bold text-cream md:text-4xl">
          お問い合わせ
        </h1>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Left: Contact Form */}
          <ScrollReveal direction="left" className="lg:w-2/3">
            <WoodCard className="p-8 md:p-10" hover={false}>
              <h2 className="mb-6 font-display text-xl font-bold text-bark-700">
                お問い合わせフォーム
              </h2>
              <ContactForm />
            </WoodCard>
          </ScrollReveal>

          {/* Right: Company Info */}
          <ScrollReveal direction="right" delay={0.2} className="lg:w-1/3">
            <WoodCard className="p-8" hover={false}>
              <h2 className="mb-6 font-display text-xl font-bold text-bark-700">
                連絡先情報
              </h2>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-bark-500">会社名</dt>
                  <dd className="mt-1 text-forest-900">合同会社Bremch</dd>
                </div>
                <div>
                  <dt className="font-medium text-bark-500">Email</dt>
                  <dd className="mt-1 text-forest-900">
                    <a
                      href="mailto:info@bremch.co.jp"
                      className="underline decoration-forest-500/30 underline-offset-2 transition-colors hover:text-forest-700"
                    >
                      info@bremch.co.jp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-bark-500">TEL</dt>
                  <dd className="mt-1 text-forest-900">03-XXXX-XXXX</dd>
                </div>
                <div>
                  <dt className="font-medium text-bark-500">所在地</dt>
                  <dd className="mt-1 text-forest-900">東京都（仮）</dd>
                </div>
              </dl>

              {/* Decorative branch SVG */}
              <div className="mt-8" aria-hidden="true">
                <svg
                  viewBox="0 0 200 60"
                  className="h-[40px] w-full text-bark-300"
                  fill="none"
                >
                  <path
                    d="M10,30 C40,25 80,35 120,28 C140,24 170,32 190,30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M60,30 C55,22 50,16 46,12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M130,28 C135,20 140,15 144,11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100,30 C95,38 90,43 86,47"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <ellipse cx="44" cy="10" rx="5" ry="3" fill="var(--forest-600)" opacity="0.5" transform="rotate(-30 44 10)" />
                  <ellipse cx="146" cy="9" rx="5" ry="3" fill="var(--forest-600)" opacity="0.5" transform="rotate(30 146 9)" />
                  <ellipse cx="84" cy="49" rx="5" ry="3" fill="var(--forest-600)" opacity="0.5" transform="rotate(-30 84 49)" />
                </svg>
              </div>
            </WoodCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
