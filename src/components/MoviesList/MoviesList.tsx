import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <ul className="movies">
    {movies.map(movie => (
      <li key={movie.imdbId} className="card">
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
