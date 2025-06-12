import {
  Field,
  Input,
  Button,
  ButtonGroup,
  NativeSelect,
  Spinner,
  Alert
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/accordion'
import { useState } from 'react'
import { useSearchUser, useSearchUserRepos } from '@/hooks/useGithub'
import ReposCard from './ReposCard'

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
  } = useSearchUserRepos(openUser)
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
  const onChangeUser = (index: number) => {
    if (index < 0) return
    setOpenUser(users[index].login)
  }
  return (
    <form className="formSearch" onSubmit={onSubmitForm}>
      <Field.Root>
        <Field.Label color="bg.text">Username</Field.Label>
        <Input
          colorPalette="bg.palette"
          size="lg"
          variant="subtle"
          borderRadius={8}
          placeholder="Enter at least 3 characters"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Field.Root>
      <Button
        type="submit"
        variant="surface"
        colorPalette="bg.palette"
        borderRadius={8}
        disabled={value.length < 3}
        loading={isLoadingUser}
      >
        Search
      </Button>
      {isErrorUser && <p>Error: {(errorUser as Error).message}</p>}
      {flagSubmit && !isLoadingUser && !isErrorUser && !users.length && (
        <p>No results found.</p>
      )}
      <Accordion allowToggle onChange={onChangeUser} color="purple">
        {users.map((user) => (
          <AccordionItem key={user.id}>
            <AccordionButton>
              {user.login}
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {openUser === user.login && isLoadingRepos && (
                <Spinner size="lg" />
              )}
              {openUser === user.login && isErrorRepos && (
                <Alert.Root
                  status="error"
                  mt={2}
                  borderRadius="md"
                  variant="subtle"
                >
                  <Alert.Indicator />
                  <Alert.Description fontSize="sm">
                    {(errorRepos as Error).message}
                  </Alert.Description>
                </Alert.Root>
              )}
              {openUser === user.login &&
                !isLoadingRepos &&
                !isErrorRepos &&
                !repos.length && <p>No results found.</p>}
              {repos.map((repo) => (
                <ReposCard key={repo.id} item={repo} />
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {totalPages > 1 && (
        <ButtonGroup mt={4} style={{ justifyContent: 'center' }}>
          <Button
            colorPalette="bg.palette"
            variant="surface"
            borderRadius={8}
            onClick={() => onChangePage(page - 1)}
            disabled={page === 1}
            loading={isFetchingUser && !isLoadingUser}
          >
            Prev
          </Button>

          <NativeSelect.Root
            width="auto"
            variant="subtle"
            colorPalette="bg.palette"
            borderRadius={8}
          >
            <NativeSelect.Field
              value={page}
              height="2.67rem"
              borderRadius={8}
              onChange={(e) => onChangePage(Number(e.target.value))}
            >
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1
                return (
                  <option key={pageNum} value={pageNum}>
                    Page {pageNum}
                  </option>
                )
              })}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>

          <Button
            colorPalette="bg.palette"
            variant="surface"
            borderRadius={8}
            onClick={() => onChangePage(page + 1)}
            disabled={page === totalPages}
            loading={isFetchingUser && !isLoadingUser}
          >
            Next
          </Button>
        </ButtonGroup>
      )}
    </form>
  )
}

export default FormSearch
