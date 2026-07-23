import React  from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router'

const  Mainlayout =  () => {
  return (
    <div className='h-screen p-2 flex grid grid-cols-[1fr_7fr]'>
      <Navbar/>
      <div className='h-full p-2 overflow-auto'>
        <Outlet/>
      </div>
      </div>
  )
}

export default Mainlayout
