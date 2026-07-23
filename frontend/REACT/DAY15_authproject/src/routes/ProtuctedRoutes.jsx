import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router'
import { Auth } from '../context/AuthContext'

const ProtuctedRoutes = () => {
    const {loogedUser} = useContext(Auth)
 
    if (!loogedUser) {
        return <Navigate to={"/"}/>
    }
  return <Outlet/>
}

export default ProtuctedRoutes
