import { useState } from 'react'

export function useFilter () {
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

  return { filters, filterProducts, setFilters }
}
