/* eslint-disable max-len */
import React from 'react';
import { MoviesList } from './components/MoviesList';
import { Movie } from './types/Movie';

import './App.scss';
import moviesFromServer from './api/movies.json';

const movies: Movie[] = moviesFromServer;

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={movies} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
