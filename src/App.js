import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './icons/search.svg'
import MovieCard from './components/MovieCard/MovieCard'
import Hamburger from './components/Hamburger/Hamburger'
import MovieIcon from './icons/movie.png'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("");


  const searchMovies = async (title) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}s=${title}&apikey=${process.env.REACT_APP_API_KEY}`
    );
   
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
   
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>MoviesHere</h1>
      <Hamburger />
      <div className="search">
        <input
          placeholder="Search for movies"
          onChange={(e) => setSearchedMovie(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search_loop"
          onClick={() => searchMovies(searchedMovie)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : ( 
        <div className='empty'>
          <img src={MovieIcon} alt="movie"/>
        </div>
      )}
  
    </div>
  );
};

export default App