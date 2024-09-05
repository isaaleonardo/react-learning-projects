import { useId } from 'react'
import './Filters.css'
import { useFilter } from '../hooks/useFilter'

export function Filters () {
  const priceInputId = useId()
  const categoryInputId = useId()
  const { filters, setFilters } = useFilter()

  const handleChangeMaxPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <form className='filters'>
      <div>
        <label htmlFor={priceInputId}>Max price</label>
        <input
          type='range'
          name='price'
          min='5'
          max='2000'
          value={filters.maxPrice}
          id={priceInputId}
          onChange={handleChangeMaxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryInputId}>Category</label>
        <select name='category' id={categoryInputId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
        </select>
      </div>
    </form>
  )
}
