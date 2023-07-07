import { useCountContext } from '../contexts/countContext'

const IncreaseCounter = () => {
  const { countDispatch } = useCountContext()

  return (
    <button onClick={() => countDispatch({ type: 'INCREASE', step: 1 })}>
      Increase
    </button>
  )
}
export default IncreaseCounter
