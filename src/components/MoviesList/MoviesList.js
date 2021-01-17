import React from 'react';
import './MoviesList.scss';
import { MoviesListShape } from '../../propes';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = MoviesListShape;

MoviesList.defaultProps = {
  movies: [],
};
