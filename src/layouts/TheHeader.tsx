import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Drawer,
  Portal,
  CloseButton
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoCodeSlash, IoLogoGithub, IoMenu } from 'react-icons/io5'
import { ColorModeButton } from '@/components/ui/color-mode'
import { NavLink } from './NavLink'

const linkItems = [
  { name: 'User Finder', path: '/' },
  { name: 'Repository Finder', path: '/repos' },
  { name: 'Trending Page', path: '/trends' }
]

const GithubButton = () => (
  <IconButton
    aria-label="link-github"
    size="sm"
    asChild
    variant="ghost"
    css={{
      _icon: {
        width: '5',
        height: '5'
      }
    }}
  >
    <a
      href="https://github.com/lordzerato/GitHub-repositories-explorer"
      target="_blank"
    >
      <IoLogoGithub />
    </a>
  </IconButton>
)

const TheHeader = () => {
  const [open, setOpen] = useState(false)
  return (
    <Flex
      bg="bg.header"
      gap={14}
      paddingY={2}
      paddingX={{ base: '8px', md: '16px', lg: '32px' }}
    >
      <Flex gap={3} alignItems="center">
        <Box
          background="bg.purple.500"
          rounded={8}
          boxSize={8}
          justifyItems="center"
          alignContent="center"
        >
          <IoCodeSlash color="white" />
        </Box>
        <Heading size="lg" fontWeight={700}>
          RepEx
        </Heading>
      </Flex>
      <HStack gap={8} display={{ base: 'none', md: 'inherit' }}>
        {linkItems.map((item) => (
          <NavLink key={item.name} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </HStack>
      <Flex marginStart="auto">
        <Flex display={{ base: 'none', md: 'inherit' }}>
          <GithubButton />
          <ColorModeButton />
        </Flex>
        <Drawer.Root
          size="sm"
          placement="bottom"
          open={open}
          onOpenChange={(e) => setOpen(e.open)}
        >
          <Drawer.Trigger asChild>
            <IconButton
              display={{ base: 'inherit', md: 'none' }}
              aria-label="menu-mobile"
              size="sm"
              variant="ghost"
              css={{
                _icon: {
                  width: '5',
                  height: '5'
                }
              }}
            >
              <IoMenu />
            </IconButton>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content roundedTop={13}>
                <Drawer.Header></Drawer.Header>
                <Drawer.Body>
                  <Flex gap={8} direction="column">
                    {linkItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </Flex>
                </Drawer.Body>
                <Drawer.Footer>
                  <GithubButton />
                  <ColorModeButton />
                </Drawer.Footer>
                <Drawer.CloseTrigger>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </Flex>
    </Flex>
  )
}

export default TheHeader
