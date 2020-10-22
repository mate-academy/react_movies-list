import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { MoviePropTypes } from '../MoviePropTypes';

export const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
};
