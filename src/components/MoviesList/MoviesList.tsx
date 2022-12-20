import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movies } from '../../types/Movie';

export const MoviesList: React.FC<Movies> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </ul>
);
