import PropTypes from 'prop-types';
import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard {...movie} />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
