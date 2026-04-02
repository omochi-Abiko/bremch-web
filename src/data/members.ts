export interface InterviewQA {
  question: string
  answer: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface Member {
  slug: string
  photo: string | null
  initials: string
  department: string
  mainSkill: string
  hobby: string
  background: string
  interview: InterviewQA[]
  gallery?: GalleryImage[]
  videoUrl?: string
}

export const members: Member[] = [
  {
    slug: 'lc',
    photo: '/team-lc.webp',
    initials: 'L.C',
    department: 'SI事業部インフラエンジニア課',
    background: '未経験より入社',
    mainSkill: 'インフラエンジニア',
    hobby: 'ピラティス・散歩',
    gallery: [
      { src: '/team-lc-work.webp', alt: 'L.Cさん 業務の様子' },
      { src: '/team-lc-interview.webp', alt: 'L.Cさん インタビューの様子' },
    ],
    videoUrl: undefined,
    interview: [
      {
        question: 'これまでの経歴と自己紹介',
        answer:
          'アパレルや秘書、保育士を経てアメリカで2年留学し、帰国後にエンジニアとしてのキャリアをスタート。研修で学んだことを活かしてプロジェクトに参画しました。',
      },
      {
        question: 'インフラエンジニアを目指したきっかけ',
        answer:
          '留学先のシアトルでエンジニアの友人がたくさんでき、IT業界に興味を持ちました。',
      },
      {
        question: '現在の業務内容',
        answer:
          '独立行政法人のサーバ保守を担当。運用Gからのエラー調査依頼対応、アプリGからのリソース増強依頼対応、MWのバージョンアップなど、サーバに関わる保守業務を担当。設計書の修正や作業手順書の作成も対応しています。',
      },
      {
        question: '参画したプロジェクトで大変だったこと・嬉しかったこと',
        answer:
          '自分が使ったことのないサービスを扱うときは知見集めに苦労しました。エラーの調査依頼を解決できた時達成感があり嬉しかったです。',
      },
      {
        question: '入社を決めたきっかけ',
        answer:
          '自分のキャリアをイメージしやすく、挑戦する自分を応援してくれると思ったから。',
      },
      {
        question: '入社後の印象',
        answer:
          '困った時はすぐに助けてくれ、真摯に向き合ってくれる会社です。',
      },
      {
        question: '会社の魅力',
        answer:
          '社長との距離が近く、話しやすい環境がありがたいです。\n（あとバターチキンカレーが絶品です）',
      },
      {
        question: '会社への不満',
        answer: '誕生日プレゼント制度の金額を上げてほしい。',
      },
      {
        question: 'エンジニアとしての働きやすさ',
        answer:
          '参画プロジェクトにもよりますが、在宅や勤務時間の調整ができ働きやすいと思います。',
      },
      {
        question: '趣味や休日の過ごし方',
        answer:
          '勤務後や週末にピラティスや散歩をしてリフレッシュしています。',
      },
    ],
  },
  {
    slug: 'ka',
    photo: null,
    initials: 'K.A',
    department: '',
    background: '',
    mainSkill: 'インフラエンジニア / PM',
    hobby: 'キャンプ',
    interview: [],
  },
  {
    slug: 'ts',
    photo: null,
    initials: 'T.S',
    department: '',
    background: '',
    mainSkill: 'インフラエンジニア',
    hobby: 'ゲーム',
    interview: [],
  },
  {
    slug: 'test1',
    photo: null,
    initials: 'M.Y',
    department: 'SI事業部',
    background: 'テストデータ',
    mainSkill: 'クラウドエンジニア',
    hobby: '釣り',
    interview: [],
  },
  {
    slug: 'test2',
    photo: null,
    initials: 'R.T',
    department: 'SI事業部',
    background: 'テストデータ',
    mainSkill: 'ネットワークエンジニア',
    hobby: 'サッカー',
    interview: [],
  },
]
