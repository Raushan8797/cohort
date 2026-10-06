import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <nav>NAVBAR</nav>
      <Outlet/>
    </div>
  )
}

export default MainLayout
