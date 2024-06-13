import './MovieCard.css'

function MovieCard(props) {
  const image = `https://image.tmdb.org/t/p/w500${props.image}`

  return (
    <div className="card">
      <img className='img' src= {image} alt="Image" />

      <p>{props.title}</p>
      <p>Rating: {props.rating} </p>

      <div className="watchedLiked">
        <p>👁️</p>
        <label class="switch">
          <input type="checkbox" onChange={() => {}} id='watchedOn' />
          <span class="slider round"></span>
        </label>


        <p>❤️</p>
        <label className="switch">
          <input type="checkbox" onChange={() => {}} id='likedOn' />
          <span class="slider round"></span>
        </label>
      </div>


    </div>
  );
}
  
export default MovieCard;