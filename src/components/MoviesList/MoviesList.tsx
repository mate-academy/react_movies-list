import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/types';
import './MoviesList.scss';

type Props = {
  moviesList: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesList }) => (
  <ul className="movies">
    {moviesList.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard movie={movie} />
      </li>
    ))}
  </ul>
);
