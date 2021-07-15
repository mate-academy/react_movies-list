import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="page-content">
    <ul className="movies">
      {movies.map(movie => (
        <li className="card" key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
