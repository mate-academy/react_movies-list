import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/MovieModel';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    { movies.map(m => (
      <MovieCard key={m.imdbId} movie={m} />
    ))}
  </div>
);
