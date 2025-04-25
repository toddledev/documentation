import type { Context } from 'hono'

export const handleThumbnail = async (ctx: Context) => {
  const videoId = ctx.req.param('videoId')
  const url = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const response = await fetch(url)
  if (!response.ok) {
    return new Response(null, {
      status: 404,
      headers: {
        'Content-Type': 'image/jpeg',
      },
    })
  }
  const contentType = response.headers.get('Content-Type')
  const contentLength = response.headers.get('Content-Length')
  const headers = new Headers()
  headers.set('Content-Type', contentType ?? 'image/jpeg')
  headers.set('Content-Length', contentLength ?? '0')
  headers.set('Cache-Control', 'public, max-age=3600')
  headers.set('Access-Control-Allow-Origin', '*')
  headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  headers.set('Access-Control-Max-Age', '3600')
  headers.set('Cross-Origin-Resource-Policy', 'cross-origin')
  return new Response(response.body, {
    status: response.status,
    headers,
  })
}
