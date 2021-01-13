import React from 'react';
import { MovieTypes } from '../../types';

import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        {...movie}
        key={movie.imdbId}
      />
    ))}
  </div>
);
MoviesList.propTypes = {
  movies: MovieTypes.isRequired,
};
/*
MoviesList.defaultProps = {
  movies: [],
};
*/
