import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a Cart Provider')
  }

  const { cart, setCart } = context

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
      return
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return { cart, addToCart, removeFromCart, clearCart }
}
