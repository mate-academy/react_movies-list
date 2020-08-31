/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard
        key={film.imdbId}
        film={film}
      />
    ))}
  </div>
);

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
