import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { shapeOfCard } from '../../cardShape';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(card => (
      <MovieCard key={card.title} {...card} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(shapeOfCard).isRequired,
};
