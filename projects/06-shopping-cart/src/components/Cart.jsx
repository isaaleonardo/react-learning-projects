import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart () {
  const checkboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={checkboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' name='cart' id={checkboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
              alt='image'
            />

            <div>
              <strong>Product</strong> - $9.99
            </div>

            <footer>
              <small>
                Qty: 1
              </small>

              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
