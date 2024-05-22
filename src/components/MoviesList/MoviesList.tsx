import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

export const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
