import './MovieCard.css'

function MovieCard(props) {
  const image = `https://image.tmdb.org/t/p/w500${props.image}`

  return (
    <div className="card">
      <img className='img' src= {image} alt="Image" />

      <p>{props.title}</p>
      <p>Rating: {props.rating} </p>
    </div>
  );
}
  
export default MovieCard;