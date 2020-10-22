import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardPropType } from '../propTypes/cardTypes';

export const MoviesList = ({ moviesFromServer }) => (
  <div className="movies">
    {moviesFromServer.map(
      movie => <MovieCard {...movie} key={movie.imdbId} />,
    )}
  </div>
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(
    PropTypes.shape(MovieCardPropType),
  ).isRequired,
};
