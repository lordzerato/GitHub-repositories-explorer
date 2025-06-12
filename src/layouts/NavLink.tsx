import { Link as ChakraLink } from '@chakra-ui/react'
import {
  NavLink as RouterLink,
  useMatch,
  useResolvedPath
} from 'react-router-dom'
import { useColorModeValue } from '@/components/ui/color-mode'

interface NavLinkProps {
  to: string
  onClick?: () => void
  children: React.ReactNode
}

export const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  const activeColor = useColorModeValue('bg.purple.700', 'bg.purple.300')
  const inactiveColor = useColorModeValue('black', 'white')
  const hoverColor = useColorModeValue('bg.purple.600', 'bg.purple.400')

  const location = useResolvedPath(to)
  const isActive = useMatch({ path: location.pathname, end: true })

  return (
    <ChakraLink
      as={RouterLink}
      // @ts-expect-error
      to={to}
      variant="plain"
      justifyContent="start"
      onClick={onClick}
      color={isActive ? activeColor : inactiveColor}
      fontWeight={isActive ? 'medium' : 'normal'}
      _focus={{ boxShadow: 'none', outline: 'none' }}
      _hover={{
        textDecoration: 'none',
        color: isActive ? activeColor : hoverColor
      }}
    >
      {children}
    </ChakraLink>
  )
}
