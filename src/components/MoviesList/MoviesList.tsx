import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MovieListProps } from '../../types/MovieListProps';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => {
  const key = uuidv4();

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={key} />
      ))}
    </div>
  );
};
