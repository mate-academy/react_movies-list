import React from 'react';
import './MoviesList.scss';
import { Movies } from '../types/Movies';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>

);
