import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { MovieType } from '../MovieTypes/MovieTypes';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(
      movie => <MovieCard key={movie.imdbId} movie={movie} />,
    )}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
};

MoviesList.defaultProps = {
  movies: [],
};
