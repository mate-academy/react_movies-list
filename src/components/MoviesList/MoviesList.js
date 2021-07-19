import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { CardType } from '../../cardShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(card => (
      <MovieCard key={card.title} movie={card} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(CardType).isRequired,
};
