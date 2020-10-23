import React from 'react';
import './MoviesList.scss';
import propTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imbdId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      imbdId: propTypes.string.isRequired,
    }),
  ).isRequired,
};
