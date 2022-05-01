import { useRouter } from 'next/router'

export default function AboutPage() {
  const router = useRouter()

  return (
    <button type='button' onClick={() => router.push('/news/1')}>
      遷移する
    </button>
  )
}
