import { Badge, Box, Heading, Text } from '@chakra-ui/react'
import { useInjection } from './container'

export type PopularTagBlockProps = any
export function PopularTagBlock() {
  const { tags } = useInjection()

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' padding={4}>
      <Text>PopularTags</Text>

      <Box>
        {tags.map((tag) => (
          <Badge key={tag.id} mr={2} paddingY={2} mt={2}>
            {tag.name}
          </Badge>
        ))}
      </Box>
    </Box>
  )
}
