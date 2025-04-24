import { createClient } from '@clickhouse/client-web'
import type { Context } from 'hono'
import type { Env } from '../types'

interface Feedback {
  path: string
  rating: number
  message: string
  created_at: string
  ip_hash: string
}

export async function handleFeedback(ctx: Context<{ Bindings: Env }>) {
  try {
    const feedback = await ctx.req.json<Feedback | undefined | null>()
    if (!feedback) {
      return ctx.json({ error: 'Invalid input' }, 400)
    }
    const { path, rating, message } = feedback
    if (
      typeof path !== 'string' ||
      path.length > 255 ||
      typeof rating !== 'number' ||
      rating < 0 ||
      rating > 3 ||
      typeof message !== 'string' ||
      message.length > 1024
    ) {
      return ctx.json({ error: 'Invalid input' }, 400)
    }
    const saveValueInClickhouse = async () => {
      const ip_hash = await ipHash(ctx.req.raw.headers)
      const created_at = new Date().toISOString()
      const clickHouseClient = createClient({
        url: ctx.env.CLICKHOUSE_HOST,
        username: ctx.env.CLICKHOUSE_USER,
        password: ctx.env.CLICKHOUSE_PASSWORD,
      })

      const result = await clickHouseClient.insert({
        table: 'default.feedback',
        values: {
          path,
          rating,
          message,
          created_at,
          ip_hash,
        },
        format: 'JSONEachRow',
      })
      if (!result.executed) {
        // eslint-disable-next-line no-console
        console.error('Failed to insert feedback')
      }
    }
    ctx.executionCtx.waitUntil(saveValueInClickhouse())
    return ctx.json({ success: true }, 200)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error handling feedback:', error)
    return ctx.json({ error: 'Invalid input' }, { status: 400 })
  }
}

const ipHash = (headers: Headers) => {
  const now = new Date()
  const ip =
    headers instanceof Headers
      ? (headers.get('x-real-ip') ?? headers.get('cf-connecting-ip'))
      : (headers['x-real-ip'] ?? headers['cf-connecting-ip'])
  return ip ? sha1(`${now.getMonth()}-${now.getDate()}-${ip}`) : 'unknown'
}

export const sha1 = async (data: string) => {
  const payload = new Uint8Array(
    data.split('').map(function (c) {
      return c.charCodeAt(0)
    }),
  )
  const hashBuffer = await crypto.subtle.digest('SHA-1', payload)
  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}
