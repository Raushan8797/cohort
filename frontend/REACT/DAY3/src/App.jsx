import React, { useState } from 'react'
import Contact from './Contact'


const App = () => {
  let [count , setCount]=  useState(0)
  console.log("updated");
  console.log(count);
  
  
  return (
    <div>
      <h1>count is - {count}</h1>
      <button onClick={()=>{
       setCount(count+1)
      }}
      >increment</button>
    </div>
  )
}

export default App
