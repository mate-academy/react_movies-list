import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

import { MovieCardShape } from '../shapes/MovieCardShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard {...film} key={movies.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
};
