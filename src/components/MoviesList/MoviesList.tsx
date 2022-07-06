import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Card } from '../../types/Card';

type Movies = {
  movies: Card[]
};

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} />
    ))}
  </div>
);
