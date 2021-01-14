import React from 'react';

import './MoviesList.scss';
import PropTypes from 'prop-types';
import { TypeMovie } from '../../types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(TypeMovie).isRequired,
};
