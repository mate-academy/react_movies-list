import React from 'react';
import './MoviesList.scss';
import { MovieType } from '../../types/Movie';

import { MovieCard } from '../MovieCard';

interface MovieListProps {
  movies: MovieType[]
}

export const MoviesList: React.FC<MovieListProps> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <li className="card" data-cy="Movie" key={movie.imdbId}>
        <MovieCard
          movie={movie}
        />
      </li>
    ))}
  </ul>
);
