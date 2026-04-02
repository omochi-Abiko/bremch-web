interface InstagramEmbedProps {
  username: string
  postUrls?: string[]
}

const IFRAME_SANDBOX = 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox'

export default function InstagramEmbed({ username, postUrls }: InstagramEmbedProps) {
  const hasPosts = postUrls && postUrls.length > 0

  if (hasPosts) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {postUrls.map((url) => (
          <iframe
            key={url}
            src={`${url}embed`}
            style={{ width: '100%', height: 480, border: 'none', overflow: 'hidden' }}
            title="Instagram投稿"
            scrolling="no"
            loading="lazy"
            sandbox={IFRAME_SANDBOX}
          />
        ))}
      </div>
    )
  }

  return (
    <iframe
      src={`https://www.instagram.com/${username}/embed`}
      style={{ width: '100%', height: 480, border: 'none', overflow: 'hidden' }}
      title={`@${username}のInstagram`}
      scrolling="no"
      loading="lazy"
      sandbox={IFRAME_SANDBOX}
    />
  )
}
