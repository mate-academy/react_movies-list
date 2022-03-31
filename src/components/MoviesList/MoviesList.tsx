import React from 'react';
import './MoviesList.scss';

import { Movies } from '../Types/Movies';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movies[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
