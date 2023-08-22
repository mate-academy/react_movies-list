import React from 'react';
import './MoviesList.scss';
/* eslint-disable max-len */
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface MoviesListProps {
  movies: Movie[];
}
export const MoviesList: React.FC<MoviesListProps> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} />
      ))}
    </div>
  </>
);
