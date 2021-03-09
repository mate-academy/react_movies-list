import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesProperties }) => (
  <div className="movies">
    {moviesProperties.map(card => (
      <MovieCard
        {...card}
        key={card.imdbId}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesProperties: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  moviesProperties: [],
};
