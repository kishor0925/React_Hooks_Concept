import React, { useRef, useState } from 'react'

const App = () => {

  // const [input, setInput] = useState("");

  const x = useRef();

  function display() {
    console.log(x.current.value)
    x.current.focus();
  }

  return (
    <div>
       <h1>Input</h1>
       <input 
        ref = {x}
        type="text"
        // value={input}
        // onChange={(event) => setInput(event.target.value)}
      />
      <p>My name is : {x.current?.value}</p>

      <button onClick={display}>
        Show Input
      </button>
    </div>
  )
}

export default App