import React from 'react';

import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" id={movie.imdbId} data-cy="Movie">
        <MovieCard movie={movie} />
      </div>
    ))}
  </div>
);
