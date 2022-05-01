import { route } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useUser = () => ({
  user: null,
  loading: false,
})

export default function LoginRedirectingPage() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!(user || loading)) {
      router.push('/login')
    }
  }, [user, loading])

  return <p>Authenticating ...</p>
}
