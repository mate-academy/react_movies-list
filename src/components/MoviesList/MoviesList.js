import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCardShape } from '../Shapes/MovieCardShape';

import { MovieCard } from '../MovieCard';

export const MoviesList = ({ moviesData }) => (
  <div className="movies">
    {moviesData.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(MovieCardShape).isRequired,
};
