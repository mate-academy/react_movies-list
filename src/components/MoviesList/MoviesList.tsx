import React from 'react';
import { Movie } from '../../types/Movie';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movieItem => (
      <MovieCard key={movieItem.imdbId} movie={movieItem} />
    ))}
  </div>
);
