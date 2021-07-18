import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

const moviesType = PropTypes.arrayOf(
  PropTypes.shape({
    imdbId: PropTypes.string.isRequired,
  }),
);

MoviesList.propTypes = {
  movies: moviesType.isRequired,
};
