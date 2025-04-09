import type { FetchFileList, ProcessedFileFromGithub } from '../types'
import {
  getFilePath,
  getNameFromFilename,
  getSlugFromFilename,
} from './helpers'

type FileFromGithub = {
  path: string
  type: 'tree' | 'blob'
}

type ResponseFromGithub = {
  tree: FileFromGithub[]
}

export const fetchFileList = async ({
  owner,
  repository,
}: FetchFileList): Promise<ProcessedFileFromGithub[]> => {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'CF',
  }

  try {
    const url = `https://api.github.com/repos/${owner}/${repository}/git/trees/main?recursive=1`
    const response = await fetch(url, { headers })

    if (!response.ok) {
      throw new Error(
        `Could not fetch repo content. Status: ${response.status}`,
      )
    }

    const repositoryData = (await response.json()) as ResponseFromGithub

    const allFilesAndFolders = repositoryData.tree

    const relevantFolders = allFilesAndFolders.filter(({ type, path }) => {
      const hasIndexFile = allFilesAndFolders.find(
        (item) => item.path === path + '/index.md',
      )
      return type === 'tree' && path.startsWith('docs/') && hasIndexFile
    })

    const files = relevantFolders.map(({ path: _path }) => {
      const filePath = getFilePath({
        owner,
        repository,
        branch: 'main',
        path: _path + '/index.md',
      })

      const path = _path
        .replaceAll('docs/', '')
        .split('/')
        .map((part) => getSlugFromFilename(part))
        .join('/')

      const breadcrumbs = path
        .split('/')
        .map((item) => getNameFromFilename(item))

      return {
        path,
        breadcrumbs,
        filePath,
        title: breadcrumbs[breadcrumbs.length - 1],
      }
    })

    return files
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching repository structure:', error)
    throw error
  }
}
