import {useRef} from 'react';
import './MovieCard.css'

function MovieCard(props) {
  const image = `https://image.tmdb.org/t/p/w500${props.image}`

  const handleToggleCheckBox = (event) =>{
    event.stopPropagation();
  }

  return (
    <div className="card">
      <img className='img' src= {image} alt="Image" />

      <p>{props.title}</p>
      <p>Rating: {props.rating} </p>

      <div className="watchedLiked">
        <p>👁️</p>
        <label onClickCapture={(event) => {(handleToggleCheckBox(event))}} className="switch">
          <input type="checkbox" id='watchedOn' />
          <span className="slider round"></span>
        </label>


        <p>❤️</p>
        <label onClickCapture={(event) => {handleToggleCheckBox(event)}} className="switch">
          <input  type="checkbox" id='likedOn' />
          <span className="slider round"></span>
        </label>
      </div>


    </div>
  );
}
  
export default MovieCard;