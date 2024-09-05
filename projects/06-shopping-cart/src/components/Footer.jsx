import { useCart } from '../hooks/useCart'
import { useFilter } from '../hooks/useFilter'
import './Footer.css'

export function Footer () {
  const { filters } = useFilter()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
        JSON.stringify(filters, null, 2)
      } */}
      {
        JSON.stringify(cart, null, 2)
      }
    </footer>
  )
}
