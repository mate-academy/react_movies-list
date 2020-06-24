import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ list }) => (
  <div className="movies">
    {list.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
