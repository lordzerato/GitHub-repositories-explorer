import { useQuery } from '@tanstack/react-query'

type User = {
  id: number
  login: string
}

type Repository = {
  name: string
  description: string
  score: number
}

const getGithubHeaders = (): Record<string, string> => {
  return {
    Accept: 'application/vnd.github+json',
    ...(import.meta.env.VITE_AUTH_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
    })
  }
}

const useSearchUser = (username: string, page: number = 1) => {
  return useQuery({
    queryKey: ['search-user', `p=${page}&q=${username}`],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}+in%3Alogin+type%3Auser&per_page=5&page=${page}&type=users`,
        { headers: getGithubHeaders() }
      )
      if (!res.ok) throw new Error('Error fetching search-users')
      const { items, total_count } = await res.json()
      const users: User[] = items.map((el: { login: string; id: number }) => ({
        login: el.login,
        id: el.id
      }))
      return { users, total_count }
    },
    enabled: !!username,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}

const useSearchRepos = (username: string) => {
  return useQuery({
    queryKey: ['search-repos', `q=${username}`],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=user:${username}`,
        { headers: getGithubHeaders() }
      )
      if (!res.ok) throw new Error('Error fetching search-repos')
      const data = await res.json()
      const items: Repository[] = data.items.map(
        (el: { name: string; score: number; description: string }) => ({
          name: el.name,
          score: el.score,
          description: el.description
        })
      )
      return items
    },
    enabled: !!username,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}

export { useSearchUser, useSearchRepos }
