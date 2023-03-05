import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(0);

  const addItemToCart = (itemid) => {
    setCartItems((prev) => ({...prev, [itemid]: prev[itemid] > 0 ? prev[itemid] + 1 : 1 }))
  }

  const removeItemFromCart = (itemid) => {
    setCartItems((prev) => ({...prev, [itemid]: prev[itemid] = 0 ? 0 : prev[itemid] - 1}))
  }

  const contextValue = {cartItems, addItemToCart, removeItemFromCart};
  console.log(cartItems)

  return (

    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
