import React from 'react';
import './MoviesList.scss';
import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MoviesList = () => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        {...movie}
      />
    ))}
  </div>
);
