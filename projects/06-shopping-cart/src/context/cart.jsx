import { createContext, useState } from 'react'

// 1. Create context: the one that is consumed by components
export const CartContext = createContext()

// 2. Create provider: the one that gives the data
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
