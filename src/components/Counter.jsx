import { useCountContext } from '../contexts/countContext'

const Counter = () => {
  const { count } = useCountContext()
  return <h1>{count}</h1>
}
export default Counter
