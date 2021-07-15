import React from 'react';
import propTypes from 'prop-types';
import { MovieCard, MovieCardTypes } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ listOfMovies }) => (
  <div className="movies">
    {listOfMovies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        Movie={movie}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  listOfMovies: propTypes.arrayOf(MovieCardTypes).isRequired,
};
