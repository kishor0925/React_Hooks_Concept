import React, { useEffect, useState } from 'react';

export const UseEffects = () => {

  const [count , setCount] = useState(0);
  useEffect( () => {
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  })
  return (
    <>
    <p>I m rendering {count}</p>
    </>
  )
};