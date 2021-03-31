import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

import './MovieCard.scss';

export const MovieCard = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId} className="card">
        <MoviesList {...movie} />
      </div>
    ))}
  </div>
);

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
