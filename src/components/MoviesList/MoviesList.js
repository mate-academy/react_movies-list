import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    {moviesList.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesList: [],
};
