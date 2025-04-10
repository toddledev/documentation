import type { Context } from 'hono'

export type GetPageUrl = {
  path?: string
  menuItems: MenuItem[]
}

export type PageData = null | {
  seo: object
  meta: {
    title?: string
    description?: string
  }
  content: any[]
}

export type FetchMenuItems = {
  owner: string
  repository: string
  branch: string
}

export type RepositoryItem = {
  path: string
  type: 'blob' | 'tree'
}

export type MenuItem = MenuItemFile | MenuItemFolder

type MenuItemFile = {
  type: 'file'
  name: string
  id: string
  path: string
  localPath: string
  contributorsPath: string
}

type MenuItemFolder = {
  type: 'folder'
  name: string
  id: string
  children: MenuItem[]
}

export type GetMenuItemsFromRepoItems = {
  items: RepositoryItem[]
  parentPath: string
  owner: string
  repository: string
  branch: string
}

export type GetFilePath = FetchMenuItems & {
  path: string
}

export type Env = {
  TYPESENSE_ADMIN_TOKEN: string
  TYPESENSE_SEARCH_TOKEN: string
  TYPESENSE_HOST: string
  SEARCH_INDEX_AUTH_TOKEN: string
}

export type FetchContent = {
  params: { owner: string; repository: string; branch: string; path?: string }
  ctx: Context<{ Bindings: Env }>
}

export type PageInKv = {
  updatedAt: Date
  data: PageData
}

export type MenuInKv = {
  updatedAt: Date
  items: MenuItem[]
}

export type DataInKv = null | {
  menu: MenuInKv
  pages: {
    [key: string]: PageInKv
  }
}

export type FetchPageData = {
  path: string
  title: string
}

export type FetchContributors = {
  owner: string
  repository: string
  path?: string
}

export type FetchFileList = {
  owner: string
  repository: string
}

export type ProcessedFileFromGithub = {
  path: string
  breadcrumbs: string[]
  filePath: string
  title: string
}

export type CreateSearchIndex = {
  params: {
    owner: string
    repository: string
  }
  ctx: Context<{ Bindings: Env }>
}

export type Search = {
  params: {
    searchTerm: string
  }
  ctx: Context<{ Bindings: Env }>
}
