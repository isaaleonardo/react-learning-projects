import { createContext, useState } from 'react'

// 1. Create context: the one that is consumed by components
export const FiltersContext = createContext()

// 2. Create provider: the one that gives the data
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 2000
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
