import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';
import { Props } from './Props';

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
