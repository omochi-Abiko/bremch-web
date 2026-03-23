import type { Metadata } from 'next';
import WoodCard from '@/components/forest/WoodCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '社員紹介 | 合同会社Bremch',
  description: '合同会社Bremchのチームメンバーをご紹介します。共に歩む仲間たちをご覧ください。',
};

const members = [
  {
    name: '山田 太郎',
    role: 'エンジニアリングリード',
    bio: 'フルスタック開発とチームマネジメントを担当。10年以上の開発経験を活かし、技術選定からプロジェクト管理まで幅広くチームを支えています。',
  },
  {
    name: '佐藤 花子',
    role: 'フロントエンドエンジニア',
    bio: 'UIデザインからReact実装まで手掛ける。ユーザー目線を大切にし、使いやすく美しいインターフェースの実現に情熱を注いでいます。',
  },
  {
    name: '鈴木 一郎',
    role: 'バックエンドエンジニア',
    bio: 'インフラ設計とAPI開発のスペシャリスト。堅牢でスケーラブルなシステム構築を通じて、サービスの安定稼働を支えています。',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="flex h-48 flex-col items-center justify-center bg-forest-800 md:h-64">
        <h1 className="font-display text-3xl font-bold text-cream md:text-4xl">
          社員紹介
        </h1>
        <p className="mt-2 text-cream/70">共に歩む仲間たち</p>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <ScrollReveal key={member.name} direction="up" delay={index * 0.15}>
              <WoodCard className="relative p-8">
                {/* Leaf decoration */}
                <svg
                  className="absolute right-3 top-3 h-8 w-8 text-forest-500/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.5-3 11-8a2.46 2.46 0 0 0-.39-2.34A2.76 2.76 0 0 0 17 8z" />
                </svg>

                {/* Photo placeholder */}
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-forest-700 to-forest-500">
                  <svg
                    className="h-14 w-14 text-cream/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>

                {/* Member info */}
                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-bark-700">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-moss">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-forest-900/80">
                    {member.bio}
                  </p>
                </div>
              </WoodCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-forest-900 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="font-display text-2xl font-bold text-cream md:text-3xl">
              一緒に働きませんか？
            </h2>
            <p className="mt-4 leading-relaxed text-cream/70">
              Bremchでは、共に成長し、挑戦し続ける仲間を募集しています。
              技術だけでなく、人に寄り添う気持ちを大切にできる方、
              ぜひ一度お話しませんか。
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="ghost" size="lg">
                お問い合わせはこちら
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
