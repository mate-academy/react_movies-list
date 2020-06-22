import React from 'react';
import './MoviesList.scss';
import PropTypes, { object } from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

const MoviesList = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} movie={movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(object).isRequired,
};

export default MoviesList;
