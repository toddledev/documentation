import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'
import {
  createSearchIndex,
  fetchContent,
  fetchContributors,
  search,
} from './routes'
import type { Env } from './types'
import { errorResponse } from './utils'

const app = new Hono<{ Bindings: Env }>()

app.use(secureHeaders())
app.use(
  cors({
    origin: (o) =>
      o.endsWith('localhost:9000') || o.endsWith('toddle_docs.toddle.site')
        ? o
        : undefined,
  }),
)

// URLs like: http://localhost:8989/content/toddledev/documentation/main/the-editor/canvas
app.get(`content/:owner/:repository/:branch/:path{.*}?`, async (ctx) => {
  const owner = ctx.req.param('owner')
  const repository = ctx.req.param('repository')
  const branch = ctx.req.param('branch')
  const path = ctx.req.param('path')

  return fetchContent({
    params: { owner, repository, branch, path },
    ctx,
  })
})

app.get(`contributors/:owner/:repository/:path{.*}?`, async (ctx) => {
  const owner = ctx.req.param('owner')
  const repository = ctx.req.param('repository')
  const path = ctx.req.param('path')

  return fetchContributors({ owner, repository, path })
})

app.post('create-search-index', async (ctx) => {
  const isAuthenticated =
    ctx.req.header('Authorization') === ctx.env.SEARCH_INDEX_AUTH_TOKEN

  if (!isAuthenticated) {
    return errorResponse('Not authorized', { status: 401 })
  }

  return createSearchIndex({
    params: { owner: 'spark-agency', repository: 'documentation' },
    ctx,
  })
})

app.post('search', async (ctx) => {
  const data = (await ctx.req.json()) as { searchTerm?: string }

  return search({ params: { searchTerm: data.searchTerm ?? '' }, ctx })
})

export default app
