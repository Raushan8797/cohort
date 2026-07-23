import React, { useState } from 'react'

const Counter = () => {
  console.log('counter is rerendring.....');
  
    let [count,setcount] = useState(0)
  return (
    <div className='bg-emerald-300'>
      <h1>Count is {count}</h1>
      <button className='bg-amber-200' onClick={()=>{
        setcount(count+1)
      }} >INCREASE</button>
    </div>
  )
}

export default Counter
