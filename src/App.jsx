import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={"wrapper"}>
        <div data-cy={"incrementer"} className={"incrementer"} onClick={() => setCount(count + 1)}>
            Click me you won't
        </div>
        <p data-cy={"count"} className={"count"}>{count}</p>
    </div>
  )
}

export default App
