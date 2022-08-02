import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';
import { Movie } from '../../types/movie';

type Props = {
  list: Movie[];
};

export const MoviesList: React.FC<Props> = ({ list = [] }) => {
  return (
    <div className="movies">
      { list.map(item => (
        <div key={item.imdbId} className="card" data-cy="card">
          <MovieCard {...item} />
        </div>
      ))}
    </div>
  );
};
