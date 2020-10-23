import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import MoviesCardShape from '../Shape/shape';

export const MoviesList = ({ moviesData }) => (
  <div className="movies">
    {moviesData.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(MoviesCardShape).isRequired,
};
