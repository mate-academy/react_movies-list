import React from 'react';
import './MoviesList.scss';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard';

type Props = {
  moviesCatalog: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesCatalog }) => (
  <ul className="movies">
    {moviesCatalog.map(movie => (
      <li key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
