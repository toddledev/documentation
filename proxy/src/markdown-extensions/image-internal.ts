import type { TokenizerAndRendererExtension } from 'marked'

export type ImageInternalToken = {
  type: 'image-internal'
  raw: string
  href: string
  text: string
  linkUrl: string | null
}

export const imageInternalExtension: TokenizerAndRendererExtension = {
  name: 'image-internal',
  level: 'inline',

  tokenizer(src, _tokens): ImageInternalToken | undefined {
    const rule = /^@@@\s*image-internal\s*\n!\[([^\]]+)\]\(([^)]+)\)\s*\n@@@/
    const match = rule.exec(src)

    if (match) {
      const [raw, text, href, linkUrl] = match

      return {
        type: 'image-internal',
        raw: raw,
        text: text.trim(),
        href: href,
        linkUrl: linkUrl || null,
      }
    }

    return undefined
  },

  renderer(token) {
    let imgHtml

    if (token.aspectRatio) {
      imgHtml = `<div style="aspect-ratio: ${token.aspectRatio};">
            <img src="${token.href}" alt="${token.text}" style="width: 100%; height: 100%; object-fit: contain;">
          </div>`
    } else {
      imgHtml = `<img src="${token.href}" alt="${token.text}">`
    }

    return imgHtml
  },
}
