import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ cards }) => (
  <div className="movies">
    {cards.map(card => (
      <MovieCard key={card.imdbId} {...card} />
    ))}
  </div>
);

MoviesList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
