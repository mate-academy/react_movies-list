import React from 'react';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div>
    {movies.map(
      movie => MovieCard({ movie }),
    )}
  </div>
);
