import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { typesOfCard } from '../../types';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(card => (
      <div key={card.imdbId} className="card">
        <MovieCard {...card} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    typesOfCard,
  ).isRequired,
};
