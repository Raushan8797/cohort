import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE

      </h1>
      <Outlet/>
    </div>
  )
}

export default Home
