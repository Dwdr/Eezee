import React from 'react';
import { CartProvider } from '../context/cart-context';
import { CartContext } from '../context/cart-context';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }} >
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
