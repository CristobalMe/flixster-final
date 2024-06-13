import './MovieList.css'
import MovieCard from './MovieList_Children/MovieCard'
import { useEffect, useState } from 'react'
import Modal from './Modal'


const MovieList = ({ query, filter, filterOrder }) => {
  const [movies, setMovies] = useState([])
  const [page, pageNumber] = useState(1)
  const [modalActive, setModalActive] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    fetchMovies();
  }, [page, query, filter, filterOrder])

  /* Fetching  -------------------------------------------------------------- */

  /* fetchMovies fetches the movies depending on the parameters: page, query, filter.
  it also handles new requests for when users need more movies displayed  */

  const fetchMovies = async () => {
    const apiKey = `976734b57cc39b8db299af9db027f266`
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`
    if (query){

      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    }
    if(filter){
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${filter} `;
    }
    if (filter && query){
      // Fix url
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${filter}&query=${query} `;
    }

    if (filterOrder){
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=${filterOrder}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()

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


  /* fetchDetails fetches the movies Details  */
  const fetchDetails= async (movieId) => {
    const apiKey = `976734b57cc39b8db299af9db027f266`
    const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`

    const videosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  

    try {
      const detailsR = await fetch(detailsUrl)
      const details = await detailsR.json()

      const videosResponse = await fetch(videosUrl)
      const videos = await videosResponse.json()

      const trailer = videos.results.find(video => video.site === "YouTube" && video.type === "Trailer")
      const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null

      setSelectedMovie({...details, trailerUrl})
      setModalActive(true)
    } catch (error) {
      console.error("Error in details:", error)
    }
  }

  /* End Fetching  -------------------------------------------------------------- */



  return (
    <div>
      <div className="MovieList">
        {movies.map(movie => (
          <div key={movie.id} onClick={() => fetchDetails(movie.id)}>
            <MovieCard title={movie.title} image={movie.poster_path} rating={movie.vote_average}/>
          </div>
        ))}
      </div>

      <button onClick={nextPage}>See More</button>


      <Modal isOpen={modalActive} onClose={() => setModalActive(false)} movie={selectedMovie} />

    </div>
  )
}

export default MovieList
