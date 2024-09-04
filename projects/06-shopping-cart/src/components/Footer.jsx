import { useFilter } from '../hooks/useFilter'
import './Footer.css'

export function Footer () {
  const { filters } = useFilter()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
