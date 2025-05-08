import frontMatter from 'front-matter'
import { kebabCase } from 'lodash'
import type { Token } from 'marked'
import { marked } from 'marked'
import {
  calloutExtension,
  exampleExtension,
  imageExtension,
  imageInternalExtension,
  kbdExtension,
  youtubeExtension,
} from '../markdown-extensions'
import type { FetchPageData, PageData } from '../types'

marked.use({
  extensions: [
    calloutExtension,
    exampleExtension,
    kbdExtension,
    imageExtension,
    imageInternalExtension,
    youtubeExtension,
  ],
})

export const fetchPageData = async ({
  path,
  title,
}: FetchPageData): Promise<PageData> => {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error('Could not fetch page data')
  }

  const text = await response.text()
  return parseRawContent({ path, text, title })
}

export const parseRawContent = ({
  path,
  text,
  title,
}: {
  text: string
  path: string
  title: string
}) => {
  const { attributes: metaFromMarkdown, body: markdown } = frontMatter(text)

  const tokens = getProcessedTokens(marked.lexer(markdown))

  const seo = {
    ...(metaFromMarkdown as object),
  }

  const meta = {
    title,
    folder: path.replace('index.md', ''),
  }

  return { seo, meta, content: getTokensAsSections(tokens as Token[], 1) }
}

const getProcessedTokens = (tokens: any[]) => {
  return tokens.map((token) => {
    const processedToken = { ...token } as any

    if (token.type === 'image' && token.text?.includes('|')) {
      processedToken.text = token.text.split('|')[0]
      processedToken.aspectRatio = token.text.split('|')[1]
    }

    if (token.tokens) {
      processedToken.tokens = getProcessedTokens(token.tokens)
    }

    return processedToken
  })
}

const getTokensAsSections = (
  _tokens: Token[],
  depth: number,
  previousId?: string,
) => {
  const tokens = _tokens.slice()
  const processedTokens: any[] = []

  const processToken = (index: number) => {
    const currentToken = tokens[index]
    let nextTokenIndex = index + 1

    if (currentToken && currentToken.type === 'heading') {
      const id = getSectionId(currentToken.text, previousId)
      const nextHeadingIndex = getNextHeadingSliceIndex(tokens, index + 1)

      processedTokens.push({
        type: 'section',
        title: currentToken.text,
        id,
        depth: currentToken.depth,
        tokens:
          nextHeadingIndex === -1
            ? getTokensAsSections(
                tokens.slice(index + 1, tokens.length),
                currentToken.depth + 1,
                id,
              )
            : getTokensAsSections(
                tokens.slice(index + 1, nextHeadingIndex),
                currentToken.depth + 1,
                id,
              ),
      })

      nextTokenIndex = nextHeadingIndex
    } else if (currentToken) {
      processedTokens.push(currentToken)
    }

    if (nextTokenIndex !== -1 && nextTokenIndex < tokens.length) {
      processToken(nextTokenIndex)
    }
  }

  processToken(0)

  return processedTokens
}

const getNextHeadingSliceIndex = (tokens: Token[], start: number) => {
  return tokens.findIndex(
    (token, index) => token.type === 'heading' && index >= start,
  )
}

const getSectionId = (name: string, previousId?: string) => {
  return previousId ? previousId + '-' + kebabCase(name) : kebabCase(name)
}
