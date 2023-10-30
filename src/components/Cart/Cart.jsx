import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { currencyFormatter } from '../../util/formatting'
import UserProgressContext from '../../store/UserProgressContext'

const Cart = () => {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const { items } = cartCtx

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  const closeCartHandler = () => {
    userProgressCtx.hideCart();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your cart</h2>
      <ul>
          {items.map(item => (
            <li key={item.id}>
            {item.name} - {item.quantity}
            </li>
          ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

      <p className="modal-actions">
        <Button textOnly onClick={closeCartHandler}>Close</Button>
        <Button onClick={closeCartHandler}>Go to checkout</Button>
      </p>
    </Modal>
  )
}

export default Cart