import React from 'react';
import propTypes from 'prop-types';

import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  </>
);

MoviesList.propTypes = {
  movies: propTypes.arrayOf(propTypes.shape({
    imdbId: propTypes.string,
  })).isRequired,
};
