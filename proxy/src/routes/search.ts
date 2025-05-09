import { load } from 'cheerio'
import type {
  SearchParams,
  SearchParamsWithPreset,
} from 'typesense/lib/Typesense/Documents'
import { getTypesenseClient } from '../search/typesense'
import type { Search } from '../types'
import { json } from '../utils'

export const search = async ({ params: { searchTerm }, ctx }: Search) => {
  const client = getTypesenseClient({
    apiKey: ctx.env.TYPESENSE_SEARCH_TOKEN,
    host: ctx.env.TYPESENSE_HOST,
  })

  const searchParameters: SearchParams | SearchParamsWithPreset = {
    q: searchTerm,
    limit: 20,
    query_by: 'title,content',
    // Allow 1 typo for both title and content
    // Learn more here https://typesense.org/docs/28.0/api/search.html#typo-tolerance-parameters
    num_typos: 1,
  }

  const { hits } = await client
    .collections('items')
    .documents()
    .search(searchParameters)

  const processedHits = hits?.map(
    ({ highlight, text_match, text_match_info, ...hit }) => {
      return {
        ...hit,
        highlights: hit.highlights?.map(({ field, snippet }) => ({
          field,
          snippet: getProcessedSnippet(snippet ?? ''),
        })),
      }
    },
  )

  return json({ hits: processedHits })
}

const getProcessedSnippet = (snippet: string) => {
  const content: { type: string; value: string }[] = []
  const loadedHtml = load(snippet)

  const processNode = (node: any) => {
    if (node.type === 'text') {
      content.push({
        type: 'text',
        value: loadedHtml(node).text(),
      })
    } else if (node.name === 'mark') {
      const markedText = loadedHtml(node).text()
      content.push({
        type: 'marked',
        value: markedText,
      })
    } else if (node.children) {
      node.children.forEach((child: any) => processNode(child))
    }
  }

  loadedHtml('body')
    .contents()
    .each((i, node) => processNode(node))

  return content
}
