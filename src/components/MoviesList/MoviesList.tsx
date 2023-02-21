import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/Movie';

type MovieType = {
  movies: Movie[];
};

export const MoviesList: React.FC <MovieType> = ({ movies }) => (
  <ul className="movies">
    {movies.map((movie) => (
      <li className="card" key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
