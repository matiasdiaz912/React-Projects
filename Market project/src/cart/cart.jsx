import React, { useContext, useState } from 'react'
import "./cart.scss"
import { cartContext } from '../context/cartContext'
import CartItem from './CartItem'

const Cart = () => {
   const [cart, setCart] = useState(false)
  const {clearCart } = useContext(cartContext)

function handleCartClick(){
    setCart(!cart)
}

  return (
  
    < div onClick={handleCartClick} className={cart ? "cartOpen" : "cartClosed"}>
         🛒

          <CartItem cart={cart} />
        <button className={cart ? 'cleanCart' : "cartHidden"} onClick={clearCart}>Limpiar Carrito</button>
    </div>
  )
}

export default Cart

