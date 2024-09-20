import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<{movies: Movie[]}> = ({ movies }) => (
  <div className="movies">
    {movies.map((movie: Movie) => (
      <MovieCard movie={movie} key={movie.imdbId} />
    ))}
  </div>
);
