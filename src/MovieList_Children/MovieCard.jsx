import './MovieCard.css'

function MovieCard(props) {
  const image = `https://image.tmdb.org/t/p/w500${props.image}`
  let count = 1;

  const handleToggleCheckBox = (event) =>{
    event.stopPropagation();
  }

  const checkLiked = (title) =>{
    let newLikes = [];
    if (props.listLikedMovies.includes(title)){
      for (let i=0; i < props.listLikedMovies.length; i++){
        console.log(props.listLikedMovies[i]);
        if (props.listLikedMovies[i] != (title)){
          newLikes.push(props.listLikedMovies[i]);
        }
      }
      
      props.setLikedMovies(newLikes);
      console.log(props.listLikedMovies);
    } else{
      props.setLikedMovies(prev => [
        ...prev,
        title
      ])
    }
  }

  const checkWatched = (title) =>{
    let newMovies = [];
    
    if (props.listWhatchedMovies.includes(title)){
      for (let i=0; i < props.listWhatchedMovies.length; i++){
        console.log(props.listWhatchedMovies[i]);
        if (props.listWhatchedMovies[i] !== (title)){
          newMovies.push(props.listWhatchedMovies[i]);
        }
      }
      
      props.setWhatchedMovies(newMovies);
      console.log(props.listWhatchedMovies);
    } else{

      props.setWhatchedMovies(prev => [
        ...prev,
        title
      ])
      
    }
  }

  return (
    <div className="card">
      <img className='img' src= {image} alt="Image" />

      <p>{props.title}</p>
      <p>Rating: {props.rating} </p>

      <div className="watchedLiked">
        <p>👁️</p>
        <label onClickCapture={(event) => {
          handleToggleCheckBox(event)
          if(count % 2 == 0){checkWatched(props.title)}
          count =count+1;
          }} className="switch">
          <input type="checkbox" id='watchedOn'  />
          <span className="slider round"></span>
        </label>


        <p>❤️</p>
        <label onClickCapture={(event) => {
          handleToggleCheckBox(event)
          if(count % 2 == 0){checkLiked(props.title)}
          count++
          }} className="switch">
          <input  type="checkbox" id='likedOn' />
          <span className="slider round"></span>
        </label>
      </div>


    </div>
  );
}
  
export default MovieCard;