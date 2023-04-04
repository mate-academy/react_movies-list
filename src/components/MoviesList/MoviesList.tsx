import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList: React.FC = ({ movies }) => (
  <div className="movies">
    {movies.map((movie) => (
      <MovieCard movie={movie} />

    ))}
  </div>
);
