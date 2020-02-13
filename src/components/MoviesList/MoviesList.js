import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ moviesData }) => (
  <div className="movies">
    {moviesData.map(movieData => (
      <MovieCard key={movieData.imdbId} {...movieData} />
    ))}
  </div>
);

MoviesList.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
