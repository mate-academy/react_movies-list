import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import { shapeOfCard } from '../../cardShape';

export const MoviesList = ({ movieList }) => (
  <div className="movies">
    {movieList.map(card => (
      <MovieCard key={card.title} movieItem={card} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movieList: PropTypes.arrayOf(shapeOfCard).isRequired,
};
