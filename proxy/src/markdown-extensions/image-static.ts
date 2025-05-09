import type { TokenizerAndRendererExtension } from 'marked'

export type ImageStaticToken = {
  type: 'image-static'
  raw: string
  href: string
  text: string
  linkUrl: string | null
}

export const ImageStaticExtension: TokenizerAndRendererExtension = {
  name: 'image-static',
  level: 'inline',

  tokenizer(src, _tokens): ImageStaticToken | undefined {
    const rule = /^@@@\s*image-static\s*\n!\[([^\]]+)\]\(([^)]+)\)\s*\n@@@/
    const match = rule.exec(src)

    if (match) {
      const [raw, text, href, linkUrl] = match

      return {
        type: 'image-static',
        raw: raw,
        text: text.trim(),
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
