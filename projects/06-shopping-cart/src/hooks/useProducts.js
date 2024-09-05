import { useEffect, useState } from 'react'
import { searchProducts } from '../services/products'

export function useProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const newProducts = await searchProducts()
        setProducts(newProducts)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  return { products, loading }
}
