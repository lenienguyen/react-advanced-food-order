import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import UserProgressContext from '../../store/UserProgressContext'
import { currencyFormatter } from '../../util/formatting'
import Input from '../UI/Input'

const Checkout = () => {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0)

    const closeCheckoutHandler = () => {
        userProgressCtx.hideCheckout();
    }

    // Send data to backend
    const submitHandler = (e) => {
        e.preventDefault();

        const fd = new FormData(e.target)
        const customerData = Object.fromEntries(fd.entries())

        console.log('customerData', customerData)
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData,
                }
            })
        })
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={closeCheckoutHandler}>
            <form onSubmit={submitHandler}>
                <h2>Checkout</h2>
                <p>Total Amount {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="name"/>

                <Input label="E-Mail Address" type="email" id="email"/>

                <Input label="Street" type="text" id="street"/>

                <div className="control-row">
                    <Input label="Postal code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>

                <div className="modal-actions">
                    <Button textOnly type="button" onClick={closeCheckoutHandler}>Close</Button>
                    <Button type="submit">Submit Order</Button>
                </div>
            </form>
        </Modal>
    )
}

export default Checkout