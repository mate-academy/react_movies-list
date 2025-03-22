import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <ul>
    {movies.map((movie: Movie) => (
      <li key={movie.title}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
