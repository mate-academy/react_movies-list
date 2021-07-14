import React from 'react';
import propTypes from 'prop-types';
import { MovieCard, MovieCardTypes } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ ListOfMovies }) => (
  <div className="movies">
    {ListOfMovies.map(movie => (
      <MovieCard Movie={movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  ListOfMovies: propTypes.arrayOf(MovieCardTypes).isRequired,
};
