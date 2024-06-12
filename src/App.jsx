import { useState } from 'react'
import TextField from "@mui/material/TextField";
import './App.css'
import MovieList from './MovieList'

const App = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [isSearchOn, setSearchOn] = useState(false)
  const [filterOrder, setFilterOrder] = useState('')


  /* Searching --------------------------------------------------------------- */

  /* handleSearchChange updates the query in the url when a user changes the
  value in the search bar */
  const handleSearchChange = (e) => {
    var newQuery = e.target.value.toLowerCase();
    setQuery(newQuery)
  }



  /* End Searching ----------------------------------------------------------- */
  

  /* Filtering  -------------------------------------------------------------- */
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  const handleFilterChangeOrder = (newfilterOrder) => {
    setFilterOrder(newfilterOrder)
  }
    


  /* ------------------------------------------------------------------------- */

  return (
    <div className="App">
      <header className='App-header'>
        <h2>Flixster</h2>
      </header>

      <div class="dropdown">
        <button class="dropbtn">Filter</button>
        <div class="dropdown-content">
            <button class="Genre" onClick={() => handleFilterChange("")}>None</button>
            <button class="Genre" onClick={() => handleFilterChange("28")}>Action</button>
            <button class="Genre" onClick={() => handleFilterChange("16")}>Animation</button>
            <button class="Genre" onClick={() => handleFilterChange("35")}>Comedy</button>
            <button class="Genre" onClick={() => handleFilterChange("14")}>Fantasy</button>
            <button class="Desending" onClick={() => handleFilterChangeOrder("title.desc")}>Title descending</button>
            <button class="Desending" onClick={() => handleFilterChangeOrder("title.asc")}>Title ascending</button>
        </div>
      </div>



      <div className='toggleSearch'>
        
        <p>Now Playing</p>

        <label class="switch">
          <input type="checkbox" onChange={() => {
            if (isSearchOn){
              setSearchOn(false)
            } else{
              setSearchOn(true)
            }
          }} id='searchBarOn' />
          <span class="slider round"></span>
        </label>

        <p>Search</p>
      </div>

      {isSearchOn && <TextField
          id="outlined-basic"
          onChange={handleSearchChange}
          variant="outlined"
          fullWidth
          label="Search"
        />}


      <MovieList query={query} filter={filter} filterOrder={filterOrder} />


      <footer>
        <p>Author: Cristobal Medina Meza</p>
        <p>About: Meta U week 2 project</p>
        <p><a href="cristobalmedina2004@gmail.com">cristobalmedina2004@gmail.com</a></p>
      </footer>
    </div>

    
  );
}

export default App

