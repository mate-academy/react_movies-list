import React from 'react';

import { Movie } from '../../types/Movie';

import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<{ moviesFromServer: Movie[] }> = ({
  moviesFromServer,
}) => {
  return (
    <>
      {moviesFromServer.map((movie) => (
        <MovieCard {...movie} />
      ))}
    </>
  );
};
