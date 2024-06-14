import { useState } from 'react'
import TextField from "@mui/material/TextField";
import './App.css'
import MovieList from './MovieList'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



const App = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')
  const [isSearchOn, setSearchOn] = useState(false)
  const [filterOrder, setFilterOrder] = useState('')

  const [listLikedMovies, setLikedMovies] = useState([])
  const [listWhatchedMovies, setWhatchedMovies] = useState([])

  /* Sidebar ------------------------------------------------------------------ */

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Liked:'].concat(listLikedMovies).map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <List>
        {['Watched:'].concat(listWhatchedMovies).map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemIcon />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  /* End Sidebar ------------------------------------------------------------- */

  /* Searching --------------------------------------------------------------- */

  /* handleSearchChange updates the query in the url when a user changes the
  value in the search bar */
  const handleSearchChange = (e) => {
    var newQuery = e.target.value.toLowerCase();
    setQuery(newQuery)
  }



  /* End Searching ----------------------------------------------------------- */
  

  /* Filtering  -------------------------------------------------------------- */

  /* Sets the filter to the corresponding genre */ 
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }

  /* Sets the filter to the corresponding order */ 
  const handleFilterChangeOrder = (newfilterOrder) => {
    setFilterOrder(newfilterOrder)
  }

 
    


  /* ------------------------------------------------------------------------- */

  return (
    <div className="App">
      <header className='App-header'>
        <h2 className='Title'>Flixster 🎬</h2>

        <div className="dropdown">
        <button className="dropbtn">Filter</button>
        <div className="dropdown-content">
            <button className="Genre" onClick={() => handleFilterChange("")}>None</button>
            <button className="Genre" onClick={() => handleFilterChange("28")}>Action</button>
            <button className="Genre" onClick={() => handleFilterChange("16")}>Animation</button>
            <button className="Genre" onClick={() => handleFilterChange("35")}>Comedy</button>
            <button className="Genre" onClick={() => handleFilterChange("14")}>Fantasy</button>
            
        </div>
        
      </div>

      <div className="dropdown">
      <button className="dropbtn">Sort</button>
      <div className="dropdown-content">
          <button className="Desending" onClick={() => handleFilterChangeOrder("")}>None</button>
          <button className="Desending" onClick={() => handleFilterChangeOrder("title.desc")}>Title descending</button>
          <button className="Desending" onClick={() => handleFilterChangeOrder("title.asc")}>Title ascending</button>
          <button className="Desending" onClick={() => handleFilterChangeOrder("vote_average.desc")}>Votes descending</button>
          <button className="Desending" onClick={() => handleFilterChangeOrder("vote_average.asc")}>Votes ascending</button>
      </div>
      </div>

      </header>

      <div>
        <Button onClick={toggleDrawer(true)}>Open sidebar</Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          { DrawerList }
        </Drawer>
      </div>



      <div className='toggleSearch'>
        
        <p>Now Playing</p>

        <label className="switch">
          <input type="checkbox" onChange={() => {
            if (isSearchOn){
              setSearchOn(false)
            } else{
              setSearchOn(true)
            }
          }} id='searchBarOn' />
          <span className="slider round"></span>
        </label>

        <p>Search</p>
      </div>

      {isSearchOn && <TextField
          id="outlined-basic"
          onChange={handleSearchChange}
          variant="outlined"
          fullWidth
          label="Search"
          color='secondary'
        />}


      <MovieList query={query} filter={filter} filterOrder={filterOrder} 
      listLikedMovies={listLikedMovies} setLikedMovies={setLikedMovies} 
      listWhatchedMovies={listWhatchedMovies} setWhatchedMovies={setWhatchedMovies} />


      <footer>
        <p>Author: Cristobal Medina Meza</p>
        <p>About: Meta U week 2 project</p>
        <p><a href="cristobalmedina2004@gmail.com">cristobalmedina2004@gmail.com</a></p>
      </footer>
    </div>

    
  );
}

export default App

