import * as fs from 'fs'
import { getMenuItemsFromRepoItems } from '../src/utils'

// Setup
if (fs.existsSync('./dist/docs')) {
  fs.rmdirSync('./dist/docs', { recursive: true })
}
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}
fs.mkdirSync('./dist/docs')
// Copy over all markdown files + folders
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
  owner: 'nordcraftengine',
  repository: 'documentation',
  branch: 'main',
})
// Save the menu structure to a JSON file
fs.writeFileSync(
  './dist/menuItems.json',
  JSON.stringify(menuItems, null, 2),
  'utf-8',
)
