import { useQuery } from '@tanstack/react-query'
import { fetchSearchUser, fetchSearchRepo } from '../api/github'

const useSearchUser = (username: string, page: number = 1) => {
  return useQuery({
    queryKey: ['search-user', `p=${page}&q=${username}`],
    queryFn: () => fetchSearchUser(username, page),
    enabled: !!username,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}

const useSearchUserRepos = (username: string) => {
  return useQuery({
    queryKey: ['search-userRepos', `q=${username}`],
    queryFn: () => fetchSearchRepo(username),
    enabled: !!username,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}

export { useSearchUser, useSearchUserRepos }
