import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = ({ list }) => (
  list.map(movie => (
    <MovieCard
      movie={movie}
      key={movie.imdbId}
    />
  ))
);
