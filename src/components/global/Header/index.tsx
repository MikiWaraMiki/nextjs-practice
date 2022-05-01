import { Flex, Heading, Stack, useDisclosure, Text, Box } from '@chakra-ui/react'
import { useInjection } from './container'

type GlobalHeaderProps = any
export function GlobalHeader(props?: GlobalHeaderProps) {
  const { isOpen } = useDisclosure()
  const { isAuthenticated, name } = useInjection()

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      bg='white'
      color='teal.500'
      {...props}
    >
      <Flex align='center' mr={5}>
        <Heading as='h1' size='lg' letterSpacing={'tighter'}>
          Conduit
        </Heading>
      </Flex>

      <Box>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          color='gray.300'
        >
          <Text>Home</Text>
          <Text>New Article</Text>
          <Text>Settings</Text>

          {isAuthenticated ? <Text>{name}</Text> : undefined}
        </Stack>
      </Box>
    </Flex>
  )
}
