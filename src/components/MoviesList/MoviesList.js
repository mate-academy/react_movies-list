import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MoviesListTypes } from '../types';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </>
);

MoviesList.propTypes = MoviesListTypes;
MoviesList.defaultProps = {
  movies: [],
};
