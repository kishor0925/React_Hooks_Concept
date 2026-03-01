import React from 'react'
import { useReducer } from 'react'

const App = () => {



  function reducerFn(state, action){
    if(action.type === "toogle")
    {
      return {theme : !state.theme}
    }

  }
  const [state , dispatch] = useReducer(reducerFn, {theme : false});

  const style = {
    backgroundColor : state.theme ? "white" : "black",
    color : state.theme ? "black" : "teal",



  }
  const textcolor = {
    
  }



  
  return (
    <div>
      <h1 style={style}>UseReducer2.0</h1>

      <button
       onClick={() => dispatch({type : "toogle"})}
      >
        Toggle Theme
      </button>


      <button
      onClick={() => dispatch({type : "textcolor"})}
      >
        Change Text Color
      </button>


    </div>
  )
}

export default App