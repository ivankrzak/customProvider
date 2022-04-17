import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from 'react'

interface CounterContextType {
  counter: number
  isCounterEven: boolean
  incrementCounter: () => void
  resetCounter: () => void
}

interface Props {
  children: ReactNode
}

const CounterContext = createContext({} as CounterContextType)

export const useCounter = () => useContext(CounterContext)

const CounterProvider: FunctionComponent<Props> = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const isCounterEven = counter % 2 === 0

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <CounterContext.Provider
      value={{ counter, isCounterEven, incrementCounter, resetCounter }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
