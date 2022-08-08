import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

interface ReceivedInfo {
  movies: Movie[];
}

export const MoviesList: React.FC<ReceivedInfo> = ({ movies }) => (
  <div className="movies">
    {movies.map(film => (
      <MovieCard
        movie={film}
        key={film.imdbUrl}
      />
    ))}
  </div>
);
