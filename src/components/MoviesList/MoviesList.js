import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard, MovieCardShape } from '../MovieCard/MovieCard';

export const MoviesList = props => (
  <div className="movies">
    {props.movies.map(m => (
      <MovieCard {...m} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieCardShape).isRequired,
};
