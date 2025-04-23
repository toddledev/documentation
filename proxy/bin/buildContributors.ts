import * as fs from 'fs'
import { chunk } from 'lodash'
import { fetchContributors } from './fetchContributors'

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}
if (fs.existsSync('./dist/contributors')) {
  // eslint-disable-next-line no-console
  console.log('Contributors already exist - skipping contributor setup')
  process.exit()
}
fs.mkdirSync('./dist/contributors')
// Copy over all markdown files + folders
fs.cpSync('../docs', './dist/contributors', {
  recursive: true,
  filter: (src) => !src.endsWith('.webp'),
})
// Read all files
const files = (
  fs.readdirSync('./dist/contributors', { recursive: true }) as string[]
).filter((path) => path.endsWith('.md'))
const chunks = chunk(files, 10)
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

for (const c of chunks) {
  await Promise.all(
    c.map(async (path) => {
      const fileContributors = await fetchContributors({
        owner: 'nordcraftengine',
        repository: 'documentation',
        path: `docs/${path}`,
      })
      if (fileContributors) {
        fs.writeFileSync(
          './dist/contributors/' + path.replace('.md', '.json'),
          JSON.stringify(fileContributors, null, 2),
          'utf-8',
        )
      }
      // Remove the .md file again
      fs.rmSync('./dist/contributors/' + path)
    }),
  )
  await sleep(250)
}
