import React, { useState } from 'react'

const App = () => {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  const double = slowfunction(number);

  const styles = {
    backgroundColor: dark ? "black" : "white",
    color : dark ? "white" : "black",
  }
  return (
    <div>
      <input
       type="number"  
       value={number}
       onChange={(e) => setNumber(e.target.value)}
       />
       <button
       onClick={() => setDark(curr => !curr)}
       >
        ToggleTheme
       </button>
       <div style={styles}>
            {double}
       </div>

    </div>
  )
}

export default App;

function slowfunction(num)
{ 
  for(let i = 0; i < 100000000; i++){}
  return num * 2;
}