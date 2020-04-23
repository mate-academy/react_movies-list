import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(item => <MovieCard key={item.imdbId} cardInfo={item} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.shape().isRequired,
};
