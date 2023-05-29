import React from 'react';
import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import moviesFromServer from '../../api/movies.json';

export const MoviesList: React.FC = () => (
  <div className="movies">
    <MovieCard movies={moviesFromServer} />
  </div>
);
