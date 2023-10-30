import React from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';


const App = () => {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Checkout />
        <Header />
        <Meals />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
