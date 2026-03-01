import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() 
{
  const [number, setNumber] = useState(0);
  const [count, setCounter] = useState(0);
  function cube(num){
    console.log("calculation done...")
    return Math.pow(num, 3);
  }

  const result = useMemo(() =>  cube(number) , [number])
  // const result = cube(number)

  return (
    <>
      <input
      type="number"
      value={number}
      onChange={(e) =>  setNumber(e.target.value)}
      />
      <h1>Cube of Number is : {result}</h1>
      <h1>Counter {count}</h1>
      <button
       onClick={() => setCounter(count + 1)}
      >
         Counter
      </button>
    </>
  )
}
export default App
