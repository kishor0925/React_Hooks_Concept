import React from 'react'
import Container from './Container'
import { useState } from 'react'
import { createContext } from 'react';
import { use } from 'react';


const App = () => {


  const [theme, setTheme] = useState("light");

  const toggletheme = () => 
  {
    setTheme( (curr) => (curr === "light" ? "dark" : "light"));
  }

 
  return (
    <ThemeContext.Provider value={theme}>
      <button
        onClick={toggletheme}
       >
          change theme
       </button>
       <h1>App Component</h1>
       <Container/>
    </ThemeContext.Provider>
  )
}


export const ThemeContext =  createContext();

export default App