import { useQuery } from '@tanstack/react-query'

const useApi = (username: string, page: number = 1) => {
  return useQuery({
    queryKey: ['search-account', `p=${page}&q=${username}`],
    queryFn: async () => {
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}+in%3Alogin+type%3Auser&per_page=5&page=${page}&type=users`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
            Accept: 'application/vnd.github.text-match+json'
          }
        }
      )
      if (!res.ok) throw new Error('Error fetching')
      const data = await res.json()
      return data
    },
    enabled: !!username,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })
}

export default useApi
