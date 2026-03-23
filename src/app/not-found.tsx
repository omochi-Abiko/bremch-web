import Link from 'next/link';
import FloatingLeaves from '@/components/forest/FloatingLeaves';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden bg-forest-900 px-4">
      <FloatingLeaves />

      {/* Forest/fog SVG illustration */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
        <svg
          viewBox="0 0 1200 400"
          className="h-auto w-full opacity-20"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          {/* Fog layers */}
          <ellipse cx="600" cy="380" rx="700" ry="80" fill="var(--forest-700)" opacity="0.3" />
          <ellipse cx="400" cy="360" rx="500" ry="60" fill="var(--forest-800)" opacity="0.4" />

          {/* Trees */}
          {/* Tree 1 */}
          <rect x="140" y="200" width="12" height="180" fill="var(--bark-500)" />
          <polygon points="80,220 146,60 212,220" fill="var(--forest-700)" />
          <polygon points="95,170 146,30 197,170" fill="var(--forest-600)" />

          {/* Tree 2 */}
          <rect x="340" y="220" width="14" height="160" fill="var(--bark-500)" />
          <polygon points="275,240 347,80 419,240" fill="var(--forest-700)" />
          <polygon points="290,190 347,50 404,190" fill="var(--forest-600)" />

          {/* Tree 3 (center, tallest) */}
          <rect x="590" y="180" width="16" height="200" fill="var(--bark-500)" />
          <polygon points="510,200 598,20 686,200" fill="var(--forest-700)" />
          <polygon points="530,150 598,-10 666,150" fill="var(--forest-600)" />

          {/* Tree 4 */}
          <rect x="790" y="210" width="14" height="170" fill="var(--bark-500)" />
          <polygon points="725,230 797,70 869,230" fill="var(--forest-700)" />
          <polygon points="740,180 797,40 854,180" fill="var(--forest-600)" />

          {/* Tree 5 */}
          <rect x="1000" y="230" width="12" height="150" fill="var(--bark-500)" />
          <polygon points="940,250 1006,100 1072,250" fill="var(--forest-700)" />
          <polygon points="955,200 1006,70 1057,200" fill="var(--forest-600)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="font-display text-[8rem] font-bold leading-none text-forest-500/30 md:text-[12rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-cream md:text-3xl">
          森の中で迷ってしまいました...
        </h1>
        <p className="mt-4 text-cream/60">
          お探しのページは見つかりませんでした。
          <br />
          道を戻って、もう一度お試しください。
        </p>
        <div className="mt-8">
          <Button href="/" variant="ghost" size="lg">
            トップページに戻る
          </Button>
        </div>
      </div>
    </div>
  );
}
