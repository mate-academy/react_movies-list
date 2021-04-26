import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';
import { MoviesList } from '../MoviesList';

export const MovieCard = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
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
