import type { TokenizerAndRendererExtension } from 'marked'

export type ExampleToken = {
  type: 'example'
  componentUrl?: string
  editorUrl?: string
  height?: string
  raw: string
  content: string
}

export const exampleExtension: TokenizerAndRendererExtension = {
  name: 'example',
  level: 'block',
  tokenizer(src: string) {
    const match = src.match(
      /^@@@\s*example\s*\n\s*componentUrl:\s*(https?:\/\/[^\s]+)\s*\n\s*editorUrl:\s*(https?:\/\/[^\s]+)(?:\s*\n\s*height:\s*(\d+(?:px|em|rem|vh|%)?))?\s*\n\n([\s\S]*?)(?:\n@@@|\n?$)/,
    )

    if (match) {
      const [fullMatch, componentUrl, editorUrl, height, content] = match
      const trimmedContent = content.trim()

      return {
        type: 'example',
        raw: fullMatch,
        componentUrl,
        editorUrl,
        height: height || null, // Use null if height is not provided
        content: trimmedContent,
        tokens: this.lexer.blockTokens(trimmedContent),
      } as ExampleToken
    }

    return undefined
  },
  renderer() {
    return `<div></div>`
  },
}
