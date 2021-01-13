import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieType } from '../type';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard key={movie.imdbId} {...movie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType.isRequired),
};

MoviesList.defaultProps = {
  movies: [],
};
