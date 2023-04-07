import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC <MoviesListProps> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard movie={movie} />

    ))}
  </div>
);
