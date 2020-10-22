import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../shapes/MonieCardShape';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(MovieCardShape),
  ).isRequired,
};
