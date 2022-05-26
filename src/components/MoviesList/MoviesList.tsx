import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList: React.FC<Props> = ({ films }) => (
  <div className="movies">
    {films.map(film => (
      <div className="card" data-cy="card" key={film.imdbId}>
        <MovieCard film={film} />
      </div>
    ))}
  </div>
);
