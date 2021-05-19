import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard {...movie} key={movie.imdbId} />
      ))}
    </div>
)};
