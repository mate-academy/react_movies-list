import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../types.tsx/types';

import './MoviesList.scss';

export type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(film => (
      <div className="card" key={film.imdbId}>
        <MovieCard key={film.imdbId} movie={film} />
      </div>
    ))}
  </>
);
