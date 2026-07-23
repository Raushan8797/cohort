import React from 'react'
import CartCard from "../component/CartCard"
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const CartScreen = () => {
  let {cartItems} = useContext(MyStore)
  return (
    <div className=' h-screen'>

      {
        cartItems.map((elem) => {
            return <CartCard  product = {elem}  />
        }) 
        
      }
    </div>
  )
}

export default CartScreen
