import React from 'react';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

export type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} {...movie} />
    ))}
  </>
);
