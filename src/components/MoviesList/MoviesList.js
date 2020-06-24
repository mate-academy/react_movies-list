import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCardPropType } from '../PropTypes/MovieCardPropType';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    MovieCardPropType,
  ).isRequired,
};
