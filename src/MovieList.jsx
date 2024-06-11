import './MovieList.css'
import MovieCard from './MovieList_Children/MovieCard'
import { useEffect, useState } from 'react'


const MovieList = ({ query, filter }) => {
  const [movies, setMovies] = useState([])
  const [page, pageNumber] = useState(1)

  useEffect(() => {
    fetchMovies();
  }, [page, query, filter])

  /* Fetching  -------------------------------------------------------------- */

  /* fetchMovies fetches the movies depending on the parameters: page, query, filter.
  it also handles new requests for when users need more movies displayed  */

  const fetchMovies = async () => {
    const apiKey = `976734b57cc39b8db299af9db027f266`
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`
    if (query){
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    }
    //if(filter && !query){
    //
    //}

    console.log(url)

    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()

      // if (query != ""){
      //   setMovies({})
      //   setMovies(data.results)

      // }

      if (page > 1) {
        setMovies(prev => [
          ...prev,
          ...data.results
        ])
      } else {
        setMovies(data.results)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  /* nextPage changes the page from we're fetching the data */
  const nextPage = () => {
    pageNumber(prevPage => prevPage + 1)
  }

  /* End Fetching  -------------------------------------------------------------- */



  return (
    <div>
      <div className="MovieList">
        {movies.map(movie => (
          <div key={movie.id}>
            <MovieCard
              title={movie.title}
              image={movie.poster_path}
              rating={movie.vote_average}
            />
          </div>
        ))}
      </div>

      <button onClick={nextPage}>See More</button>

    </div>
  )
}

export default MovieList
