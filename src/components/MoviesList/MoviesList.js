import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MoviesType } from '../../types';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(MoviesType),
  ).isRequired,
};
