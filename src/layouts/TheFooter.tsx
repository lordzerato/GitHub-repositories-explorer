import { Box, Stack, Text } from '@chakra-ui/react'

const TheFooter = () => (
  <Box as="footer" bg="bg.header" py={8} mt="auto">
    <Stack gap={2} align="center" textAlign="center">
      <Text fontWeight="bold">Fauzi R – Fullstack Developer</Text>
      <Text fontSize="sm">Jakarta, Indonesia</Text>
      <Text fontSize="sm">🚧 This project is currently in development.</Text>
      <Text fontSize="sm">
        ⚙️ Built with React · TypeScript · Vite · Chakra UI
      </Text>
      <Text fontSize="xs" opacity={0.7}>
        © 2025 Fauzi R. All rights reserved.
      </Text>
    </Stack>
  </Box>
)

export default TheFooter
