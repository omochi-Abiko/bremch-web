'use client'

import { useEffect, useRef, useState } from 'react'

interface XEmbedProps {
  username: string
  height?: number
}

export default function XEmbed({ username, height = 500 }: XEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    container.innerHTML = ''

    const anchor = document.createElement('a')
    anchor.className = 'twitter-timeline'
    anchor.setAttribute('data-height', String(height))
    anchor.setAttribute('data-chrome', 'noheader nofooter noborders transparent')
    anchor.setAttribute('data-dnt', 'true')
    anchor.setAttribute('data-lang', 'ja')
    anchor.setAttribute('data-tweet-limit', '3')
    anchor.href = `https://twitter.com/${username}`
    anchor.textContent = ''
    container.appendChild(anchor)

    const tryLoad = () => {
      const w = window as unknown as Record<string, unknown>
      if (w.twttr && typeof w.twttr === 'object') {
        const twttr = w.twttr as { widgets: { load: (el?: HTMLElement) => void } }
        twttr.widgets.load(container)
        setLoaded(true)
      }
    }

    const existing = document.getElementById('twitter-wjs')
    if (existing) {
      tryLoad()
      // Retry in case twttr not ready yet
      if (!loaded) {
        const retryInterval = setInterval(() => {
          tryLoad()
          const w = window as unknown as Record<string, unknown>
          if (w.twttr) clearInterval(retryInterval)
        }, 500)
        setTimeout(() => clearInterval(retryInterval), 10000)
        return () => clearInterval(retryInterval)
      }
    } else {
      const script = document.createElement('script')
      script.id = 'twitter-wjs'
      script.src = 'https://platform.twitter.com/widgets.js'
      script.async = true
      script.charset = 'utf-8'
      script.onload = () => {
        setTimeout(tryLoad, 300)
      }
      document.head.appendChild(script)
    }
  }, [username, height, loaded])

  return <div ref={containerRef} style={{ minHeight: height }} />
}
