import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilter () {
  const { filters, setFilters } = useContext(FiltersContext)

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
