import { Avatar, Badge, Box, Flex, Tag, Text } from '@chakra-ui/react'
import { LikeButton } from '@/components/atoms/likeButton'

export type ArticleCardPorps = {
  className?: string
}

export function ArticleCard(props?: ArticleCardPorps) {
  const tags = [
    {
      id: 1,
      name: 'tagA',
    },
    {
      id: 2,
      name: 'tagB',
    },
  ]
  return (
    <Box borderTop={1} borderColor='gray.500' padding={4}>
      <Flex className='article-header' align='center' justify='space-between' wrap='wrap'>
        <Flex>
          <Avatar name='test' size='sm' marginY='auto'></Avatar>
          <Box paddingLeft={4}>
            <Text fontSize={16} color='teal.500'>
              Test
            </Text>
            <Text fontSize={12} color='gray.300'>
              {new Date('2022-05-01').toISOString()}
            </Text>
          </Box>
        </Flex>
        <Box>
          <LikeButton size='sm' />
        </Box>
      </Flex>

      <Box paddingY={4}>
        <div>
          <Text fontSize={24}>Test Title</Text>
        </div>
        <div>
          <Text fontSize={16} color='gray.500'>
            titletitletitletitiie
          </Text>
        </div>
      </Box>

      <Flex align='center' justify='space-between' wrap='wrap'>
        <Box>
          <Text fontSize={12} color='gray.500'>
            read more...
          </Text>
        </Box>

        <Box maxWidth={'50%'}>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              padding={2}
              marginLeft={2}
              backgroundColor='white'
              border='solid'
              borderColor='gray.500'
              color='gray.500'
              fontSize={12}
            >
              <Text>{tag.name}</Text>
            </Tag>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}
