import React from 'react';
import './MoviesList.scss';

import { MovieCard, Movie } from '../MovieCard';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <MovieCard {...movie} />
    ))}
  </ul>
);
