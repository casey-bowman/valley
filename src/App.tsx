import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


        <h1>tx-ray</h1>
      <div className="card">
        <button onClick={() => {console.log('count going up'); setCount((count) => count + 1)}}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
