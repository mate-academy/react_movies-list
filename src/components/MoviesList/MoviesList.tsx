import React from 'react';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies" data-cy="MoviesList">
    {movies.map(movie => (
      <MovieCard
        key={movie.imdbId}
        movie={movie}
      />
    ))}
  </div>
);
