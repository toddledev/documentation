import type { TokenizerAndRendererExtension } from 'marked'

// Custom extension to tokenise an internal image that does not expand or need to be 16/9
export const imageInternalExtension: TokenizerAndRendererExtension = {
  name: 'image-internal',
  level: 'block',

  tokenizer(src, _tokens) {
    const match = src.match(
      /^@@@\s*image-internal\s*\n([\s\S]*?)(?:\n@@@|\n?$)/,
    )

    if (match) {
      const [raw, text, href, linkUrl] = match

      return {
        type: 'image-internal',
        raw: raw,
        text: text,
        href: href,
        linkUrl: linkUrl || null,
      }
    }

    return undefined
  },

  renderer(token) {
    return `<img src="${token.href}" alt="${token.text}">`
  },
}
