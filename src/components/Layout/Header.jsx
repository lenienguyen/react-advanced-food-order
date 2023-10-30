import React, { useContext } from 'react'
import logo from '../../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../../store/CartContext'
import UserProgressContext from '../../store/UserProgressContext'

const Header = () => {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((totalNbItems, item) => {
    return totalNbItems + item.quantity
  }, 0)

  const showCartHandler = () => {
    userProgressCtx.showCart()
  }

  return (
    <header id="main-header">
      <div id="title">
        <h1>REACTFOOD</h1>
        <img src={logo} alt="Restaurant" />
      </div>

      <nav>
        <Button textOnly onClick={showCartHandler}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  )
}

export default Header