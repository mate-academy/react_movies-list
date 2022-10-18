import React from 'react';
import './MoviesList.scss';

import { Movie } from '../../types/Movie';

import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map((movie: Movie) => (
      <li
        className="card"
        data-cy="Movie"
        key={movie.imdbId}
      >
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
