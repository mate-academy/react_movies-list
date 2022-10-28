import React from 'react';
import './MoviesList.scss';
import { MovieType } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';

type Props = {
  movies: MovieType[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map((movie: MovieType) => (
      <li
        key={movie.imdbId}
        className="card"
        data-cy="Movie"
      >
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
