import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <ul className="movies">
      {movies.map(movie => (
        <li className="card" key={movie.imdbId}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
