import './App.scss';

import React from 'react';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

/* eslint-disable max-len */

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
