import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import StrengthCarousel from '@/components/home/StrengthCarousel'
import TeamCarousel from '@/components/home/TeamCarousel'
import HeroBackground from '@/components/home/HeroBackground'
import PhotoMarquee from '@/components/home/PhotoMarquee'
import SocialFeedSection from '@/components/social/SocialFeedSection'

const achievements = [
  {
    title: '某決済サービス会社AWS基盤構築業務への参画',
    role: 'メンバー',
    processes: '要件定義・基本設計・詳細設計・構築・単体テスト・結合テスト',
    tech: {
      cloud: 'AWS',
      hypervisor: 'VMWare',
      os: 'CentOS、RockyLinux',
      middleware: 'Tomcat、Apache',
      database: 'SQLServer',
      network: '',
    },
    tasks: [
      'AWSクラウドサービスの選定、調査、ヒアリング',
      'セキュリティ要件、現行環境、アプリ要件の調査、ヒアリング',
      'AWSクラウドサービスの設計、および実装',
      'OSと各種ミドルウェアの設計、および実装',
    ],
  },
  {
    title: '某独立行政法人サーバー運用支援業務への参画',
    role: 'メンバー',
    processes: '構築・運用・保守',
    tech: {
      cloud: '',
      hypervisor: 'VMWare',
      os: 'RedhatEnterpriseLinux、WindowsServer',
      middleware: 'Tomcat、NetBackup、DeepSecurity、CLUSTERPRO',
      database: 'MySQLServer',
      network: '',
    },
    tasks: [
      '各種ドキュメント(詳細設計書・作業手順書・運用手順書)の作成',
      'OS、および各種ミドルウェアの構築',
      'OS、および各種ミドルウェアの運用・保守対応',
    ],
  },
  {
    title: '某通信事業会社事業基盤開発支援業務への参画',
    role: 'メンバー',
    processes: '詳細設計・構築・単体テスト・結合テスト',
    tech: {
      cloud: '',
      hypervisor: 'VMWare',
      os: 'RedhatEnterpriseLinux',
      middleware: 'Tomcat、Apache',
      database: '',
      network: 'Cisco',
    },
    tasks: [
      'OSと各種ミドルウェアの構築手順書の作成、および実装',
      'ネットワーク構成図の作成',
      'DNS設定変更対応',
    ],
  },
  {
    title: 'オンプレミス学習課題によるエンジニア輩出',
    role: 'エンジニア未経験（対象者）',
    processes: '詳細設計・構築・単体テスト・結合テスト',
    tech: {
      cloud: '',
      hypervisor: 'VMWare',
      os: 'CentOS、VyOS',
      middleware: 'Bind、Vsftpd、Tomcat、Apache、Postfix、Dovecot …etc',
      database: 'MySQL、PostgreSQL',
      network: '',
    },
    tasks: [
      '基礎学習（システム開発工程と役割、技術単語の説明）',
      '各種ミドルウェアの構築',
      '各種ドキュメントの作成（詳細設計書、運用手順書、作業手順書）',
    ],
  },
]

const techLabels: Record<string, string> = {
  cloud: 'クラウド',
  hypervisor: 'ハイパーバイザ',
  os: 'OS',
  middleware: 'ミドルウェア',
  database: 'データベース',
  network: 'ネットワーク',
}

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative -mt-10 flex min-h-screen overflow-hidden bg-forest-900">
        <HeroBackground />
        <div className="relative z-10 flex w-full items-center px-8 pt-32 pb-20 sm:px-12 md:px-20 lg:px-28">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
              ITを通して
              <br />
              人に寄り添える
              <br />
              <span className="text-forest-500">『居場所』</span>を提供する
            </h1>
            <div className="mt-8 h-1 w-16 bg-forest-500" />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest text-cream/40">SCROLL</span>
            <div className="h-8 w-px animate-pulse bg-cream/40" />
          </div>
        </div>
      </section>

      {/* ── Origin Section ── */}
      <section className="bg-cream px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-forest-600 uppercase">
                Our Values
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
                Bremch(ブランチ)の会社名は、
                <br className="hidden sm:inline" />
                願いを込めた造語
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <ScrollReveal delay={0}>
              <div className="group relative flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-forest-700/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-3 font-display text-5xl font-bold text-forest-600/20">BR</div>
                <h3 className="font-display text-xl font-bold text-forest-900">BRave</h3>
                <div className="mx-auto my-4 h-px w-12 bg-forest-600/30" />
                <p className="text-sm leading-relaxed text-forest-900/70">
                  目標とすることや人生の苦難への<strong className="text-forest-800">勇気</strong>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="group relative flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-forest-700/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-3 font-display text-5xl font-bold text-forest-600/20">EM</div>
                <h3 className="font-display text-xl font-bold text-forest-900">EMpathy</h3>
                <div className="mx-auto my-4 h-px w-12 bg-forest-600/30" />
                <p className="text-sm leading-relaxed text-forest-900/70">
                  苦楽、つまり辛いときに励まし合えること、
                  <br />
                  挑戦できる勇気がもらえる<strong className="text-forest-800">居場所</strong>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="group relative flex h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-forest-700/10 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-3 font-display text-5xl font-bold text-forest-600/20">CH</div>
                <h3 className="font-display text-xl font-bold text-forest-900">TeCHnology・CHallenge</h3>
                <div className="mx-auto my-4 h-px w-12 bg-forest-600/30" />
                <p className="text-sm leading-relaxed text-forest-900/70">
                  <strong className="text-forest-800">新しい技術</strong>の習得や、新しいことへの<strong className="text-forest-800">挑戦</strong>
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-forest-700/10 bg-white p-8 shadow-sm sm:p-12">
              <h3 className="text-center font-display text-xl font-bold text-forest-900 sm:text-2xl">
                <span className="text-forest-700">Branch</span>（木の枝）＝ <span className="text-forest-700">Bremch</span>（ブランチ）
              </h3>
              <p className="mt-2 text-center text-sm text-forest-900/60">
                と言葉を掛けています。
              </p>
              <div className="mx-auto my-8 h-px w-16 bg-forest-600/20" />
              <div className="space-y-6 text-sm leading-loose text-forest-900/75 sm:text-base">
                <p>木の枝から、やがて大木、根元にたどりつきます。</p>
                <p>
                  丈夫な大木は、<strong className="text-forest-800">根元</strong>も丈夫です。また、大木は、<strong className="text-forest-800">根元</strong>からはじまり大木の土台となります。
                  根元を羅針盤に例え、エンジニアとして、
                  &ldquo;<strong className="text-forest-800">大切な姿勢</strong>は何か&rdquo;と考えたときにエンジニアのキャリアを積む上で、「<strong className="text-forest-800">勇気・寄り添う・技術・挑戦</strong>」が羅針盤になり得ると感じました。
                </p>
                <p>また、木の枝は、&ldquo;<strong className="text-forest-800">様々な出会いから頂いた人生を充実させる選択</strong>&rdquo;と捉えています。</p>
                <p>
                  ご自身が目標に向かって、勇気を振り絞るとき、また、落ち込んで前に進めないときなど、&ldquo;<strong className="text-forest-800">人の励まし</strong>&rdquo;があって、前に進める場合があると思います。
                  その積み重ね（木の枝）が、ご自身の人生を豊かにさせるものと信じています。
                </p>
                <p className="text-center font-medium text-forest-800">
                  そんな想いを込めて、Bremch（ブランチ）を設立いたしました。
                </p>
              </div>
              <div className="mx-auto my-8 h-px w-16 bg-forest-600/20" />
              <p className="text-sm leading-loose text-forest-900/75 sm:text-base">
                弊社では、エンジニアの技術職を通し、「<strong className="text-forest-800">勇気・寄り添う・技術・挑戦</strong>」の「<strong className="text-forest-800">姿勢</strong>」を以って、
                「<strong className="text-forest-800">人生を豊かにする挑戦</strong>」を「<strong className="text-forest-800">暖かい居場所を提供</strong>」し、
                より多くの皆様が目標を達成できるように、サポートいたします。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Photo Marquee ── */}
      <section className="bg-cream">
        <PhotoMarquee />
      </section>

      {/* ── Strengths Section (Carousel) ── */}
      <section className="bg-gradient-to-b from-forest-900 to-forest-800 px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-forest-500 uppercase">
                Our Strengths
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
                Bremchの強み
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <StrengthCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Achievements Section ── */}
      <section className="bg-cream px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-forest-600 uppercase">
                Achievements
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
                実績
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-xl border border-forest-700/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                  {/* Header */}
                  <div className="rounded-t-xl bg-forest-700 px-4 py-3">
                    <h3 className="text-xs font-bold leading-relaxed text-cream sm:text-sm">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    {/* Role */}
                    <div className="mb-3">
                      <span className="rounded-full bg-forest-700/10 px-2.5 py-0.5 text-[10px] font-bold text-forest-800">
                        {item.role}
                      </span>
                    </div>

                    {/* Process */}
                    <div className="mb-3">
                      <p className="text-[10px] font-bold text-forest-900/50">担当工程</p>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-forest-900/80">{item.processes}</p>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-3 rounded-lg bg-forest-700/[0.04] p-3">
                      <p className="mb-1.5 text-[10px] font-bold text-forest-900/50">技術領域</p>
                      <div className="space-y-0.5">
                        {Object.entries(item.tech).map(([key, value]) =>
                          value ? (
                            <div key={key} className="text-[10px] leading-relaxed">
                              <span className="font-bold text-forest-800">{techLabels[key]}：</span>
                              <span className="text-forest-900/70">{value}</span>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="mt-auto">
                      <p className="mb-1.5 text-[10px] font-bold text-forest-900/50">作業内容</p>
                      <ul className="space-y-0.5">
                        {item.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-1.5 text-[10px] leading-relaxed text-forest-900/70">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-forest-600" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section (Carousel) ── */}
      <section id="team" className="bg-white px-4 py-12 sm:px-6 md:py-16 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-forest-600 uppercase">
                Our Team
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
                社員紹介
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <TeamCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SNS Feed Section ── */}
      <SocialFeedSection />

      {/* ── CTA Section ── */}
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
              <Button href="/contact" size="lg">
                お問い合わせ
              </Button>
              <Button href="/greeting" variant="ghost" size="lg">
                代表挨拶を読む
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
