import React from 'react';
import { Movie } from '../../types/movie';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li
        key={movie.imdbId}
        className="movies-item"
      >
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
