import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ data }) => (
  <div className="movies">
    {data.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  data: PropTypes.isRequired,
};
