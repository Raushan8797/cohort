import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'

const Mainlayout = () => {
  return (
    <div className='p-2'> 
      <Navbar/>
      <div className='p-4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Mainlayout
