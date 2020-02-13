import React from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(curMovie => <MovieCard key={curMovie.imdbId} {...curMovie} />)}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
