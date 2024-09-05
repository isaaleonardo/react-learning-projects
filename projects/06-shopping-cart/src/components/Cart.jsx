import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon, AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Cart () {
  const { cart, addToCart, clearCart } = useCart()
  const checkboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={checkboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' name='cart' id={checkboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => {
              return (
                <li key={product.id}>
                  <img
                    src={product.thumbnail}
                    alt={`Image of ${product.title}`}
                  />

                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>

                  <footer>
                    <small>
                      Qty: {product.quantity}
                    </small>

                    <button
                      onClick={() => addToCart(product)}
                    >
                      <AddToCartIcon />
                    </button>
                  </footer>
                </li>
              )
            })
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
