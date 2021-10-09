import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';

type MovieListProps = {
  movies: Movie[];
};

export const MoviesList: React.FC<MovieListProps> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />))}
  </div>
);
