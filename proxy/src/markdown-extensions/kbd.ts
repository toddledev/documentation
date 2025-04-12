import type { TokenizerAndRendererExtension } from 'marked'

// Custom extension for keyboard shortcuts
export const kbdExtension: TokenizerAndRendererExtension = {
  name: 'kbd',
  level: 'inline',

  tokenizer(src, _tokens) {
    const rule = /^\[kbd\]([\s\S]+?)\[kbd\]/
    const match = rule.exec(src)

    if (match) {
      return {
        type: 'kbd',
        raw: match[0],
        text: match[1].trim(),
      }
    }
  },

  renderer(token) {
    return `<kbd>${token.text}</kbd>`
  },
}
