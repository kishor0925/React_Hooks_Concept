import React, { useState } from 'react'
const UseStates = () => {

   
  const [ customer , setCustomer] = useState("");
  const [customers , setCustomers] = useState([]);

 
  function addcustomer(){

    if(customer.trim() === "") return;
    setCustomers([...customers, customer])
    setCustomer("");
  }

  return (
    <div>
        <h1>Use State Example</h1>

        <h2>Add Customer</h2>
        <input 
        type="text"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        />
        <button 

        onClick={() => addcustomer()}
        > 
          Add Customer
        </button>

        <h2>Total Customer : {customers.length}</h2>

        <ul style={{listStyleType : 'none'}}>
          {customers.map( (cust, index)  => 
            <li key={index}>
              {cust}
          </li> )}
        </ul>
    </div>
  )
}

export default UseStates;