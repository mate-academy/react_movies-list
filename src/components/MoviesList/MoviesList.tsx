import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li>
        <MovieCard key={movie.imdbId} movie={movie} />
      </li>
    ))}
  </ul>
);
