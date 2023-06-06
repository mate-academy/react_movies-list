import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>
);
