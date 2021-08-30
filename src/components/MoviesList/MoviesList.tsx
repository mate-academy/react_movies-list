import React from 'react';
import { MovieCard } from '../MovieCard';

import { Card } from '../../types/Card';

type Props = {
  movies: Card[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div key={movie.imdbId}>
        <MovieCard
          movie={movie}
        />
      </div>
    ))}
  </div>
);
