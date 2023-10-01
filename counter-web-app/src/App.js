
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div id='parent'>

      <h1>{counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <button onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default App;
