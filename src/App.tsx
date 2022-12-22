/* eslint-disable max-len */
import React from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => (
  <div className="app-page">
    <div className="app-page__content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="app-page__sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
