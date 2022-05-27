import React from 'react';
import './MoviesList.scss';
import { Film } from '../../react-app-env';
import { MovieCard } from '../MovieCard';

interface Prop {
  movies: Film[];
}

export const MoviesList: React.FC<Prop> = ({ movies }) => (
  <div className="movies">
    { movies.map(item => (
      <div className="card" data-cy="card" key={item.imdbId}>
        <MovieCard
          movie={item}
        />
      </div>
    )) }

  </div>
);
