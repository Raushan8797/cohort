import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const About = () => {
  let {count, setCount} =useContext (MyStore)
  console.log("About rendering");
  return (
    <div>
      <h1>ABOUT - {count}</h1>
      <button className='bg-yellow-400' onClick={() => setCount(count+1)}>fuck</button>
    </div>
  )
}

export default About
