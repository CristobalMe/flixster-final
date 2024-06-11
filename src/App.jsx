import { useState } from 'react'
import TextField from "@mui/material/TextField";
import './App.css'
import MovieList from './MovieList'

const App = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('popularity.desc')


  /* Searching --------------------------------------------------------------- */

  /* handleSearchChange updates the query in the url when a user changes the
  value in the search bar */
  const handleSearchChange = (e) => {
    var newQuery = e.target.value.toLowerCase();
    setQuery(newQuery)
  }


  /* searchOnOff hides the search bar when the slider is activated */
  const searchOnOff = () => {
    var x = document.getElementById('searchBarOn');
    var y = document.getElementById('outlined-basic');
    if (x.checked) {
        y.style.display = "none";
        setQuery("")
        
    } else {
        y.style.display = "";
    }
  }


  /* End Searching ----------------------------------------------------------- */
  

  /* Filtering  -------------------------------------------------------------- */


  /* ------------------------------------------------------------------------- */

  return (
    <div className="App">
      <header className='App-header'>
        <h2>Flixster</h2>
      </header>


      <div className='toggleSearch'>
        
        <p>Search</p>

        <label class="switch">
          <input type="checkbox" onChange={searchOnOff} id='searchBarOn' />
          <span class="slider round"></span>
        </label>

        <p>Now Playing</p>
      </div>

      

      
      <TextField
          id="outlined-basic"
          onChange={handleSearchChange}
          variant="outlined"
          fullWidth
          label="Search"
        />

      <MovieList query={query} filter={filter} />
    </div>

    
  );
}

export default App

