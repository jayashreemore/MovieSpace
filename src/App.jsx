import { useEffect } from 'react';
import './App.css'


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=c546c814 ";
////c546c814

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);


  }

  useEffect(() => {
    searchMovies("Harry Potter")
  }, []);

  return (
    <>
      Movie Search App
    </>

  )
}

export default App