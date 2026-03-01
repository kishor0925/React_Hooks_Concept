import React from 'react'
import { useReducer } from 'react';

const App = () => {

  

  function reducerFn(state, action){
    const type = action.type;
    if(type === "incre")
    {
      return {count : state.count + 1};
    }
    else if(type === "decre")
    {
      return {count : state.count - 1};
    }
    else
    {
      return {count : state.count = 0}
    }
  }


  const [state, dispatch] =  useReducer(reducerFn, {count : 0});
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch({type : "incre"})}>+</button><br />
      <strong>{state.count}</strong><br />
      <button onClick={() => dispatch({type : "decre"})}>-</button><br /><br />
      <button onClick={() => dispatch({type : "reset"})}>Reset</button><br />
    </div>
  )
}

export default App