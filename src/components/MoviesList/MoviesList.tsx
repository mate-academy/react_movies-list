import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[],
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li
        className="card"
        data-cy="card"
        key={movie.imdbId}
      >
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
