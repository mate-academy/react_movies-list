import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieType } from '../Type';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(item => (
      <MovieCard {...item} key={item.imdbId} />
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
};
