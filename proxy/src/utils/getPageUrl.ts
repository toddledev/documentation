import type { GetPageUrl } from '../types'

export const getPageUrl = ({
  path,
  menuItems,
}: GetPageUrl): { path: string; title: string } => {
  if (!path || path === 'fallback') {
    const foundItem = menuItems.find((item) => item.type === 'file')

    if (foundItem) {
      return {
        path: foundItem.path,
        title: foundItem.name,
      }
    } else {
      return menuItems
        .filter((item) => item.type === 'folder')
        .map((item) => {
          return getPageUrl({ menuItems: item.children })
        })
        .filter((item) => item)[0]
    }
  }

  const splitPath = path?.split('/')
  const currentPathPart = splitPath ? splitPath[0] : null

  const foundItem = menuItems.find((item) => item.id === currentPathPart)

  if (foundItem?.type === 'file') {
    return { path: foundItem?.path ?? '', title: foundItem?.name ?? '' }
  }

  return getPageUrl({
    path: splitPath.slice(1).join('/'),
    menuItems: foundItem?.children ?? [],
  })
}

export const getFilePathWithLocal = ({
  path,
  menuItems,
}: GetPageUrl): {
  path: string
  localPath: string
  title: string
  contributorsPath: string
} => {
  if (!path || path === 'fallback') {
    const foundItem = menuItems.find((item) => item.type === 'file')

    if (foundItem) {
      return {
        path: foundItem.path,
        title: foundItem.name,
        localPath: foundItem.localPath,
        contributorsPath: foundItem.contributorsPath,
      }
    } else {
      return menuItems
        .filter((item) => item.type === 'folder')
        .map((item) => {
          return getFilePathWithLocal({ menuItems: item.children })
        })
        .filter((item) => item)[0]
    }
  }

  const splitPath = path?.split('/')
  const currentPathPart = splitPath ? splitPath[0] : null

  const foundItem = menuItems.find((item) => item.id === currentPathPart)

  if (foundItem?.type === 'file') {
    return {
      path: foundItem?.path ?? '',
      localPath: foundItem?.localPath ?? '',
      title: foundItem?.name ?? '',
      contributorsPath: foundItem?.contributorsPath ?? '',
    }
  }

  return getFilePathWithLocal({
    path: splitPath.slice(1).join('/'),
    menuItems: foundItem?.children ?? [],
  })
}
