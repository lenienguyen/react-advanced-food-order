import React, { useContext, Fragment } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Button from '../UI/Button'

const Cart = () => {
  const cartCtx = useContext(CartContext)
  console.log(cartCtx)

  const { items } = cartCtx
  return (
    <Fragment>
      <h2>Your cart</h2>
      <ul>
          {items.map(item => {
            return (
              <CartItem 
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              />
            )
          })}
      </ul>

      <p className="cart-total">${cartCtx.totalAmount}</p>

      <div className="modal-actions">
        <div className="text-button">Close</div>
        <Button>Go to checkout</Button>
      </div>
    </Fragment>
  )
}

export default Cart