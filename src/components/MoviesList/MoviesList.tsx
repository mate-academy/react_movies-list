import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

interface Movie {
  title: string;
  description?: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
}

type Props = {
  movies: Movie[];
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
