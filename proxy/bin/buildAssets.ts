import * as fs from 'fs'
import { getMenuItemsFromRepoItems } from '../src/utils'

// Setup
fs.rmdirSync('./dist', { recursive: true })
fs.mkdirSync('./dist')
fs.mkdirSync('./dist/docs')
// Copy over all markdown files
fs.cpSync('../docs', './dist/docs', {
  recursive: true,
  filter: (src) => !src.endsWith('.webp'),
})
// Read all files
const files = fs.readdirSync('./dist/docs', { recursive: true })
// Create menu items structure
const test = getMenuItemsFromRepoItems({
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
  JSON.stringify(test, null, 2),
  'utf-8',
)
