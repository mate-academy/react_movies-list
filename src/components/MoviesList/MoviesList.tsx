import React from 'react';
import { Card } from '../../types/Card';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Card[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard movie={movie} />
    ))}
  </>
);
