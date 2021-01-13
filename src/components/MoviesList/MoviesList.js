import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { TypeMovie } from '../../types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape(TypeMovie),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};
