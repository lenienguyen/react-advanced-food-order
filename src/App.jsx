import React from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './store/CartContext';


const App = () => {

  return (
    <CartContextProvider>
      {/* {cartisShown && <Cart />} */}

      <Header />

      <Meals />

    </CartContextProvider>
  );
}

export default App;
