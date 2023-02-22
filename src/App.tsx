import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={moviesFromServer} />
    </div>
    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
