import type { User, Repository } from '../types/github'

const getGithubHeaders = (): Record<string, string> => {
  return {
    Accept: 'application/vnd.github+json',
    ...(import.meta.env.VITE_AUTH_TOKEN && {
      Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
    })
  }
}

export const fetchSearchUser = async (uname: string, pg: number) => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${uname}+in%3Alogin+type%3Auser&per_page=5&page=${pg}&type=users`,
    { headers: getGithubHeaders() }
  )
  if (!res.ok) throw new Error('Error fetching search-users')
  const { items, total_count } = await res.json()
  const users: User[] = items.map((el: { login: string; id: number }) => ({
    login: el.login,
    id: el.id
  }))
  return { users, total_count }
}

export const fetchSearchRepo = async (uname: string) => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:${uname}`,
    { headers: getGithubHeaders() }
  )
  if (!res.ok) throw new Error('Error fetching search-repos')
  const data = await res.json()
  const items: Repository[] = data.items.map((el: Repository) => ({
    id: el.id,
    name: el.name,
    score: el.score,
    description: el.description
  }))
  return items
}
