import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard
        key={movie.imdbId}
        {...movie}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(PropTypes.object).isRequired,
};
