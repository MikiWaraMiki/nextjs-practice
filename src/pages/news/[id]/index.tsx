import { useRouter } from 'next/router'
import { Children } from 'react'

export type NewsDetailProps = {
  children?: any
  href: string
}

export default function NewsDetail(props: NewsDetailProps) {
  const router = useRouter()

  const style = {
    marginRight: 10,
    color: router.asPath === props.href ? 'red' : 'black',
  }

  return (
    <a href={props.href} style={style}>
      <p>Hoge</p>
    </a>
  )
}
