import React, { useContext } from 'react'
import logo from '../../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../../store/CartContext'

const Header = () => {
  const cartCtx = useContext(CartContext)

  const totalCartItems = cartCtx.items.reduce((totalNbItems, item) => {
    return totalNbItems + item.quantity
  }, 0)

  return (
    <header id="main-header">
      <div id="title">
        <h1>REACTFOOD</h1>
        <img src={logo} alt="Restaurant" />
      </div>

      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  )
}

export default Header