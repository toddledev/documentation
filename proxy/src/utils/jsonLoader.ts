const fileCache = new Map<string, any>()

export const loadJsonFile = async <T>(path: string): Promise<T | undefined> => {
  try {
    if (fileCache.has(path)) {
      return fileCache.get(path) as T
    }
    const content = (await import(path)).default
    const parsed = JSON.parse(content) as T
    fileCache.set(path, parsed)
    return parsed
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Unable to load ${path}`, e instanceof Error ? e.message : e)
  }
}
