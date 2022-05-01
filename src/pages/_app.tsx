import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { GlobalHeader } from '@/components/global/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
