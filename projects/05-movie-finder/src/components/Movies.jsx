function MoviesResults (movies) {
  return (
    <ul className='movies'>
      {
        movies.map(({ id, title, year, poster }) => (
          <li key={id} className='movie'>
            <h3>{title}</h3>
            <p>{year}</p>
            <img src={poster} alt={`Poster of ${title}`} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovieResults () {
  return (
    <p>There are not results</p>
  )
}

export function Movies ({ movies }) {
  return (
    movies
      ? MoviesResults(movies)
      : NoMovieResults()
  )
}
