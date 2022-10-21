import React from 'react';
import './MoviesList.scss';
import { MovieList } from '../../types/Movie';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MovieList> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <MovieCard {...movie} />
    ))}
  </ul>
);
