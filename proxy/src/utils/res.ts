export const json = <B = any>(
  body: B,
  config?: { status?: number; headers?: Record<string, string> },
) => {
  return new Response(JSON.stringify(body), {
    status: config?.status ?? 200,
    headers: {
      ...(config?.headers ?? {}),
      'content-type': 'application/json',
    },
  })
}

export const errorResponse = (
  message: string,
  config?: { status?: number; headers?: Record<string, string> },
) => {
  return new Response(message, {
    status: config?.status ?? 500,
    headers: {
      ...(config?.headers ?? {}),
      'content-type': 'application/text',
    },
  })
}
