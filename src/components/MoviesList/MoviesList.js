import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard, movieCardTypes } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(film => (
      <MovieCard film={film} key={film.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(movieCardTypes).isRequired,
};
