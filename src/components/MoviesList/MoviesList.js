import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ cards }) => (
  <div className="movies">
    {cards.map(card => (
      <MovieCard {...card} key={card.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
