import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={"wrapper"}>
        <div data-cy={"incrementer"} className={"incrementer"} onMouseUpCapture={() => setCount(count + 1)}>
            Click me you won't
        </div>
        <p data-cy={"count"} className={"count"}>{count}</p>

        <div className={"form-group"}>
            <p for={"input"} data-cy={"label"}>Label</p>
        <p data-cy="input" className={"text-box"} contentEditable={true} >
            Value
        </p>
        </div>
    </div>
  )
}

export default App
