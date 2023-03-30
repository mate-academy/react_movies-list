import React from 'react';
import './MoviesList.scss';
import { Movies } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => <MovieCard movie={movie} />)}
  </div>
);
