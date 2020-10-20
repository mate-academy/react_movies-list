import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../shape/MovieCardShape';

export const MoviesList = ({ src }) => (
  <div className="movies">
    {src.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  src: PropTypes.arrayOf(MovieCardShape).isRequired,
};
