import React, { Fragment } from 'react'

const CartItem = props => {
  let price = parseFloat(props.price).toFixed(2)

  return (
    <Fragment>
      <li className="cart-item">
        <p>{props.name} - {props.amount} x ${price}</p>
        <div className="cart-item-actions">
          <button>-</button> 1 <button>+</button>
        </div>
      </li>
    </Fragment>
  )
}

export default CartItem