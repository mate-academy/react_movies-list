import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movies } from '../../types/Movies';

import './MoviesList.scss';

type Props = {
  movies: Movies[]
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.title}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
