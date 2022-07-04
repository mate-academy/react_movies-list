/* eslint-disable max-len */
import React from 'react';

import { MoviesList } from './components/MoviesList';

import moviesFromServer from './api/movies.json';

import './App.scss';

/* eslint-disable max-len */
export const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <MoviesList movies={moviesFromServer} />
    </div>

    <div className="sidebar">
      Sidebar will be here
    </div>
  </div>
);
