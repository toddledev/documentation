export const getFrontMatter = (text?: string | null) => {
  if (typeof text !== 'string' || text.trim().length === 0) {
    return { attributes: {}, body: '' }
  }
  const frontMatterRegex = /---\s*([\s\S]*?)\s*---/
  const frontMatter = text.match(frontMatterRegex)
  const keyValueRegex = /^\w+:\s*(.*?)$/gm
  return {
    attributes: frontMatter
      ? Object.fromEntries(
          Array.from(frontMatter[1].matchAll(keyValueRegex)).map((match) => [
            match[0].split(':')[0],
            match[1].trim(),
          ]),
        )
      : {},
    body: frontMatter ? text.replace(frontMatterRegex, '').trim() : text.trim(),
  }
}
