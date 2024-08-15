// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Show.css';

const API_KEY = 'fd3bb5618f63389330b5f1f201f9c29d';

const Show = () => {
  const [movieList, setMovieList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
      const json = await response.json();
      setMovieList(json.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getShows = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`);
      const json = await response.json();
      setShowList(json.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  useEffect(() => {
    getMovies();
    getShows();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <div>
    
      
      <div className="poster-container">
        <h2>Movies</h2>
        {movieList.map((movie) => (
          <img
            key={movie.id}
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onClick={() => handlePosterClick(movie)}
          />
        ))}
        <h2>Shows</h2>
        {showList.map((show) => (
          <img
            key={show.id}
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            onClick={() => handlePosterClick(show)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="details-container">
          <h2>Selected Movie/Show Details</h2>
          <p><strong>Title:</strong> {selectedMovie.title || selectedMovie.name}</p>
          <p><strong>Overview:</strong> {selectedMovie.overview}</p>
          <p>
            <strong>Release Date:</strong> 
            {selectedMovie.release_date ? selectedMovie.release_date : selectedMovie.first_air_date}
          </p>
          <p><strong>Rating:</strong> {selectedMovie.vote_average}/10</p>
          <p>
            <strong>Genre:</strong> 
            {selectedMovie.genre_ids.map((genre, index) => (
              <span key={index}>{genre}{index < selectedMovie.genre_ids.length - 1 ? ', ' : ''}</span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};


export default Show;