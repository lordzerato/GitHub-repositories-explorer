import { Outlet } from 'react-router-dom'
import { Container, Flex } from '@chakra-ui/react'
import { ColorModeProvider } from '@/components/ui/color-mode'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

const MainLayout = () => {
  return (
    <Flex id="main-layout" minH="100vh" direction="column">
      <ColorModeProvider>
        <TheHeader />
        <Container as="main" maxW="breakpoint-3xl" py={4} minH="90vh">
          <Outlet />
        </Container>
        <TheFooter />
      </ColorModeProvider>
    </Flex>
  )
}

export default MainLayout
