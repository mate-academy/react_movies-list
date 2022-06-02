import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <>
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.imdbId}>
          <MovieCard data-cy="card" movie={movie} />
        </li>
      ))}
    </ul>
  </>
);
