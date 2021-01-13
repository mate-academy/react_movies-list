import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../../types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => <MovieCard {...item} key={item.imdbId} />)}
  </div>
);

const arrayStructure = PropTypes.shape(MovieType);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    arrayStructure,
  ).isRequired,
};
