import React from 'react';
import './MoviesList.scss';
import { MoviesListProps } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
