import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movieFromBase => (
      <li key={movieFromBase.imdbId}><MovieCard {...movieFromBase} /></li>
    ))}
  </ul>
);
