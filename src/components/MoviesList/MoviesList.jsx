import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { moviesType } from '../../types';
import './MoviesList.scss';

export const MoviesList = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} key={movie.imdbId} />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: moviesType.isRequired,
};
