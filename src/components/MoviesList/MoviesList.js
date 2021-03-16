import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imbdId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imbdId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
