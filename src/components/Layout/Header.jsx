import React from 'react'
import logo from '../../assets/logo.jpg'
import CartIcon from '../Cart/CartIcon'

const Header = () => {

  return (
    <header id="main-header">
      
      
      <h1 id="title">
        <img src={logo} /> REACTFOOD
      </h1>

      <CartIcon />
    </header>
  )
}

export default Header