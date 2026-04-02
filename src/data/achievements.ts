export interface TechStack {
  cloud: string
  hypervisor: string
  os: string
  middleware: string
  database: string
  network: string
}

export interface Achievement {
  title: string
  role: string
  processes: string
  tech: TechStack
  tasks: string[]
}

export const TECH_LABELS: Record<keyof TechStack, string> = {
  cloud: 'クラウド',
  hypervisor: 'ハイパーバイザ',
  os: 'OS',
  middleware: 'ミドルウェア',
  database: 'データベース',
  network: 'ネットワーク',
}

export const achievements: Achievement[] = [
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
