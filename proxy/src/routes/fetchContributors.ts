import type { FetchContributors } from '../types'
import { errorResponse, json } from '../utils'

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'CF',
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
      return errorResponse('Could not fetch contributors')
    }

    const commits = (await response.json()) as any[]

    const contributors = commits.map(({ author }) => {
      return {
        avatar: author.avatar_url,
        username: author.login,
      }
    })

    const lastEditedAt = commits[0].commit.committer.date

    return json({ contributors, lastEditedAt })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    return errorResponse('Could not fetch contributors')
  }
}
