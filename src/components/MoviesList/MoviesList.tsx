import React from 'react';
import './MoviesList.scss';

import { MovieListProps } from '../../types/MovieListProps';
import { MovieCards } from '../MovieCard';

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCards movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
