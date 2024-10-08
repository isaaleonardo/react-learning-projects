import { CartProvider } from './context/cart.jsx'
import { useProducts } from './hooks/useProducts.js'
import { useFilter } from './hooks/useFilter.js'
import { Header } from './components/Header.jsx'
import { Cart } from './components/Cart.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'

function App () {
  const { products, loading } = useProducts()
  const { filterProducts } = useFilter()

  return (
    <CartProvider>
      <Header />
      <Cart />
      {
        loading
          ? <p>Loading...</p>
          : <Products products={filterProducts(products)} />
      }
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
