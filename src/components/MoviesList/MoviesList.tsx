import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../type/Movie';

import './MoviesList.scss';

interface Movies {
  movies: Movie[],
}

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);
