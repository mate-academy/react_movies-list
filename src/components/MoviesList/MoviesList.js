import React from 'react';
import PropTypes from 'prop-types';
import { MovieType } from '../../types';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (

  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        {...movie}
        key={movie.imdbId}
      />
    ))}
  </div>
);
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
};
