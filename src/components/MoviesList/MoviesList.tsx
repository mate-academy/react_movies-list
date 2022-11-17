import React from 'react';

import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[]
}

export const MoviesList: React.FC<Props> = ({ movies }) => {
  // <>Put the list here</>
  return (
    <ul>
      {movies.map((film: Movie) => (
        <li key={film.imdbId}>
          <MovieCard movie={film} />
        </li>
      ))}
    </ul>
  );
};
