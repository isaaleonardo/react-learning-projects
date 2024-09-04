import { useId, useState } from 'react'
import './Filters.css'

export function Filters () {
  const [maxPrice, setMaxPrice] = useState(2000)
  const priceInput = useId()
  const categoryInput = useId()

  const handleChangeMaxPrice = (event) => {
    setMaxPrice(event.target.value)
  }

  return (
    <form className='filters'>
      <div>
        <label htmlFor={priceInput}>Max price</label>
        <input
          type='range'
          name='price'
          min='5'
          max='2000'
          id={priceInput}
          onChange={handleChangeMaxPrice}
        />
        <span>${maxPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryInput}>Category</label>
        <select name='category' id={categoryInput}>
          <option value='all'>All</option>
          <option value='beauty'>Beauty</option>
          <option value='fragrances'>Fragrances</option>
          <option value='furniture'>Furniture</option>
        </select>
      </div>
    </form>
  )
}
