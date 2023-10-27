import React from 'react'
import logo from '../../assets/logo.jpg'
import Button from '../UI/Button'

const Header = () => {

  return (
    <header id="main-header">
      <div id="title">
        <h1>REACTFOOD</h1>
        <img src={logo} alt="Restaurant" />
      </div>

      <nav>
        <Button textOnly>Cart (nb)</Button>
      </nav>
    </header>
  )
}

export default Header