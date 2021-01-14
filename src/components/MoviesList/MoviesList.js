import React from 'react';
import './MoviesList.scss';
import { MoviesListShape } from '../../propes';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = MoviesListShape;

MoviesList.defaultProps = {
  movies: [],
};
