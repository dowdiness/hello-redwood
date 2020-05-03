import { useState } from 'react'
import Counter from 'src/components/Counter'

const CounterPage = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>CounterPage</h1>
      <Counter
        className="counter"
        value={count}
        onChange={(change) => setCount(count + change)}
      />
    </div>
  )
}

export default CounterPage
