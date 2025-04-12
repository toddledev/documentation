import type { TokenizerAndRendererExtension } from 'marked'

export type ImageToken = {
  type: 'image'
  raw: string
  href: string
  text: string
  aspectRatio: string | null
  linkUrl: string | null
}

export const imageExtension: TokenizerAndRendererExtension = {
  name: 'image',
  level: 'inline',

  tokenizer(src, _tokens): ImageToken | undefined {
    const rule = /^!\[([\s\S]+?)\]\(([\s\S]+?)\)(?:{([\s\S]+?)})?/
    const match = rule.exec(src)

    if (match) {
      const [raw, text, href, linkUrl] = match

      const splitText = text.split('|')

      return {
        type: 'image',
        raw: raw,
        text: splitText[0].trim(),
        href: href,
        aspectRatio: splitText[1]?.trim(),
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
