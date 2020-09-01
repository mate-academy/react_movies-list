import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export function MoviesList(movies) {
  return (
    <div className="movies">
      {Object.values(movies).map(movie => <MovieCard {...movie} />)}
    </div>
  );
}
