import type { FetchContributors } from '../src/types'

interface CommitAuthor {
  avatar_url?: string
  login?: string
}

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'CF',
}

if (process.env.COMMITS_KEY) {
  headers.Authorization = `Bearer ${process.env.COMMITS_KEY}`
}

export const fetchContributors = async ({
  owner,
  repository,
  path,
}: FetchContributors) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}/commits?path=${path}`,
      { headers },
    )

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error(
        'Could not fetch contributors for url',
        `https://api.github.com/repos/${owner}/${repository}/commits?path=${path}`,
        response.status,
      )
      return
    }

    const commits = (await response.json()) as Array<{
      author?: CommitAuthor | null
      commit: { committer: { date: string } }
    }>

    const contributors: Map<string, string> = new Map()
    commits.forEach(({ author }) => {
      if (!author?.avatar_url || !author.login) {
        return
      }
      // Only add unique contributors
      contributors.set(author.login, author.avatar_url)
    })

    const lastEditedAt = commits[0].commit.committer.date

    return {
      contributors: Array.from(contributors).map(([username, avatar]) => ({
        avatar,
        username,
      })),
      lastEditedAt,
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
}
