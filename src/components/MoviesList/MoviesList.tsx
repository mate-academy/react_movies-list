import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/Movie';

type Props = {
  moviesFromServer: Movie[];
};

export const MoviesList: React.FC<Props> = ({ moviesFromServer = [] }) => (
  <ul className="movies">
    { moviesFromServer.map(movie => (
      <li
        key={movie.imdbId}
        className="card"
      >
        <MovieCard {...movie} />
      </li>
    ))}
  </ul>
);
