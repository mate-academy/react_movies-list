import React from 'react';
import { Movie } from '../../types/Movie';

import './MoviesList.scss';
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
