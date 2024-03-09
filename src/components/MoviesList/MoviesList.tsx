import React from 'react';
import './MoviesList.scss';
import { MoviesListProps } from '../../types/MoviesListProps';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};
