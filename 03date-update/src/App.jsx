
import { useState } from 'react';
import './App.css'

function App() {
return (
  <>
    <Counter/>
  </>
 );
}

function Counter() {
  const [counterUpdate, setCounterupdate] = useState(0);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + counterUpdate);
  console.log(date); 
  function handleclick() {
    setCount(1);
    setCounterupdate(0)
  }
  return (



    <div>
      <div>
      <h1>Counter</h1>
      <div>{counterUpdate }</div>
        <button onClick={() => setCounterupdate((e) => e + count)}>+</button>
        <input type='number' value={counterUpdate} onChange={(e) => setCounterupdate(Number(e.target.value))}/>
      <button onClick={() => setCounterupdate((e) => e -count)}>-</button>
      </div>

      <div>
        <input type='range' min={0} max={10} value={count} onChange={(e) => setCount(Number(e.target.value))}/>
        {/* <button onClick={() => setCount((e) => e + 1)}>Plus</button> */}
        <span>{count}</span>
        {/* <button onClick={() => setCount((e) => e -1)}>Minus</button> */}
      </div>

      <div>
        <p>{counterUpdate === 0 ? "Today is " : counterUpdate>0 ? `${counterUpdate} days from today is` : `${Math.abs(counterUpdate)}  days ago was` }</p>
        <p>{date.toDateString()}</p>
      </div>
      <div>
        <button onClick={handleclick}>Reset</button>
      </div>
    </div>
  )
}

export default App
