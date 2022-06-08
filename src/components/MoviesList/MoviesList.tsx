import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../react-app-env';

export const MoviesList: React.FC<{ movies: Movie[] }> = ({
  movies,
}: { movies: Movie[] }) => (
  <div className="movies">
    {movies.map((mov: Movie) => (
      <MovieCard {...mov} />
    ))}
  </div>
);
