import './App.css'
import { useCallback, useState } from 'react'
import { Movies } from './components/Movies.jsx'
import { useSearch } from './hooks/useSearch.js'
import { useMovies } from './hooks/useMovies.js'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies(search)
    }, 300)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies({ search: newSearch })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='app'>
      <header>
        <h1>Movie finder</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='starwars'
            value={search}
            onChange={handleChange}
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main className='movies'>
        {
          loading
            ? <p>Loading...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
