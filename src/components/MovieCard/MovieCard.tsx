import React from 'react';
import { MoviesList } from '../MoviesList';
import { Movies } from '../../appTypeDefs';
import './MovieCard.scss';

type MovieCardProps = {
  movies: Movies[];
};

export const MovieCard: React.FC<MovieCardProps> = (movies) => {
  return (
    <>
      <MoviesList {...movies} />
    </>
  );
};
