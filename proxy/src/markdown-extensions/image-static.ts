import type { TokenizerAndRendererExtension } from 'marked'

export type ImageStaticToken = {
  type: 'image-static'
  raw: string
  href: string
  text: string
  aspectRatio: string
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

      const splitText = text.split('|')

      return {
        type: 'image-static',
        raw: raw,
        text: splitText[0].trim(),
        href: href,
        aspectRatio: splitText[1].trim(),
        linkUrl: linkUrl || null,
      }
    }

    return undefined
  },

  renderer(token) {
    return `<img src="${token.href}" alt="${token.text}">`
  },
}
