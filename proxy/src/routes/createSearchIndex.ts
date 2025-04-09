import { getTypesenseClient } from '../search/typesense'
import type { CreateSearchIndex } from '../types'
import { errorResponse, fetchPageData, json } from '../utils'
import { fetchFileList } from '../utils/fetchFileList'

type ProcessedPage = {
  sections: any[]
  path: string
  breadcrumbs: string[]
  filePath: string
  title: string
}

type SearchItem = SearchItemPage | SearchItemSection

type SearchItemPage = {
  type: 'page'
} & SearchItemBase

type SearchItemSection = {
  type: 'section'
  content: string
} & SearchItemBase

type SearchItemBase = {
  id: string
  title: string
  breadcrumbs: string[]
  path: string
  priority: number
}

export const createSearchIndex = async ({
  params: { owner, repository },
  ctx,
}: CreateSearchIndex) => {
  try {
    const files = await fetchFileList({ owner, repository })

    const fetchPagesPromises = files.map(
      async ({ filePath, title, ...rest }) => {
        const page = await fetchPageData({ path: filePath, title })

        const data: ProcessedPage = {
          filePath,
          title,
          ...rest,
          sections: page?.content ?? [],
        }

        return data
      },
    )

    const allPages = await Promise.all(fetchPagesPromises)

    const searchItems = getSearchItemsFromPages(allPages)

    const client = getTypesenseClient(ctx, 'admin')
    try {
      // We remove all documents from the search index. The collection size is small. This should not be an issue.
      await client
        .collections('items')
        .documents()
        .delete({ filter_by: 'type:[page, section]' })
      await client
        .collections('items')
        .documents()
        .import(searchItems, { action: 'create' })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Error when updating search index', err)
    }

    return json({ indexedItems: searchItems.length })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return errorResponse('Could not fetch file list')
  }
}

const getSearchItemsFromPages = (pages: ProcessedPage[]) => {
  const items: SearchItem[] = []

  pages.forEach(({ path, breadcrumbs, title, sections }) => {
    items.push({
      id: 'page_' + path,
      type: 'page',
      title,
      breadcrumbs,
      path,
      priority: 0,
    })

    sections.forEach(({ title, id, tokens }) => {
      items.push({
        type: 'section',
        id: 'section_' + path + '#' + id,
        title,
        breadcrumbs,
        path: path + '#' + id,
        priority: 1,
        content: getContentFromTokens(tokens),
      })
    })
  })

  return items
}

const getContentFromTokens = (
  tokens: { type: string; tokens: any[]; text: string }[],
) => {
  let content = ''

  const allowedTokens = [
    'paragraph',
    'codespan',
    'callout',
    'link',
    'strong',
    'list',
    'list_item',
    'blockquote',
    'em',
  ]

  tokens.forEach((token) => {
    if (token.type === 'text') {
      content += token.text
    } else if (allowedTokens.includes(token.type) && token.tokens) {
      content += getContentFromTokens(token.tokens ?? [])
    }
  })

  return content
}
