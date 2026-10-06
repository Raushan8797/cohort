import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../../app/store'

const MainProtected = () => {

    let {isAuthenticated,User,isLoading} = useSelector((store) =>store.auth)
   if (isLoading) return <h1>Loaidng state...</h1>
    if (!User) {
        return <Navigate to={"/"}/>
    }
  return <Outlet/>
}

export default MainProtected
