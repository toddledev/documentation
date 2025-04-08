import type { TokenizerAndRendererExtension } from 'marked'
import { marked } from 'marked'

export type CalloutToken = {
  type: 'callout'
  raw: string
  calloutType: string
  content: string
}

const VALID_CALLOUT_TYPES = ['tip', 'dev', 'danger', 'warning', 'info']

export const calloutExtension: TokenizerAndRendererExtension = {
  name: 'callout',
  level: 'block',
  tokenizer(src: string) {
    const match = src.match(/^:::\s*(\w+)\n\n?([\s\S]*?)(?:\n:::|\n?$)/)

    if (match) {
      const [fullMatch, type, content] = match

      if (!VALID_CALLOUT_TYPES.includes(type)) {
        return undefined
      }

      const trimmedContent = content.trim()

      return {
        type: 'callout',
        raw: fullMatch,
        calloutType: type,
        content: trimmedContent,
        tokens: this.lexer.blockTokens(trimmedContent),
      } as CalloutToken
    }

    return undefined
  },
  renderer(token) {
    const calloutToken = token as unknown as CalloutToken
    return `<div class="callout ${calloutToken.calloutType}">${marked.parse(calloutToken.content)}</div>`
  },
}
