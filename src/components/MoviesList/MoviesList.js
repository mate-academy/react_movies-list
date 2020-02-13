import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div classNAme="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
