import React from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import { Sidebar } from './components/Sidebar';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <Sidebar movies={moviesFromServer} />
  </div>
);
