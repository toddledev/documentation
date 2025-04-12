import type { FetchContributors } from '../src/types'

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

    const commits = (await response.json()) as any[]

    const contributors = commits.map(({ author }) => {
      return {
        avatar: author.avatar_url,
        username: author.login,
      }
    })

    const lastEditedAt = commits[0].commit.committer.date

    return { contributors, lastEditedAt }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
}
