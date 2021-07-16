import React from 'react';
import './MoviesList.scss';
import propTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => <MovieCard {...movie} key={movie.imdbId} />)}
  </>
);

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      imdbId: propTypes.string.isRequired,
    }),
  ).isRequired,
};
