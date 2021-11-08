import React from 'react';
import { MovieCard } from '../MovieCard';
import { Movie } from '../types.tsx/types';

import './MoviesList.scss';

interface Props {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard key={movie.imdbId} movie={movie} />
      </div>
    ))}
  </>
);
