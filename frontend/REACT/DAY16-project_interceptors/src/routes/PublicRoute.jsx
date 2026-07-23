import React, { useContext } from 'react'
import { Outlet,Navigate } from 'react-router'
import { Auth } from '../context/AuthContext'

const PublicRoute = () => {
    const {loogedUser} = useContext(Auth)
 
    if (loogedUser) {
        return <Navigate to={"/main"}/>
    }
  return <Outlet/>
}

export default PublicRoute
