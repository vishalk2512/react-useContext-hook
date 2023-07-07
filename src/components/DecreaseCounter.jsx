import { useCountContext } from '../contexts/countContext'

const DecreaseCounter = () => {
  const { countDispatch } = useCountContext()

  return (
    <button onClick={() => countDispatch({ type: 'DECREASE', step: 1 })}>
      Decrease
    </button>
  )
}
export default DecreaseCounter
