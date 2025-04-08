import type { TokenizerAndRendererExtension } from 'marked'

export type YouTubeToken = {
  type: 'youtube'
  videoId: string
  title?: string
  autoplay?: boolean
  start?: number
  raw: string
}

export const youtubeExtension: TokenizerAndRendererExtension = {
  name: 'youtube',
  level: 'block',

  tokenizer(src: string) {
    const match = src.match(/^@@@\s*youtube\s*\n([\s\S]*?)(?:\n@@@|\n?$)/)

    if (match) {
      const [fullMatch, content] = match

      // Parse parameters from the content
      const videoIdMatch = content.match(/videoId:\s*([a-zA-Z0-9_-]+)/)
      const titleMatch = content.match(/title:\s*([^\n]+)/)
      const startMatch = content.match(/start:\s*(\d+)/)

      return {
        type: 'youtube',
        raw: fullMatch,
        videoId: videoIdMatch ? videoIdMatch[1] : '',
        title: titleMatch ? titleMatch[1].trim() : undefined,
        start: startMatch ? parseInt(startMatch[1], 10) : undefined, // "Start" is not tested. Maybe it is useful in the future. Currently, there is no need to set it.
      } as YouTubeToken
    }

    return undefined
  },

  renderer(_token) {
    return '' // No need to render it.
  },
}
