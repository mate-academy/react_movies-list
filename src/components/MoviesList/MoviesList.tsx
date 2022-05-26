import React from 'react';
import './MoviesList.scss';
import { MovList } from '../../react-app-env';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC<MovList> = ({ movies }) => (
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
