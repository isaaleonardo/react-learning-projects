const API_KEY = 'c9fac7a7'
const URL = 'https://www.omdbapi.com/'

export async function searchMovies ({ search }) {
  if (search === '') {
    return null
  }

  try {
    const response = await fetch(`${URL}?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    return json.Search?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }
    })
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
