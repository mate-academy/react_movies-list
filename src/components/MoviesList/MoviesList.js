import React from 'react';
import './MoviesList.scss';
import { PropTypes } from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default MoviesList;
