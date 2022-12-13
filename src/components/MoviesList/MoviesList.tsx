import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movies } from '../../types/Movie';

export const MoviesList: React.FC<Movies> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
