import React from 'react';
import './MoviesList.scss';
import { PropTypes } from 'prop-types';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  moviesFromServer.map(movie => (
    <MovieCard {...movie} key={movie.imdbId} />
  ))
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(PropTypes.shape({
    imdbId: PropTypes.string,
  })).isRequired,
};
