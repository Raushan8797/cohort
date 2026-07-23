import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate()   // it is  hook given by react - router
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      {/* <NavLink to={"/about/nested"}>fuck </NavLink> */}
      <button onClick={() => navigate('/about/nested')}></button>
      <Outlet/>
    </div>
  )
}

export default About
