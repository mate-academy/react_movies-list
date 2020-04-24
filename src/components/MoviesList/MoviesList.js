import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ items }) => (
  <div className="movies">
    {items.map(item => <MovieCard key={item.imdbId} items={item} />)}
  </div>
);

MoviesList.propTypes = {
  items: PropTypes.string.isRequired,
};
