import { Client } from 'typesense'

export const getTypesenseClient = ({
  apiKey,
  connectionTimeoutSeconds = 60,
  host,
}: {
  apiKey: string
  connectionTimeoutSeconds?: number
  host: string
}) =>
  new Client({
    nodes: [
      {
        host,
        port: 443,
        protocol: 'https',
      },
    ],
    apiKey,
    connectionTimeoutSeconds,
  })
