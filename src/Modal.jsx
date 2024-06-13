import './Modal.css'

const Modal = ({ isOpen, onClose, movie }) => {

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="movie-details">
                <h2>{movie?.title}</h2>
                <p><strong>Runtime in minutes:</strong> {movie?.runtime}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} />
                <p><strong>Release Date:</strong> {movie?.release_date}</p>
                <p><strong>Genres:</strong> {movie?.genres.map(genre => genre.name).join(', ')}</p>
                <p><strong>Overview:</strong> {movie?.overview}</p>
                {movie?.trailerUrl && (
                <iframe src={movie.trailerUrl} width="500" height="300" />
                )}
                
            </div>
      </div>

    </div>
  )
}

export default Modal
