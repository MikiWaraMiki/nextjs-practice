import { StarIcon } from '@chakra-ui/icons'
import { Button, ButtonProps, Flex, Text } from '@chakra-ui/react'
import { useCallback, useState } from 'react'

export type LikeButtonProps = {
  count?: number
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
} & ButtonProps
export function LikeButton(props: LikeButtonProps) {
  return (
    <Button
      background='white'
      border='1px'
      borderColor={'teal.500'}
      textColor='teal.500'
      size={props.size ?? 'md'}
      _hover={{ background: 'teal.500', textColor: 'white' }}
    >
      <Flex>
        <StarIcon></StarIcon>
        <Text paddingLeft={1}>{props.count ?? 0} likes</Text>
      </Flex>
    </Button>
  )
}
