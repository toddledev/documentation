import * as fs from 'fs'
import { getMenuItemsFromRepoItems } from '../src/utils'

// Setup
try {
  fs.rmdirSync('./dist', { recursive: true })
  // eslint-disable-next-line no-empty
} catch {}
fs.mkdirSync('./dist')
fs.mkdirSync('./dist/docs')
// Copy over all markdown files
fs.cpSync('../docs', './dist/docs', {
  recursive: true,
  filter: (src) => !src.endsWith('.webp'),
})
// Read all files
const files = (
  fs.readdirSync('./dist/docs', { recursive: true }) as string[]
).sort((a, b) => {
  const aParts = a.split('/')
  const bParts = b.split('/')

  if (aParts.length === bParts.length) {
    return a.localeCompare(b)
  }
  return aParts.length - bParts.length
})
// Create menu items structure
const menuItems = getMenuItemsFromRepoItems({
  items: files.map((file) => ({
    path: `docs/${file as string}`,
    type: 'tree',
  })),
  parentPath: 'docs',
  owner: 'toddledev',
  repository: 'documentation',
  branch: 'main',
})
// Save the menu structure to a JSON file
fs.writeFileSync(
  './dist/menuItems.json',
  JSON.stringify(menuItems, null, 2),
  'utf-8',
)
