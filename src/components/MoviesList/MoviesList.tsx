import React from 'react';
import { MovieCard } from '../MovieCard';
import { Film } from '../types';
import './MoviesList.scss';

type Props = {
  movies: Film[]
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard movie={movie} />
    ))}
  </div>
);
