import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log("in use Effect")
    },[getItems])

  return (
    <div>
        List

        {items.map( (items , index) => (
          <li key={index}>{items}</li>  
        ))}
        
    </div>

  )
}

export default List