import React from 'react';
import { MovieCard } from '../MovieCard';

import { Card } from '../../types/Card';

type Props = {
  movies: Card[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard
          movie={movie}
        />
      </li>
    ))}
  </ul>
);
