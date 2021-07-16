import React from 'react';
import propTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

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
