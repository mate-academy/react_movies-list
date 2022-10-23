import React from 'react';
import './MoviesList.scss';

import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MoviesList: React.FC = () => (
  <div className="movies">
    {moviesFromServer.map(movie => (
      <MovieCard {...movie} />
    ))}
  </div>
);
