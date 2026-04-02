'use client'

interface XEmbedProps {
  username: string
  height?: number
}

export default function XEmbed({ username, height = 500 }: XEmbedProps) {
  // Use Twitter's publish embed page directly as an iframe
  // This avoids rate limiting issues with the widgets.js approach
  const timelineUrl = `https://syndication.twitter.com/srv/timeline-profile/screen-name/${username}?dnt=true&embedId=twitter-widget-0&frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&lang=ja&transparent=true&theme=light`

  return (
    <div style={{ minHeight: height, position: 'relative' }}>
      {/* Fallback link shown while iframe loads or if blocked */}
      <div className="flex h-full flex-col items-center justify-center gap-4 py-8">
        <a
          href={`https://x.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-forest-700/10 bg-white px-6 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <svg className="h-8 w-8 text-forest-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <div>
            <p className="font-display text-lg font-bold text-forest-900">@{username}</p>
            <p className="text-sm text-forest-900/50">Xで最新の投稿を見る</p>
          </div>
          <svg className="ml-4 h-5 w-5 text-forest-900/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-xs text-forest-900/40">
          クリックしてXの投稿をご覧ください
        </p>
      </div>
      {/* Timeline iframe overlay - loads on top when available */}
      <iframe
        src={timelineUrl}
        className="absolute inset-0 h-full w-full"
        style={{ border: 'none', background: 'transparent' }}
        title={`@${username}のタイムライン`}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        loading="lazy"
      />
    </div>
  )
}
