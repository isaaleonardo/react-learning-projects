import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isProductInCart = cart.some(item => item.id === product.id)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={`Image of ${product.title}`} />

                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  {
                    isProductInCart
                      ? (
                        <button
                          style={{ backgroundColor: 'red' }}
                          onClick={() => removeFromCart(product)}
                        >
                          <RemoveFromCartIcon />
                        </button>
                        )
                      : (
                        <button
                          style={{ backgroundColor: '#09f' }}
                          onClick={() => addToCart(product)}
                        >
                          <AddToCartIcon />
                        </button>
                        )
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
