import { Outlet } from 'react-router-dom'
import { Box, Container } from '@chakra-ui/react'

const MainLayout = () => {
  return (
    <Box
      id="main-layout"
      minH="100vh"
      m={{ base: '8px', md: '16px', lg: '32px' }}
    >
      <Container as="main" maxW="container.2xl" py={8}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default MainLayout
