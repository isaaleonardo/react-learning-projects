import { useProducts } from './hooks/useProducts.js'
import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { useState } from 'react'

function App () {
  const { products, loading } = useProducts()

  const [filters, setFilters] = useState({
    maxPrice: null,
    category: 'all'
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        (
          filters.maxPrice
            ? product.price <= filters.maxPrice
            : product
        ) && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return (
    <>
      <Header />
      {
        loading
          ? <p>Loading...</p>
          : <Products products={filterProducts(products)} />
      }
    </>
  )
}

export default App
