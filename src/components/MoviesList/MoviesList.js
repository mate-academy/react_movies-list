import React from 'react';
import './MoviesList.scss';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
