import React from 'react';
import propTypes from 'prop-types';
import './MoviesList.scss';
import { MoviesShapes } from '../../types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: propTypes.arrayOf(MoviesShapes),
};

MoviesList.defaultProps = {
  movies: [],
};
