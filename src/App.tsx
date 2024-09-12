/* eslint-disable max-len */
import React from 'react';

import './App.scss';
// import moviesFromServer from './api/movies.json';
// import { MovieCard } from './components/MovieCard';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
