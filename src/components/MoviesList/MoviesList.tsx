import React from 'react';
import { MovieCard } from '../MovieCard';
import { List } from '../../react-app-env';

import './MoviesList.scss';

type Props = {
  movies: List[];
};

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(movieCard => (
      <div className="card" key={movieCard.imdbId} data-cy="card">
        <MovieCard moviesCardAPI={movieCard} />
      </div>
    ))}
  </div>
);
