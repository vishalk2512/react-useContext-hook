import { createContext, useContext, useReducer } from 'react'
import countReducer from '../reducers/countReducer'

const CountContext = createContext()

export const useCountContext = () => {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCountContext must be used within a CountProvider')
  }
  return context
}

export const CountProvider = ({ children }) => {
  const [count, countDispatch] = useReducer(countReducer, 0)

  return (
    <CountContext.Provider value={{ count, countDispatch }}>
      {children}
    </CountContext.Provider>
  )
}
