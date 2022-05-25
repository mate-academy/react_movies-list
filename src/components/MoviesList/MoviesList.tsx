import React from 'react';
import { MovieCard } from '../MovieCard';
import { List } from '../../type/MoviesList';
import './MoviesList.scss';

type Props = {
  moviesListAPI: List[];
};

export const MoviesList: React.FC<Props> = ({ moviesListAPI }) => (
  <div className="movies">
    {moviesListAPI.map(movieCard => (
      <div className="card" key={movieCard.imdbId} data-cy="card">
        <MovieCard {...movieCard} />
      </div>
    ))}
  </div>
);
