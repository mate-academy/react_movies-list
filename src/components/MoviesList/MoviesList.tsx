import React from 'react';
import { Movie } from '../../Types/Movie';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie: Movie) => (
      <li key={movie.imdbId}>
        <MovieCard card={movie} />
      </li>
    ))}
  </ul>
);
