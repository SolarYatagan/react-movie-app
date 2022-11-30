import * as React from 'react';
import { useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import './displayMovie.css'


export default function DisplayMovie({children, movieID}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
  setOpen(true);
  
  }

  const handleClose = () => setOpen(false);
  const [movie, setMovie] = useState()

  const handleClick = () => console.log('clicked')

  useEffect(() => {
    const fetchMovies = async() => {
    const data = await axios.get(`${process.env.REACT_APP_API_URL}i=${movieID}&apikey=${process.env.REACT_APP_API_KEY}`)
    setMovie(data)

    }

    fetchMovies()
  }, [])
  

  return (
    <div>
    {movie ? (
      <>
      <div className='movieCard' onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className='style'>
          {
          movie && 
          <div className="movie__container">
            <div className='movie__container-img'><img src={movie.data.Poster}/></div>
            <div className='movie__container-content'>
            <div className='movie__container-title'><h2>{movie.data.Title}</h2></div>
              <div className="movie__container-content_paragraphs">
              <p><b>Year of production:</b> {movie.data.Year}</p>
              <p><b>Runtime:</b> {movie.data.Runtime}</p>
              <p><b>Country:</b> {movie.data.Country}</p>
              <p><b>Directror:</b> {movie.data.Director}</p>
              <p><b>Writer:</b> {movie.data.Writer}</p>
              <p><b>Genre:</b> {movie.data.Genre}</p>
              <p><b>Rating:</b> {movie.data.Ratings[0].Value} - <span>'{movie.data.Ratings[0].Source}'</span></p>
              <p><b>Actors:</b> {movie.data.Actors}</p>
              <p className='movie__container-content_paragraphs-plot'><b>Plot:</b> {movie.data.Plot}</p>
              </div>
              <div className='movie__container-buttons'>
              <button type='button'>Add to wish list</button>
              <button type='button'>Add to watched</button>
            </div>
            </div>
            
          </div>
          }
          </Box>
        </Fade>
      </Modal>
      </>
      ) : ""
      }
    </div>
  );
}
