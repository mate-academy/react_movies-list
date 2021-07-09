import React from 'react';
import movies from '../../api/movies.json';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MoviesList = () => (
  movies.map(movie => (
    <MovieCard
      key={movie.imdbId}
      {...movie}
    />
  ))
);
