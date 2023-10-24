import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'

const CartIcon = () => {
const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className="text-button">Cart ({numberOfCartItems})</button>
  )
}

export default CartIcon