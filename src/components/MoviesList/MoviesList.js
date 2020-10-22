import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { MovieCardShape } from '../shapes/MovieCardShape';

export const MoviesList = ({ movies }) => (
  movies.map(
    movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ),
  )
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieCardShape),
};
