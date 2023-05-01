import React from 'react';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: MovieCard[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
