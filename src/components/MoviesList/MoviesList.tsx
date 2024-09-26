
import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);
