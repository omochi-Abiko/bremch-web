import type { Metadata } from 'next';
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/forest/ScrollProgress';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-zen-kaku-gothic-new',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '合同会社Bremch | ITを通して人に寄り添える「居場所」を提供する',
  description:
    '合同会社Bremchは、ITを通して人に寄り添える「居場所」を提供する企業です。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${zenKakuGothicNew.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <ScrollProgress />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
