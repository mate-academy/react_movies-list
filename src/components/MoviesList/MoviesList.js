import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

MoviesList.defaulProps = {
  movies: [],
};
