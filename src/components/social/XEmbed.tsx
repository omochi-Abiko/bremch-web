'use client'

import { useEffect, useRef } from 'react'

interface XEmbedProps {
  username: string
  height?: number
}

export default function XEmbed({ username, height = 500 }: XEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create the anchor element Twitter expects
    const anchor = document.createElement('a')
    anchor.className = 'twitter-timeline'
    anchor.setAttribute('data-height', String(height))
    anchor.setAttribute('data-chrome', 'noheader nofooter noborders transparent')
    anchor.setAttribute('data-dnt', 'true')
    anchor.setAttribute('data-lang', 'ja')
    anchor.setAttribute('data-tweet-limit', '3')
    anchor.href = `https://twitter.com/${username}`
    anchor.textContent = `@${username}のツイート`

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(anchor)

    // Load or reload the Twitter widget script
    const existingScript = document.getElementById('twitter-wjs')
    if (existingScript) {
      // If script already loaded, re-process widgets
      if ((window as unknown as Record<string, unknown>).twttr) {
        const twttr = (window as unknown as Record<string, unknown>).twttr as {
          widgets: { load: (el?: HTMLElement) => void }
        }
        twttr.widgets.load(containerRef.current)
      }
    } else {
      const script = document.createElement('script')
      script.id = 'twitter-wjs'
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [username, height])

  return <div ref={containerRef} />
}
