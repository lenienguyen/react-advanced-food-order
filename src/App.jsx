import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Modal from './components/UI/Modal';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';
import CartContext from './store/cart-context';
import Checkout from './components/Cart/Checkout';


// Todo:
/*
 Add components for displaying :
? OK - products
- the cart (in a modal)
- checkout form (in a modal)

? OK Fetch the (dummy) meals data from the backend & show it on the screen (GET /meals)

Allow users to add & remove products & show it on the screen (GET /meals)

Send cart data along with user data (full name, email, street, postal code, city) to the backend (POST /orders)

Handle loading & error states

*/

const App = () => {
  const cartCtx = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)

  const onAddItemHandler = (item) => {
    cartCtx.addItem(item)
  }

  return (
    <CartProvider>

      {/* {ReactDOM.createPortal(<Modal className="cart">
        <Cart />
      </Modal>, document.getElementById('modal'))}

      {ReactDOM.createPortal(<Modal className="cart">
        <Checkout />
      </Modal>, document.getElementById('modal'))} */}

      <Header />
      <Meals onClick={onAddItemHandler} />
    </CartProvider>
  );
}

export default App;
