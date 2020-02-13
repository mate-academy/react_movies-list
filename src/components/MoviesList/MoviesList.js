import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard, movieInfo } from '../MovieCard/MovieCard';

export function MoviesList({ movies }) {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
}

MoviesList.defaultProp = {
  description: '',
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(movieInfo),
  ).isRequired,
};
