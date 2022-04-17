import { ChakraProvider } from '@chakra-ui/react'
import CounterProvider from '../providers/CounterProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </ChakraProvider>
  )
}

export default MyApp
