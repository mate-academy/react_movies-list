import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { moviesTypes } from '../moviesTypes';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} {...movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(
      moviesTypes,
    ),
  ).isRequired,
};
