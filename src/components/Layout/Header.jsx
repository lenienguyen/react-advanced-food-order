import React, { useContext } from 'react'
import logo from '../../assets/logo.jpg'
import CartContext from '../../store/cart-context'

const Header = () => {
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <header id="main-header">
      
      <h1 id="title">
        <img src={logo} /> REACTFOOD
      </h1>

      <button className="text-button">Cart ({numberOfCartItems})</button>
    </header>
  )
}

export default Header