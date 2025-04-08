import type { FetchContent, MenuItem, PageData } from '../types'
import {
  errorResponse,
  fetchMenuItems,
  fetchPageData,
  getFilePathWithLocal,
  getPageUrl,
  json,
  parseRawContent,
} from '../utils'
import { loadJsonFile } from '../utils/jsonLoader'
import { loadMarkdownFile } from '../utils/markdownLoader'

// URLs like: http://localhost:8989/content/toddledev/documentation/main/the-editor/canvas
export const fetchContent = async ({
  params: { owner, repository, branch, path },
}: FetchContent) => {
  const preferLocalContent =
    owner === 'toddledev' && repository === 'documentation' && branch === 'main'
  try {
    let pageData: PageData = null
    const menuItems = preferLocalContent
      ? await loadJsonFile<MenuItem[]>('./menuItems.json')
      : await fetchMenuItems({ owner, repository, branch })
    if (!menuItems) {
      throw new Error('Could not fetch menu items.')
    }
    const githubUrl = getPageUrl({ path, menuItems })
    if (!githubUrl) {
      throw new Error('Could not find github url.')
    }

    const { path: pagePath, title: pageTitle } = githubUrl
    if (
      owner === 'toddledev' &&
      repository === 'documentation' &&
      branch === 'main'
    ) {
      // Pull file from disk
      const file = getFilePathWithLocal({ path, menuItems })
      if (file) {
        const text = await loadMarkdownFile<string>(file.localPath)
        if (text) {
          const pageData = parseRawContent({
            path: pagePath,
            title: pageTitle,
            text,
          })
          return json({ ...pageData, menu: menuItems })
        }
      }
    }

    pageData = await fetchPageData({ path: pagePath, title: pageTitle })

    return json({ ...pageData, menu: menuItems })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return errorResponse('Could not fetch page content', { status: 500 })
  }
}
