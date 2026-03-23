import { db } from './index';
import { companyInfo, pageContents, teamMembers, siteSettings } from './schema';

async function seed() {
  console.log('Seeding database...');

  // Company Info
  const companyData = [
    { key: 'name', value: '合同会社Bremch' },
    { key: 'address', value: '東京都（仮）' },
    { key: 'phone', value: '03-XXXX-XXXX' },
    { key: 'email', value: 'info@bremch.co.jp' },
    { key: 'established', value: '2024年' },
    { key: 'ceo', value: '代表社員名（仮）' },
    { key: 'business', value: 'ITエンジニアリング事業' },
  ];

  for (const item of companyData) {
    await db.insert(companyInfo).values(item).onConflictDoNothing();
  }
  console.log('  - company_info seeded');

  // Page Contents
  const pages = [
    {
      pageSlug: 'home',
      sectionKey: 'hero_title',
      content: 'ITを通して人に寄り添える「居場所」を提供する',
    },
    {
      pageSlug: 'home',
      sectionKey: 'hero_subtitle',
      content: '合同会社Bremchは、テクノロジーの力で人々が安心して集える場所を創り出します。',
    },
    {
      pageSlug: 'home',
      sectionKey: 'about_summary',
      content:
        '私たちBremchは、ITエンジニアリングを通じて、すべての人に寄り添えるサービスを提供しています。技術はあくまで手段であり、その先にある「人とのつながり」を大切にしています。',
    },
    {
      pageSlug: 'home',
      sectionKey: 'service_intro',
      content:
        'システム開発・インフラ構築・DX推進など、幅広いITソリューションを提供。お客様の課題に寄り添い、最適な解決策をご提案いたします。',
    },
    {
      pageSlug: 'company',
      sectionKey: 'overview',
      content:
        '合同会社Bremchは2024年に設立されたITエンジニアリング企業です。「ITを通して人に寄り添える居場所を提供する」というビジョンのもと、お客様と社会に貢献するサービスを展開しています。',
    },
    {
      pageSlug: 'company',
      sectionKey: 'mission',
      content:
        '私たちの使命は、テクノロジーを活用して人々の生活をより豊かにし、誰もが安心して過ごせるデジタル空間を創造することです。',
    },
    {
      pageSlug: 'company',
      sectionKey: 'vision',
      content:
        'ITの力で、一人ひとりが自分らしくいられる「居場所」を世界中に届けること。それが私たちBremchの目指す未来です。',
    },
    {
      pageSlug: 'company',
      sectionKey: 'values',
      content:
        '寄り添い — お客様の声に耳を傾け、真のニーズを理解します。\n誠実 — 透明性のある対応で信頼関係を築きます。\n挑戦 — 新しい技術や手法に果敢に取り組みます。\n共創 — チームワークとパートナーシップを大切にします。',
    },
    {
      pageSlug: 'greeting',
      sectionKey: 'ceo_message',
      content:
        '合同会社Bremchのホームページをご覧いただき、誠にありがとうございます。\n\n私たちは「ITを通して人に寄り添える居場所を提供する」という想いのもと、2024年に会社を設立いたしました。\n\n急速に変化するデジタル社会において、テクノロジーは時として人を孤立させてしまうこともあります。私たちはそうした課題に正面から向き合い、技術の力で人と人をつなぎ、誰もが安心して過ごせる場所を創りたいと考えています。\n\nお客様一人ひとりに寄り添い、共に成長していける企業であり続けることをお約束いたします。\n\n今後とも、合同会社Bremchをよろしくお願い申し上げます。',
    },
    {
      pageSlug: 'greeting',
      sectionKey: 'ceo_name',
      content: '代表社員名（仮）',
    },
    {
      pageSlug: 'contact',
      sectionKey: 'intro',
      content:
        'お問い合わせいただきありがとうございます。下記フォームに必要事項をご記入の上、送信ボタンを押してください。内容を確認の上、担当者より折り返しご連絡いたします。',
    },
    {
      pageSlug: 'contact',
      sectionKey: 'note',
      content:
        '※ お問い合わせ内容によっては、回答にお時間をいただく場合がございます。あらかじめご了承ください。',
    },
  ];

  for (const page of pages) {
    await db.insert(pageContents).values(page).onConflictDoNothing();
  }
  console.log('  - page_contents seeded');

  // Team Members
  const members = [
    {
      name: '田中 太郎',
      role: 'エンジニアリングリード',
      bio: 'フルスタックエンジニアとして10年以上の経験を持ち、チームの技術的な方向性をリードしています。お客様の課題を深く理解し、最適なソリューションを設計することが得意です。',
      sortOrder: 1,
    },
    {
      name: '佐藤 花子',
      role: 'プロジェクトマネージャー',
      bio: 'IT業界でのプロジェクト管理経験が豊富。お客様との丁寧なコミュニケーションを大切にし、プロジェクトを成功に導きます。',
      sortOrder: 2,
    },
    {
      name: '鈴木 一郎',
      role: 'インフラエンジニア',
      bio: 'クラウドインフラの設計・構築を専門としています。安定性とスケーラビリティを両立したインフラ基盤の構築に情熱を注いでいます。',
      sortOrder: 3,
    },
  ];

  for (const member of members) {
    await db.insert(teamMembers).values(member).onConflictDoNothing();
  }
  console.log('  - team_members seeded');

  // Site Settings
  const settings = [
    { key: 'site_title', value: '合同会社Bremch' },
    {
      key: 'site_description',
      value: 'ITを通して人に寄り添える「居場所」を提供する',
    },
  ];

  for (const setting of settings) {
    await db.insert(siteSettings).values(setting).onConflictDoNothing();
  }
  console.log('  - site_settings seeded');

  console.log('Seeding complete!');
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
