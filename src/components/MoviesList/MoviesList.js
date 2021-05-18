import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export function MoviesList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => <MovieCard {...movie} key={movie.imdbId} />)}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
