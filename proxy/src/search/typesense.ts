import type { Context } from 'hono'
import { Client } from 'typesense'
import type { Env } from '../types'

export const getTypesenseClient = (
  ctx: Context<{ Bindings: Env }>,
  type: 'search' | 'admin',
) =>
  new Client({
    nodes: [
      {
        host: ctx.env.TYPESENSE_HOST,
        port: 443,
        protocol: 'https',
      },
    ],
    apiKey:
      type === 'admin'
        ? ctx.env.TYPESENSE_ADMIN_TOKEN
        : ctx.env.TYPESENSE_SEARCH_TOKEN,
    connectionTimeoutSeconds: type === 'admin' ? 60 * 5 : 60,
  })
