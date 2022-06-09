import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { Props } from '../../types/Props';

export const MoviesList: React.FC<Props> = ({ movies = [] }) => (
  <div className="movies">
    {movies.map(item => (
      <div className="card" key={item.imdbId} data-cy="card">
        <MovieCard {...item} />
      </div>
    ))}
  </div>
);
