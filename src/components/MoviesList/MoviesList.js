import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard {...movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf,
};

MoviesList.defaultProps = {
  movies: [],
};
