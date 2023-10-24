import React, { Fragment, useContext } from 'react'
import CartContext from '../../store/cart-context'
import Button from '../UI/Button'

const Checkout = () => {
    const cartCtx = useContext(CartContext)
  return (
    <Fragment>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount ${cartCtx.totalAmount}</p>

            <div className="control">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" />
            </div>

            <div className="control">
                <label htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" />
            </div>

            <div className="control">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="postalCode">Postal code</label>
                    <input type="number" id="postalCode" />
                </div>

                <div className="control">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" />
                </div>
            </div>

            <div className="modal-actions">
                <div className="text-button">Close</div>
                <Button>Submit Order</Button>
            </div>
        </form>
    </Fragment>
  )
}

export default Checkout