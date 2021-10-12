import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../types';

export type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <div className="movies">
      {movies.map(movie => (
        <MovieCard {...movie} />
      ))}
    </div>
  </>
);
