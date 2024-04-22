import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./components/MovieCard";


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c546c814";

////c546c814


function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('');


  const searchMovies = async (title) => {
    console.log  (`${API_URL}&s=${title}`)
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    setMovies(data.Search);
  };

  useEffect(() => {
  searchMovies('Frozen');
  //  searchMovies("Harry Potter");//
  }, []);

  return (

    <div className='app'>
      <h1>MovieSpace</h1>

      <div className='search'>

        <input placeholder='Serach for Movies'
          //value="Harry Potter"//
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />


        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />

      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}  key={movie.imdbID}/>
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2> No Movies Found</h2>
        </div>
      )}

    </div>


  )
}

export default App