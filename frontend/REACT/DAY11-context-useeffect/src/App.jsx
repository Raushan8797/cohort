import React, { useContext, useEffect } from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { MyStore } from './context/MyContext'
import { ContextProvider } from './context/MyContext'



const App = () => {

  useEffect(() => {
    console.log("app rendering");
    
  } , [])




  return (
    <div>
      <h1>hello</h1>
      
      <ContextProvider>
      <Home/>
      <About/>
      <Contact/> 
      </ContextProvider>
      
    </div>
  )
}

export default App
