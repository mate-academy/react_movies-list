import React from 'react';
import PropTypes from 'prop-types';
// import src from '*.bmp';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/index';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
