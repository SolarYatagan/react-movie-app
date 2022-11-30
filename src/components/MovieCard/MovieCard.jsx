import React from 'react'
import './moviecard.css'
import DisplayMovie from '../DisplayMovie/DisplayMovie';

const MovieCard = ({movie: {Year, Poster, Title, Type, imdbID}}) => {

  return (
    <>
      <DisplayMovie
        movieID={imdbID}
        key={imdbID}>
        <div className="movieCard__year">
          <p>{Year}</p>
        </div>
        <div className="movieCard__img">
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>
        <div className="movieCard__bottom">
          <div className="movieCard__bottom-text">
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
      </DisplayMovie>
    </>
  );
}

export default MovieCard