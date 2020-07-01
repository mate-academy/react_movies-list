import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard, MovieShape } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <>
        <MovieCard movie={movie} key={movie.imdbId} />
      </>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieShape).isRequired,
};
