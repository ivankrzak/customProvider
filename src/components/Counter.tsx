import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import { useCounter } from '../providers/CounterProvider'

export const Counter = () => {
  const { counter, incrementCounter, resetCounter } = useCounter()

  return (
    <Box width={500} textAlign="center" p="20px">
      <Heading>Counter is {counter}</Heading>
      <Flex w="full" justifyContent="space-between">
        <Button onClick={incrementCounter} colorScheme="blue">
          Increment
        </Button>
        <Button onClick={resetCounter}>Reset</Button>
      </Flex>
    </Box>
  )
}
