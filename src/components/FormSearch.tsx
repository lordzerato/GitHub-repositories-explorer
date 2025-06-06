import {
  FormControl,
  Input,
  Button,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Select,
  Spinner
} from '@chakra-ui/react'
import { useState } from 'react'
import { useSearchUser, useSearchRepos } from '../hooks/githubApi'
import ReposCard from './ReposCard'

type Repository = {
  name: string
  description: string
  score: number
}

const FormSearch = () => {
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [flagSubmit, setFlagSubmit] = useState(false)
  const [openUser, setOpenUser] = useState('')

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: errorUser,
    isFetching: isFetchingUser
  } = useSearchUser(search, page)
  const { users, total_count } = dataUser ?? { users: [], total_count: 0 }
  const perPage: number = 5
  const totalPages: number = Math.ceil(total_count / perPage)

  const {
    data: dataRepos,
    isLoading: isLoadingRepos,
    isError: isErrorRepos,
    error: errorRepos
  } = useSearchRepos(openUser)
  const repos = dataRepos ?? []

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value) return
    setFlagSubmit(true)
    setPage(1)
    setSearch(value)
  }
  const onChangePage = (v: number) => {
    setPage(v)
  }
  const onChangeUser = async (index: number) => {
    console.log(index)
    console.log(users[index].login)
    if (index < 0) return
    setOpenUser(users[index].login)
  }
  return (
    <form className="formSearch" onSubmit={onSubmitForm}>
      <FormControl>
        <Input
          variant="outline"
          placeholder="Enter username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" isLoading={isLoadingUser}>
        Search
      </Button>

      {isErrorUser && <p>Error: {(errorUser as Error).message}</p>}
      {flagSubmit && !isLoadingUser && !isErrorUser && !users.length && (
        <p>No results found.</p>
      )}

      <Accordion allowToggle onChange={onChangeUser}>
        {users.map((user) => (
          <AccordionItem key={user.id}>
            <AccordionButton>
              {user.login}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {openUser === user.login && isLoadingRepos && <Spinner />}
              {openUser === user.login && isErrorRepos && (
                <p>{(errorRepos as Error).message}</p>
              )}
              {openUser === user.login &&
                !isLoadingRepos &&
                !isErrorRepos &&
                !repos.length && <p>No results found.</p>}
              {repos.map((repo) => (
                <ReposCard item={repo} />
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {totalPages > 1 && (
        <ButtonGroup mt={4} style={{ justifyContent: 'center' }}>
          <Button
            onClick={() => onChangePage(page - 1)}
            isDisabled={page === 1}
            isLoading={isFetchingUser && !isLoadingUser}
          >
            Prev
          </Button>

          <Select
            value={page}
            onChange={(e) => onChangePage(Number(e.target.value))}
            width="auto"
          >
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1
              return (
                <option key={pageNum} value={pageNum}>
                  Page {pageNum}
                </option>
              )
            })}
          </Select>

          <Button
            onClick={() => onChangePage(page + 1)}
            isDisabled={page === totalPages}
            isLoading={isFetchingUser && !isLoadingUser}
          >
            Next
          </Button>
        </ButtonGroup>
      )}
    </form>
  )
}

export default FormSearch
