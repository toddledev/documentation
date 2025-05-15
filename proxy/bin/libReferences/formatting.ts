/**
 * Escape `|` and `*` characters in a string to prevent them from being interpreted as Markdown formatting.
 */
export const escapeMarkdown = (text: string) =>
  text.replaceAll('|', '\\|').replaceAll('*', '\\*')
