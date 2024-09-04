import { useId, useState } from 'react'
import './Filters.css'

export function Filters ({ setFilters }) {
  const [maxPrice, setMaxPrice] = useState(2000)
  const priceInputId = useId()
  const categoryInputId = useId()

  const handleChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value)
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
          value={maxPrice}
          id={priceInputId}
          onChange={handleChangeMaxPrice}
        />
        <span>${maxPrice}</span>
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
