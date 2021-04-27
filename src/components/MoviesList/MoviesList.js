import React from 'react';
import './MoviesList.scss';
import PropTypes, { object } from 'prop-types';
import { MovieCard } from '../MovieCard/index';

export const MoviesList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(object).isRequired,
};
