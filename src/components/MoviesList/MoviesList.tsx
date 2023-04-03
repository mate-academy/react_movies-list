/* eslint-disable max-len */
import React from 'react';
import './MoviesList.scss';
import { MovieList } from '../../types/MovieList';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MovieList> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} />
    ))}
  </div>
);
