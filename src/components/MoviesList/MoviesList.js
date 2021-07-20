import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  movies.map(movie => (
    <MovieCard movie={movie} />
  ))
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};
