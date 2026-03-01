import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './App';

const User = () => {

  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color : theme === "light" ? "red" : "teal"
  }
  return (
    <div>
     <h1 style={style}> User</h1>
    </div>
  )
}

export default User