import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../shape/MovieCardShape';
import './MoviesList.scss';

export const MoviesList = ({ lists }) => (
  <div className="movies">
    {lists.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  lists: PropTypes.arrayOf(MovieCardShape).isRequired,
};
