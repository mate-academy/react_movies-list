import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesFromServer }) => (
  moviesFromServer.map(card => (
    <div className="movies" key={card.imdbId}>
      <MovieCard {...card} />
    </div>
  ))
);

MoviesList.propTypes = {
  moviesFromServer: PropTypes.arrayOf(PropTypes.shape({
    card: PropTypes.shape({
      imdbId: PropTypes.string,
    }),
  })).isRequired,
};
