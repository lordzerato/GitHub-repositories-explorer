import {
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Select,
  Center
} from '@chakra-ui/react'
import { useState } from 'react'
import useGithubApi from '../hooks/githubApi'

type User = {
  id: number
  login: string
}

const FormSearch = () => {
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const { data, isLoading, isError, error, isFetching } = useGithubApi(
    search,
    page
  )
  const users: User[] =
    data?.items.map((el: any): User => ({ id: el.id, login: el.login })) || []
  const perPage: number = 5
  const totalCount = data?.total_count ?? 0
  const totalPages: number = Math.ceil(totalCount / perPage)

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    setPage(1)
    setSearch(value)
  }
  const onChangePage = (v: number) => {
    setPage(v)
  }
  return (
    <form className="formSearch" onSubmit={onSubmitForm}>
      <FormControl>
        {/* <FormLabel>{totalPages}</FormLabel> */}
        <Input
          variant="outline"
          placeholder="Enter username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" isLoading={isLoading}>
        Search
      </Button>

      {isError && <p>Error: {(error as Error).message}</p>}
      {!isLoading && !isError && users.length === 0 && <p>No results found.</p>}

      <Accordion allowToggle>
        {users.map((user) => (
          <AccordionItem key={user.id}>
            <AccordionButton>
              {user.login}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>User ID: {user.id}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {totalPages > 1 && (
        <ButtonGroup mt={4} style={{ justifyContent: 'center' }}>
          <Button onClick={() => onChangePage(page - 1)} isDisabled={page === 1}>
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
            isLoading={isFetching && !isLoading}
          >
            Next
          </Button>
        </ButtonGroup>
      )}
    </form>
  )
}

export default FormSearch
