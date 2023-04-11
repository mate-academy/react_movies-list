import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(mov => (
      <div className="card" data-cy="Movie" key={mov.imdbId}>
        <MovieCard {...mov} />
      </div>
    ))}
  </div>
);
