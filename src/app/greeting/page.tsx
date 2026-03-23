import type { Metadata } from 'next';
import WoodCard from '@/components/forest/WoodCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: '代表挨拶 | 合同会社Bremch',
  description: '合同会社Bremch代表からのご挨拶。ITを通して人に寄り添える「居場所」を提供するという想いをお伝えします。',
};

export default function GreetingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="flex h-48 items-center justify-center bg-forest-800 md:h-64">
        <h1 className="font-display text-3xl font-bold text-cream md:text-4xl">
          代表挨拶
        </h1>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Left: CEO Photo Placeholder */}
          <ScrollReveal direction="left" className="flex-shrink-0 lg:w-1/3">
            <div className="mx-auto flex aspect-square w-64 items-center justify-center bg-forest-700 lg:w-full"
              style={{
                borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
              }}
            >
              <svg
                className="h-32 w-32 text-forest-500/60"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
          </ScrollReveal>

          {/* Right: Greeting Text */}
          <ScrollReveal direction="right" delay={0.2} className="lg:w-2/3">
            <WoodCard className="p-8 md:p-10">
              <h2 className="mb-6 font-display text-2xl font-bold text-bark-700">
                ご挨拶
              </h2>

              <div className="space-y-5 leading-relaxed text-forest-900">
                <p>
                  このたびは、合同会社Bremchのウェブサイトをご覧いただき、誠にありがとうございます。
                </p>

                <p>
                  私たちは「ITを通して人に寄り添える『居場所』を提供する」という理念のもと、
                  合同会社Bremchを設立いたしました。テクノロジーが急速に進化する現代において、
                  技術そのものの力だけでなく、その先にいる「人」の存在を常に大切にしたいと考えています。
                </p>

                <p>
                  社名の「Bremch」には、私たちの想いが込められています。
                  <strong className="text-forest-700">BR</strong>ave（勇気）、
                  <strong className="text-forest-700">EM</strong>pathy（共感）、
                  Te<strong className="text-forest-700">CH</strong>（技術）&amp;
                  <strong className="text-forest-700">CH</strong>allenge（挑戦）
                  ――これらの頭文字を組み合わせた造語です。
                  勇気を持って挑戦し、共感の心を忘れず、技術の力で社会に貢献する。
                  それが私たちBremchの原点です。
                </p>

                <p>
                  一人ひとりが安心して力を発揮できる「居場所」をつくること。
                  それは、お客様にとっても、共に働く仲間にとっても同じです。
                  ITの力を活かしながら、誰もが自分らしくいられる場を提供し続けることが、
                  私たちの使命だと信じています。
                </p>

                <p>
                  まだまだ若い会社ではございますが、一つひとつのプロジェクトに真摯に向き合い、
                  お客様と共に成長していく所存です。
                  どうぞよろしくお願いいたします。
                </p>
              </div>

              <div className="mt-10 text-right">
                <p className="text-sm text-bark-500">合同会社Bremch 代表社員</p>
                <p className="mt-1 font-display text-xl font-bold text-bark-700">
                  ○○ ○○
                </p>
              </div>
            </WoodCard>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
