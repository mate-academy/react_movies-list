import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';
import { MovieCardShape } from '../shapes/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ films }) => (
  <ul className="movies">
    {films.map(film => (
      <MovieCard {...film} key={film.imdbId} />
    ))}
  </ul>
);

MoviesList.propTypes = {
  films: PropTypes.arrayOf(MovieCardShape),
};

MoviesList.defaultProps = {
  films: {},
};
