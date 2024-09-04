import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInputRef = useRef(true)

  useEffect(() => {
    if (isFirstInputRef.current) {
      isFirstInputRef.current = search === ''
      return
    }

    if (search === '') {
      setError('You need to enter a search term')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
