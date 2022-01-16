import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { List } from '../MovieCard/List';

type Props = {
  moviesCatalog: List[];
};

export const MoviesList: React.FC<Props> = ({ moviesCatalog }) => (
  <ul className="movies">
    {moviesCatalog.map(movie => (
      <li className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
