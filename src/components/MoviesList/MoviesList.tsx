import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <li className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
