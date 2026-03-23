import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'トップ' },
  { href: '/company', label: '会社概要' },
  { href: '/greeting', label: '代表挨拶' },
  { href: '/team', label: '社員紹介' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default function Footer() {
  return (
    <footer className="relative bg-forest-900">
      {/* Decorative root pattern */}
      <div className="absolute inset-x-0 top-0 h-12 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Main roots */}
          <path
            d="M0 48 C120 40 180 20 240 24 C300 28 360 44 420 40 C480 36 540 16 600 20 C660 24 720 44 780 40 C840 36 900 12 960 18 C1020 24 1080 44 1140 38 C1200 32 1260 16 1320 22 C1380 28 1420 40 1440 48"
            stroke="var(--color-forest-700)"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M0 48 C100 42 200 28 300 32 C400 36 450 46 540 42 C630 38 680 22 780 26 C880 30 920 44 1020 40 C1120 36 1180 24 1260 28 C1340 32 1400 44 1440 48"
            stroke="var(--color-bark-500)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
          {/* Small branching roots */}
          <path
            d="M240 24 C250 18 260 14 270 16 M600 20 C610 14 618 10 630 12 M960 18 C970 12 980 8 990 10 M1320 22 C1330 16 1340 12 1350 14"
            stroke="var(--color-forest-700)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Company info */}
          <div>
            <h3 className="text-lg font-semibold text-cream">
              合同会社Bremch
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bark-300">
              ITを通して人に寄り添える「居場所」を提供する
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bark-300">
              ナビゲーション
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors duration-200 hover:text-forest-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-bark-300">
              お問い合わせ
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/70">
              <a
                href="mailto:info@bremch.co.jp"
                className="transition-colors duration-200 hover:text-forest-500"
              >
                info@bremch.co.jp
              </a>
              <p>
                〒000-0000
                <br />
                東京都（住所準備中）
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-forest-700/40 pt-6">
          <p className="text-center text-xs text-cream/60">
            &copy; 2026 合同会社Bremch
          </p>
        </div>
      </div>
    </footer>
  );
}
