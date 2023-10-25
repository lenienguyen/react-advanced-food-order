import React, { useContext, useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';
import CartContext from './store/cart-context';


const App = () => {
  const cartCtx = useContext(CartContext)
  const [cartisShown, setCartIsShown] = useState(false)

  const onAddItemHandler = (item) => {
    cartCtx.addItem(item)
  }

  return (
    <CartProvider>
      
      {cartisShown && <Cart />}

      <Header />

      <Meals onClick={onAddItemHandler} />

    </CartProvider>
  );
}

export default App;
