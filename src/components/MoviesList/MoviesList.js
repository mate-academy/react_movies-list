import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export const MoviesList = ({ moviesList }) => (
  <div className="movies">
    {
      moviesList.map(movie => (
        <MovieCard {...movie} key={movie.imdbId} />
      ))
    }
  </div>
);

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape = {
      imdbId: PropTypes.string.isRequired,
    },
  ).isRequired,
};
