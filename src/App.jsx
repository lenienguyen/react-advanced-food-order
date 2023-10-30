import React from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';
import Cart from './components/Cart/Cart';


const App = () => {

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Header />
        <Meals />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
