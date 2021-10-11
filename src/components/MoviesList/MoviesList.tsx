import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';

import { Movies } from '../../types/Movies';

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);
