import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { currencyFormatter } from '../../util/formatting'

const Cart = () => {
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  return (
    <Modal className="cart">
      <h2>Your cart</h2>
      <ul>
          {items.map(item => {
            <li key={item.id}>{item.name} - {item.quantity}</li>
          })}
      </ul>

      <p className="cart-total">${currencyFormatter.format(cartTotal)}</p>

      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to checkout</Button>
      </p>
    </Modal>
  )
}

export default Cart