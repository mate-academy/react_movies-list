import React from 'react';
import './MoviesList.scss';
import { MovieType } from '../../types/Movie';

import { MovieCard } from '../MovieCard';

export type MovieList = {
  movies?: MovieType[]
};

export const MoviesList: React.FC<MovieList> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <MovieCard
        movie={movie}
      />
    ))}
  </ul>
);
