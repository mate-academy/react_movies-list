
import React from 'react';
import PropTypes from 'prop-types';
import { TypeMovies } from '../../types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(TypeMovies).isRequired,
};
