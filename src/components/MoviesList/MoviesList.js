import React from 'react';
import PropTypes from 'prop-types';

import { TypeMovie } from '../../types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movieList }) => (
  <div className="movies">
    {movieList.map(movie => (
      <MovieCard movie={movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movieList: PropTypes.arrayOf(TypeMovie).isRequired,
};
