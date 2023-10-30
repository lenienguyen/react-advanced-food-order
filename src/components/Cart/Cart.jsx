import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { currencyFormatter } from '../../util/formatting'
import UserProgressContext from '../../store/UserProgressContext'
import CartItem from './CartItem'

const Cart = () => {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const { items } = cartCtx

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

  const closeCartHandler = () => {
    userProgressCtx.hideCart();
  }

  const goToCheckoutHandler = () => {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal 
    className="cart" 
    open={userProgressCtx.progress === 'cart'} 
    onClose={userProgressCtx.progress === 'cart' ? closeCartHandler : null}>
      <h2>Your cart</h2>
      <ul>
          {items.map(item => (
            <CartItem 
            key={item.id} 
            {...item} 
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
            />
          ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

      <p className="modal-actions">
        <Button textOnly onClick={closeCartHandler}>Close</Button>
        {items.length > 0 && <Button onClick={goToCheckoutHandler}>Go to checkout</Button>}
      </p>
    </Modal>
  )
}

export default Cart