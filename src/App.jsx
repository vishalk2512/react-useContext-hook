import Counter from './components/Counter'
import DecreaseCounter from './components/DecreaseCounter'
import IncreaseCounter from './components/IncreaseCounter'
import { CountProvider } from './contexts/countContext'

function App() {
  return (
    <>
      <CountProvider>
        <IncreaseCounter />
        <Counter />
        <DecreaseCounter />
      </CountProvider>
    </>
  )
}

export default App
