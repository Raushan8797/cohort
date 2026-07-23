import React from 'react'
import { Navigate } from 'react-router'

const ProtuctedRouts = ({Children}) => {
    let isAdmin = false
    if(!isAdmin){
        alert("fuck you bitch")
      return  <Navigate to={"/"}/>
    }
  return Children
}

export default ProtuctedRouts
